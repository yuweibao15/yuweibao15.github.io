---
title: Run novoBreak to get structural variants
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - SV
---

`novoBreak` (v1.1) is a structural variant breakpoint detection tool described in the papers [^paper] [^paper2]. The corresponding Github page is [^github]. A public workflow is available here [^workflow].

Overall, my personal experience with `novoBreak` was painful due to limited documentation and 0 well-established tutorials.

## Installation
```sh
git clone https://github.com/czc/nb_distribution.git
export PATH=$PWD/nb_distribution/:$PATH
novoBreak
```

<pre>
novoBreak - a tool for discovering somatic sv breakpoints
Auther: Zechen Chong <zchong@mdanderson.org> 
Version: 1.1 (r20151007)
Usage:
  novoBreak -i <tumorbam> -c <normalbam> -r <reference> -o <output.kmer> [options]
Options:
  -h             This help
  -i <string>    Tumor bam file
  -c <string>    Normal bam file
  -r <string>    Reference file in fasta format
  -k <int>       Kmer size, <=31 [31]
  -o <string>    Output kmer
  -g <int>       Output germline events [0]
  -m <int>       Minimum kmer count regarded as novo kmers [3]****
</pre>

## Usage
```sh
novoBreak -i <tumorbam> -c <normalbam> -r <reference> -o <output.kmer> [options]

bash <A_PATH>/novoBreak/run_novoBreak.sh <novoBreak_exe_dir> <ref> <tumor_bam> <normal_bam> <n_CPUs:INT> [outputdir:-PWD]
```
:::tip Input and output
Input: 
- A reference sequence file of mapping results of the paired-end reads 
- Two bam files (tumor and normal)

Output:
A filtered high confident VCF file (novoBreak.pass.flt.vcf)
:::

## Filter
According to [^github], "To increase sensitivity, novoBreak tries to infer as many SVs as possible based on the local assembly results. But many of the inferred SVs may be false positives due to misassembly or lack of enough evidence. "
Therefore, some default filtering is available such as the minimum SV size as 100 bp and no upper limit.

## Debug
### Problem description
Test to see if you can use shared library by doing
```sh
PATH_TO/nb_distribution/samtools
```
When we look into the `PATH_TO_nb_distribution` folder, we can see that there are several perl scripts also some softwares such as `samtools`, `bwa`, `SSALE`. The work of `navoBreak` calls the `samtools` it provided in the process. Thus, we need to ensure that the shared library works. Similar issue is addressed here: [^issue].

Error message: 
<pre>
error while loading shared libraries: libncurses.so.5: cannot open shared object file: No such file or directory`
</pre>

### Solution
```sh
sudo apt-get install libncurses5
```

## What is inside `PATH_TO/novoBreak/run_novoBreak.sh`? [^github]
```sh
#!/bin/bash

if [ $# != 5 -a $# != 6 ]; then
	echo $0 \<novoBreak_exe_dir\> \<ref\> \<tumor_bam\> \<normal_bam\> \<n_CPUs:INT\> \[outputdir:-PWD\]
	exit 1
fi

nbbin=`readlink -f $1`
ref=`readlink -f $2`
tumor_bam=`readlink -f $3`
normal_bam=`readlink -f $4`
n_cpus=$5
if [ $# == 6 ]; then
	output=`readlink -f $6`
fi
novobreak=$nbbin/novoBreak
bwa=$nbbin/bwa
samtools=$nbbin/samtools

lastdir=`pwd`

if [ $# == 6 ]; then
	mkdir $output
	cd $output
fi
$novobreak -i $tumor_bam -c $normal_bam -r $ref  -o kmer.stat 
#$samtools collate somaticreads.bam somaticreads.srt

mkdir group_reads
cd group_reads
#$samtools view -h ../somaticreads.srt.bam | perl $nbbin/fetch_discordant.pl - $tumor_bam > discordant.sam
$samtools sort -n -@ $n_cpus -o somaticreads.srtnm.bam ../somaticreads.bam
$samtools bam2fq -1 read1.fq -2 read2.fq  somaticreads.srtnm.bam
perl $nbbin/group_bp_reads.pl ../kmer.stat read1.fq read2.fq  > bp_reads.txt
cls=`tail -1 bp_reads.txt | cut -f1`
rec=`echo $cls/$n_cpus | bc`
rec=$((rec+1))
mkdir split
cd split
awk -v rec=$rec '{print > int($1/rec)".txt"}' ../bp_reads.txt
for file in *.txt
do
	echo $file
	perl $nbbin/run_ssake.pl $file > /dev/null &
done
wait
cd ..
cd ..
mkdir ssake
cd ssake
#you can split the bp_reads.txt into multiple files to run them together
#perl $nbbin/run_ssake.pl ../group_reads/bp_reads.txt > /dev/null
awk 'length($0)>1' ../group_reads/split/*.ssake.asm.out > ssake.fa
$bwa mem -t $n_cpus -M $ref ssake.fa > ssake.sam
perl $nbbin/infer_sv.pl ssake.sam > ssake.vcf
#grep -v '^#' ssake.vcf | sed 's/|/\t/g' | sed 's/read//' |  awk '{if(!x[$1$2]){y[$1$2]=$14;x[$1$2]=$0}else{if($14>y[$1$2]){y[$1$2]=$14; x[$1$2]=$0}}}END{for(i in x){print x[i]}}' | sort -k1,1 -k2,2n  | perl -ne 'if(/TRA/){print}elsif(/SVLEN=(\d+)/){if($1>100){print $_}}elsif(/SVLEN=-(\d+)/){if($1>100){print}}' > ssake.pass.vcf
grep -v '^#' ssake.vcf | awk  -v OFS="\t" '{gsub(/\|/, "\t", $11); print}' | sed 's/read//' |  awk '{if(!x[$1$2]){y[$1$2]=$14;x[$1$2]=$0}else{if($14>y[$1$2]){y[$1$2]=$14; x[$1$2]=$0}}}END{for(i in x){print x[i]}}' | sort -k1,1 -k2,2n  | perl -ne 'if(/TRA/){print}elsif(/SVLEN=(\d+)/){if($1>100){print $_}}elsif(/SVLEN=-(\d+)/){if($1>100){print}}' > ssake.pass.vcf
#you can split the ssake.pass.vcf into multiple files to run them together
num=`wc -l ssake.pass.vcf | cut -f1 -d' '`
rec=`echo $num/$n_cpus | bc`
rec=$((rec+1))
mkdir split
cd split
split -l $rec ../ssake.pass.vcf # set proper split parameters when needed
for file in x??
do
	echo $file
	perl $nbbin/infer_bp_v4.pl $file $tumor_bam $normal_bam > $file.sp.vcf &
done
wait
cd ..

##below is a naive filter, pay attention to it
#perl $nbbin/filter_sv_icgc.pl nbasm.pass.sp.vcf > ../novoBreak.pass.flt.vcf
grep '^#' ssake.vcf > header.txt	
perl $nbbin/filter_sv_icgc.pl split/*.sp.vcf | cat header.txt - > ../novoBreak.pass.flt.vcf
cd ..
cd $lastdir

```

:::danger Interpret results
It is very frustrated that I did not find other blogs or tutorials about `novoBreak` examples. 
Using my data, I see zero variants in `novoBreak.pass.flt.vcf`. Thus, I had to dig into `PATH_TO/novoBreak/run_novoBreak.sh` and check the results of each step. 
Every step includes variants up to `split/*.sp.vcf`.
The step `perl $nbbin/filter_sv_icgc.pl split/*.sp.vcf | cat header.txt - > ../novoBreak.pass.flt.vcf` is acting weird, which only output vcf headers to `novoBreak.pass.flt.vcf`.
:::

## Reference
1. `gGnome`: a flexible, queriable R interface to graphs and walks of genomic intervals tutorial: http://mskilab.com/gGnome/tutorial.html
2. Summary tools: http://www.geneclub.net.cn/info/archives/13753
<style>
pre {
  background-color:#38393d;
  /* color: #FF33F3; */
  color: #33F3FF;
}
</style>

[^paper]:https://www.nature.com/articles/nmeth.4084
[^paper2]:https://pubmed.ncbi.nlm.nih.gov/30039369/
[^github]:https://github.com/czc/nb_distribution
[^workflow]:https://cgc.sbgenomics.com/public/apps/ZCHONG/novobreak-commit/novobreak-analysis
[^issue]:https://stackoverflow.com/questions/17005654/error-while-loading-shared-libraries-libncurses-so-5
