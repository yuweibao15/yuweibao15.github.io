---
title: Run Delly to get structural variants
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - SV
---

## Installation 
Using docker image which pulls the latest version (v1.1.6) by default.[^docker]
```sh
docker pull dellytools/delly
```
## Usage
:::tip Input file
Delly needs a sorted, indexed and duplicate marked bam file for every input sample. [^Delly]
:::
```sh
delly call -g hg19.fa input.bam > delly.vcf
delly call [OPTIONS] -g <ref.fa> <sample1.sort.bam> <sample2.sort.bam>
```
### Somatic SV calling
1. At least one tumor sample and a matched control sample are required for SV discovery
```sh
delly call -x hg19.excl -o t1.bcf -g hg19.fa tumor1.bam control1.bam
```
2. Somatic pre-filtering requires a tab-delimited sample description file where the first column is the sample id (as in the VCF/BCF file) and the second column is either tumor or control.
```sh
delly filter -f somatic -o t1.pre.bcf -s samples.tsv t1.bcf
```
3. Genotype pre-filtered somatic sites across a larger panel of control samples to efficiently filter false postives and germline SVs. For performance reasons, this can be run in parallel for each sample of the control panel and you may want to combine multiple pre-filtered somatic site lists from multiple tumor samples.
```sh
delly call -g hg19.fa -v t1.pre.bcf -o geno.bcf -x hg19.excl tumor1.bam control1.bam ... controlN.bam
```
4. Post-filter for somatic SVs using all control samples.
```sh
delly filter -f somatic -o t1.somatic.bcf -s samples.tsv geno.bcf
```

[^Delly]:https://github.com/dellytools/delly
[^docker]:https://hub.docker.com/r/dellytools/delly