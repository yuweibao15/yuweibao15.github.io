---
title: svParser for SV
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - SV
---

svParser [^github] is a tool to filter, genotype, annotate and combine VCF files from structural variant callers `LUMPY`, `DELLY` and `novobreak`.

## Installation
```sh
git clone https://github.com/nriddiford/svParser.git
wget -O- http://cpanmin.us | perl - -l ~/perl5 App::cpanminus local::lib
eval `perl -I ~/perl5/lib/perl5 -Mlocal::lib`
```
Add the following lines to your `bash_profile` (or `.profile/.bashrc/`):
```sh
eval `perl -I ~/perl5/lib/perl5 -Mlocal::lib`
export MANPATH=$HOME/perl5/man:$MANPATH
```

## Summarize variants
```sh
perl script/svParse.pl -v data/Droso_R7.lumpy.vcf -m l
```
Important: Variants called by `LUMPY` must also be genotyped by `SVTyper`

[^github]:https://github.com/bardin-lab/svParser