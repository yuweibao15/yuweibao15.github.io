---
title: Run Lumpy to get structural variants
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - SV
---

`LUMPY` is a probabilistic framework for structural variant discovery.

## Installation
Here, we are using `LUMPY (v0.2.12)`.
```sh
wget https://github.com/arq5x/lumpy-sv/releases/download/0.2.13/lumpy-sv-v0.2.13.tar.gz
tar -xvzf lumpy-sv-v0.2.13.tar.gz
cd lumpy-sv-v0.2.13/
make
```
Test
```sh
PATH_TO/lumpy-sv-v0.2.13/bin/lumpy --help
```
## Usage
### Part I Pre-processing
1. Align the data using `BWA-MEM`
```sh
bwa mem -R "@RG\tID:id\tSM:sample\tLB:lib" human_g1k_v37.fasta sample.1.fq sample.2.fq \
    | samblaster --excludeDups --addMateTags --maxSplitCount 2 --minNonOverlap 20 \
    | samtools view -S -b - \
    > sample.bam
```
2. Extract the discordant paired-end alignments
```sh
samtools view -b -F 1294 sample.bam > sample.discordants.unsorted.bam
```
:::tip What is 1294?
`-F 1294` means that the output will not include any read-pairs that have a mapped mate or any supplementary alignments. This can be useful for filtering out reads that are likely to be low-quality or misaligned, and for focusing on reads that are more likely to be informative for downstream analysis.
:::
3. Extract the split-read alignments
```sh
samtools view -h sample.bam \
    | scripts/extractSplitReads_BwaMem -i stdin \
    | samtools view -Sb - \
    > sample.splitters.unsorted.bam
```
where the script is from `LUMPY` [github](https://github.com/arq5x/lumpy-sv/blob/master/scripts/extractSplitReads_BwaMem) 
:::warning Executable
Remember to make `extractSplitReads_BwaMem` executable by
```sh
chmod +x scripts/extractSplitReads_BwaMem
```
:::
4. Sort both alignments
```sh
samtools sort sample.discordants.unsorted.bam sample.discordants
samtools sort sample.splitters.unsorted.bam sample.splitters
```
:::tip Parameters
```js
-h, --with-header          Include header in SAM output
```
:::
### Part II Running LUMPY (traditional)
#### 1. Generate empirical insert size statistics on each library in the BAM file
```sh
samtools view -r readgroup1 sample.bam \
    | tail -n+100000 \
    | scripts/pairend_distro.py \
    -r 101 \
    -X 4 \
    -N 10000 \
    -o sample.lib1.histo
```
:::tip Parameters
```js
-r, --read-group STR       ...are in read group STR
-X, --customized-index     Expect extra index file argument after <in.bam>
-N, --qname-file FILE      ...whose read name is listed in FILE
-o, --output FILE          Write output to FILE [standard output]
```
:::warning Where can you find readgroup? [^gatk_readgroup]
```sh
samtools view -H sample.bam | grep '^@RG'
```
:::
Remember to do `chmod +x scripts/pairend_distro.py`
#### 2. Run LUMPY with paired-end and split-reads
```sh
lumpy \
    -mw 4 \
    -tt 0 \
    -x exclude.bed \
    -pe id:sample,bam_file:sample.discordants.bam,histo_file:sample.lib1.histo,mean:500,stdev:50,read_length:101,min_non_overlap:101,discordant_z:5,back_distance:10,weight:1,min_mapping_threshold:20 \
    -sr id:sample,bam_file:sample.splitters.bam,back_distance:10,weight:1,min_mapping_threshold:20 \
    > sample.vcf
```
:::tip Parameters
```js
-mw     minimum weight for a call
-tt     trim threshold
-pe     bam_file:<file name>,
                id:<sample name>,
                histo_file:<file name>,
                mean:<value>,
                stdev:<value>,
                read_length:<length>,
                min_non_overlap:<length>,
                discordant_z:<z value>,
                back_distance:<distance>,
                min_mapping_threshold:<mapping quality>,
                weight:<sample weight>,
                read_group:<string>
-sr     bam_file:<file name>,
                id:<sample name>,
                back_distance:<distance>,
                min_mapping_threshold:<mapping quality>,
                weight:<sample weight>,
                min_clip:<minimum clip length>,
                read_group:<string>
-x      exclude file bed file
```
:::

### Part I Post-processing
SVTyper [^svTyper] can call genotypes on LUMPY output VCF files using a Bayesian maximum likelihood algorithm.
```sh
svtyper \      
    -B sample.bam \
    -S sample.splitters.bam \
    -i sample.vcf
    > sample.gt.vcf
```
:::warning Notice
When suing svTyper (v0.7.1), there will be a warning:
Warning: --split_bam (-S) is deprecated
:::
Instead, we shall follow the instructions on [^svTyper]
```sh
svtyper \
    -i sv.vcf \
    -B sample.bam \
    -l sample.bam.json \
    > sv.gt.vcf
```
### Understand output
Lumpy output a vcf file. Here is an example output:
```js
##fileformat=VCFv4.2
##source=LUMPY
......(Many headers include INFO, ALT and FORMAT, see below Parameters)......
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	P7
2L	654659	1	N	<DEL>	.	.	SVTYPE=DEL;STRANDS=+-:4;SVLEN=-520;END=655179;CIPOS=-10,518;CIEND=-498,9;CIPOS95=-3,161;CIEND95=-163,3;IMPRECISE;SU=4;PE=4;SR=0	GT:SU:PE:SR	./.:4:4:0
2L	163755	2	N	<DEL>	.	.	SVTYPE=DEL;STRANDS=+-:4;SVLEN=-308;END=164063;CIPOS=-10,306;CIEND=-146,9;CIPOS95=-3,81;CIEND95=-70,3;IMPRECISE;SU=4;PE=4;SR=0	GT:SU:PE:SR	./.:4:4:0
2L	491266	3	N	<DEL>	.	.	SVTYPE=DEL;STRANDS=+-:5;SVLEN=-502;END=491768;CIPOS=-10,500;CIEND=-444,9;CIPOS95=-3,107;CIEND95=-108,3;IMPRECISE;SU=5;PE=5;SR=0	GT:SU:PE:SR	./.:5:5:0
2L	606171	4	N	<DEL>	.	.	SVTYPE=DEL;STRANDS=+-:4;SVLEN=-243;END=606414;CIPOS=-10,60;CIEND=-242,9;CIPOS95=-2,42;CIEND95=-77,3;IMPRECISE;SU=4;PE=4;SR=0	GT:SU:PE:SR	./.:4:4:0
```

:::tip Parameters
```js
##INFO=<ID=SVTYPE,Number=1,Type=String,Description="Type of structural variant">
##INFO=<ID=SVLEN,Number=.,Type=Integer,Description="Difference in length between REF and ALT alleles">
##INFO=<ID=END,Number=1,Type=Integer,Description="End position of the variant described in this record">
##INFO=<ID=STRANDS,Number=.,Type=String,Description="Strand orientation of the adjacency in BEDPE format (DEL:+-, DUP:-+, INV:++/--)">
##INFO=<ID=IMPRECISE,Number=0,Type=Flag,Description="Imprecise structural variation">
##INFO=<ID=CIPOS,Number=2,Type=Integer,Description="Confidence interval around POS for imprecise variants">
##INFO=<ID=CIEND,Number=2,Type=Integer,Description="Confidence interval around END for imprecise variants">
##INFO=<ID=CIPOS95,Number=2,Type=Integer,Description="Confidence interval (95%) around POS for imprecise variants">
##INFO=<ID=CIEND95,Number=2,Type=Integer,Description="Confidence interval (95%) around END for imprecise variants">
##INFO=<ID=MATEID,Number=.,Type=String,Description="ID of mate breakends">
##INFO=<ID=EVENT,Number=1,Type=String,Description="ID of event associated to breakend">
##INFO=<ID=SECONDARY,Number=0,Type=Flag,Description="Secondary breakend in a multi-line variants">
##INFO=<ID=SU,Number=.,Type=Integer,Description="Number of pieces of evidence supporting the variant across all samples">
##INFO=<ID=PE,Number=.,Type=Integer,Description="Number of paired-end reads supporting the variant across all samples">
##INFO=<ID=SR,Number=.,Type=Integer,Description="Number of split reads supporting the variant across all samples">
##INFO=<ID=BD,Number=.,Type=Integer,Description="Amount of BED evidence supporting the variant across all samples">
##INFO=<ID=EV,Number=.,Type=String,Description="Type of LUMPY evidence contributing to the variant call">
##INFO=<ID=PRPOS,Number=.,Type=String,Description="LUMPY probability curve of the POS breakend">
##INFO=<ID=PREND,Number=.,Type=String,Description="LUMPY probability curve of the END breakend">
##ALT=<ID=DEL,Description="Deletion">
##ALT=<ID=DUP,Description="Duplication">
##ALT=<ID=INV,Description="Inversion">
##ALT=<ID=DUP:TANDEM,Description="Tandem duplication">
##ALT=<ID=INS,Description="Insertion of novel sequence">
##ALT=<ID=CNV,Description="Copy number variable region">
##FORMAT=<ID=GT,Number=1,Type=String,Description="Genotype">
##FORMAT=<ID=SU,Number=1,Type=Integer,Description="Number of pieces of evidence supporting the variant">
##FORMAT=<ID=PE,Number=1,Type=Integer,Description="Number of paired-end reads supporting the variant">
##FORMAT=<ID=SR,Number=1,Type=Integer,Description="Number of split reads supporting the variant">
##FORMAT=<ID=BD,Number=1,Type=Integer,Description="Amount of BED evidence supporting the variant">
```
:::

[^github]:https://github.com/arq5x/lumpy-sv
[^gatk_readgroup]:https://gatk.broadinstitute.org/hc/en-us/articles/360035890671-Read-groups
[^svTyper]:https://github.com/hall-lab/svtyper