---
title: Prepare fasta with .fai and .dict
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

If you want to use a public aviliable reference.fasta, eg. Drosophila Melanogaster r6.39 from FlyBase.

```sh
mkdir Ref_genome
cd Ref_genome
wget http://ftp.flybase.net/genomes/Drosophila_melanogaster/dmel_r6.39_FB2021_02/fasta/dmel-all-chromosome-r6.39.fasta.gz

# Unizip .gz
gunzip dmel-all-chromosome-r6.39.fasta.gz
# Create .fai
bwa index dmel-all-chromosome-r6.39.fasta
```

This step creates
```js
.fasta.amb
.fasta.ann
.fasta.bwt
.fasta.pac
.fasta.sa
```