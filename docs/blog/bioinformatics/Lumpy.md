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
```
:::

[^github]:https://github.com/arq5x/lumpy-sv
[^gatk_readgroup]:https://gatk.broadinstitute.org/hc/en-us/articles/360035890671-Read-groups