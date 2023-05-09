---
title: Merge SVs called by different tools
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - SV
---


## SURVIVOR [^github]
It can be used to identify consensus calling or to compare SVs across samples.

## Installation
```sh
git clone https://github.com/fritzsedlazeck/SURVIVOR.git
cd SURVIVOR/Debug
make
```

## Usage
It is a common practice to use multiple callers for one sample [^wiki]
First, we collect all files that we want to merge in a file. You might want to consider sorting the vcf files prior to merging.

Prepare input files either by

```sh
ls *vcf > sample_files
```

or create a file `vcf_files_list.txt`, which contains

```sh
/path/to/caller1_output.vcf
/path/to/caller2_output.vcf
/path/to/caller3_output.vcf
```

Then use `SURVIVOR` to obtain a call set. Using the parameters suggested by this paper [^paper]:

Consensus somatic SVs from multiple somatic SV callsets were generated using “merge” function of SURVIVOR (version: 1.0.7) with the parameters “max distance between breakpoints = 1000,” “Minimum number of supporting caller = 2,” and “Minimum size of SVs to be taken into account = 50.”

```sh
# ./SURVIVOR merge vcf_files_list.txt max_distance_sameSV minimum_num_calls max_distance_breakpoint merged_sv.vcf
./SURVIVOR merge sample_files 1000 2 1 1 0 50 sample_merged.vcf
```
:::tip Parameters
```js
File with VCF names and paths
max distance between breakpoints (0-1 percent of length, 1- number of bp) 
Minimum number of supporting caller
Take the type into account (1==yes, else no)
Take the strands of SVs into account (1==yes, else no)
Disabled.
Minimum size of SVs to be taken into account.
Output VCF filename
```
:::

This will merge all the vcf files specified in sample_files together using a maximum allowed distance of 1kb, as measured pairwise between breakpoints (begin1 vs begin2, end1 vs end2). Furthermore we ask SURVIVOR only to report calls supported by 2 callers and they have to agree on the type (1) and on the strand (1) of the SV. Note you can change this behavior by altering the numbers from 1 to e.g. 0. In addition, we told SURVIVOR to only compare SV that are at least 30bp long and print the output in sample_merged.vcf.[^wiki]

[^github]:https://github.com/fritzsedlazeck/SURVIVOR
[^wiki]:https://github.com/fritzsedlazeck/SURVIVOR/wiki
[^paper]:https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9648002/#Sec11