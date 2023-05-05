---
title: Run GRIDSS2 to get structural variants
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - SV
---

## GRIDSS2 [^github]

It is a comprehensive characterisation of somatic structural variation using single breakend variants and structural variant phasing [^paper]

## Installation

```sh
docker pull gridss/gridss
docker run gridss/gridss:latest
```

## Usage
```js
Usage: gridss [options] -r <reference.fa> -o <output.vcf.gz> -a <assembly.bam> input1.bam [input2.bam [...]]
```

[^paper]:https://pubmed.ncbi.nlm.nih.gov/34253237/
[^github]:https://github.com/PapenfussLab/gridss