---
title: Different variant callers
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

## SomaticSniper (v1.0.5.0) [^SomaticSniper]

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

## Verscan
### Installation
```sh
wget https://github.com/dkoboldt/varscan/releases/download/2.4.2/VarScan.v2.4.2.jar
```
### Usage
```sh
java -jar VarScan.jar  [COMMAND] [OPTIONS]
```

# Prepare fasta to be used as reference genome
```sh
# Create fasta.dict
gatk CreateSequenceDictionary -R ref.fasta

# Create fasta.index
samtools faidx ref.fasta
```

[^SomaticSniper]:https://github.com/genome/somatic-sniper
