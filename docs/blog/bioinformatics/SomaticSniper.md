---
title: Somatic Sniper
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

Here, we are learning how to use `SomaticSniper` to identify single nucleotide positions that are different between tumor and normal and further to filter variants using some provided Perl scripts [^perl] and `bam-readcount` [^bam-readcount].

## 1. SomaticSniper (v1.0.5.0) [^SomaticSniper]
### Purpose
`SomaticSniper` identifies single nucleotide positions that are different between tumor and normal.

### Installation
```sh
# Build dependencies for Ubuntu
sudo apt-get install build-essential git-core cmake zlib1g-dev libncurses-dev

# Clone the git repo
git clone https://github.com/genome/somatic-sniper.git

# Build SomaticSniper
mkdir somatic-sniper/build
cd somatic-sniper/build
cmake ../
make deps
make -j
make test

# Add path to environment ~/.bashrc
export PATH=$PATH:/PATH_TO/somatic-sniper/build/bin
```
### Usage
```sh
bam-somaticsniper [options] -f <ref.fasta> <tumor.bam> <normal.bam> <snv_output_file>
```
Recommended setting:
```sh
bam-somaticsniper -Q 40 -G -L -f reference.fa tumor.bam normal.bam output.txt
```

Recommended seeting by GR paper author: [^GR]
```sh
bam-somaticsniper -Q 40 -L -f reference.fa tumor.bam normal.bam output.txt
```

:::tip Parameters
-f   FILE REQUIRED reference sequence in the FASTA format
-Q  INT filtering somatic snv output with somatic quality less than INT [15]
-G FLAG do not report Gain of Referene variants as determined by genotypes
-L FLAG do not report LOH variants as determined by genotypes

:::

## 2. `bam-readcount`
TBA
### 3. Basic filtering with provided Perl scripts

A small number of basic Perl scripts are included in the SomaticSniper package (located in src/scripts of the source code release) [^perl]
TBA


[^SomaticSniper]:https://github.com/genome/somatic-sniper
[^GR]:https://genome.cshlp.org/content/early/2021/06/24/gr.268441.120
[^perl]:https://github.com/genome/somatic-sniper/tree/master/src/scripts
[^bam-readcount]:https://github.com/genome/bam-readcount