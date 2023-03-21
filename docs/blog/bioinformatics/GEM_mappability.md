---
title: GEM - mappability
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

GEM mappability [^GEM] is a tool to estimate genome mappability and here is a tutorial by Dmytro Kryvokhyzha [^GEM_tutorial]. Thanks to Nick Riddiford for sharing his insights and scripts [^Nick].

## Why do we want to obtain the genome mappable region?
In the paper *Fast Computation and Applications of Genome Mappability* [^GEM], the authors mentioned these three major reasons:
1. Mappability information can be used as a prior to optimize an HTS experiment then to increase the number of uniquely mappable reads.
2. Mappability information is essential when producing qualitative estimates. 
3. Mappability information is important when there is a need to re-sequence a particualr genomic region,  or to produce quantitative estimates of transcript abundance from RNASeq experiments.

## How do we obtain the genome mappable region?
Following the tutorial by Dmytro Kryvokhyzha [^GEM_tutorial], we can get `GEM` mappability and convert it to `BED` file.

### 1. Download GEM library
```sh
wget http://barnaserver.com/gemtools/releases/GEMTools-static-i3-1.7.1.tar.gz
tar -xvf GEMTools-static-i3-1.7.1.tar.gz
export PATH=$PATH:/PATH_TO/gemtools-1.7.1-i3/bin
```

### 2. Estimate GEM mappability
```sh
gem-indexer -T 10 -i reference.genome.fa -o OUT_FOLDER/PREFIX
```
:::tip gem-indexer Parameters
Parameter | Meaning | Other info
---|---|---
-i | input_file       |          (mandatory)
-o | index_output_prefix   |       (mandatory)
-T --threads | thread_number   | (for the BWT generator, default=1)
:::

```sh
gem-mappability -T 10 -I OUT_FOLDER/PREFIX.gem -l 150 -o OUT_FOLDER/PREFIX_mappability_150
```
:::tip gem-mappability Parameters
Parameter | Meaning | Other info
---|---|---
-I | index_prefix |        (mandatory)
-l | read_length |    (mandatory)
-o | output_prefix   |       (mandatory)
-T  | thread_number   | (default=1)
:::

The reasons Dmytro use `-T 10` and `-l 150`:
"I used a 150bp kmer size because my data was generated with 150bp read length. Also, I run it on 10 cores (-T 10). You can change these options to fit your needs."

### 3. Convert GEM mappability to BED
```sh
gem-2-wig -I OUT_FOLDER/PREFIX.gem -i OUT_FOLDER/PREFIX_mappability_150.gem.mappability -o OUT_FOLDER/PREFIX_mappability
```
:::tip gem-2-wig Parameters
Parameter | Meaning | Other info
---|---|---
-I --index | archive_file |        (mandatory)
-l --input |  mappability_file |    (mandatory)
-o | output_prefix   |       (mandatory)
:::

### 4. Merge overlapping intervals in BED
Dmytro wrote a python script [^merge_bed] to merge overlapping mappability intervals.
```sh
python ~/git/genotype-files-manipulations/combine_overlapping_BEDintervals.py -i OUT_FOLDER/PREFIX_mappability_150.bed -o OUT_FOLDER/PREFIX_mappability_150.merged.bed -v 0
```
where `-v` defines the overhang size between intervals.

For more details, please visit Dmytro Kryvokhyzha's post: [^GEM_tutorial]

## Summary script

```sh
#!/bin/bash
# Input files
ref=reference.genome.fa
out=PATH_TO_OUTPUT
pre=dml6

# Personalize parameters: threads (N) and read length (RL)
N=10
RL=150

gem-indexer -T $N -i $ref -o $out/$pre
gem-mappability -T $N -I $out/$pre.gem -l $RL -o $out/$pre\_mappability\_$RL
gem-2-wig -I $out/$pre.gem -i $out/$pre\_mappability\_$RL.gem.mappability -o $out/$pre\_mappability
```

[^GEM]:https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0030377
[^GEM_tutorial]:https://evodify.com/gem-mappability/
[^merge_bed]:https://github.com/evodify/genotype-files-manipulations/blob/master/combine_overlapping_BEDintervals.py
[^Nick]:https://github.com/nriddiford/Investigating-structural-variation-in-cancer-genomes/blob/master/GenomeMappability.md