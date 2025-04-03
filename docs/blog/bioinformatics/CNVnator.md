---
title: Run CNVnator to identify CNV
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

`CNVnator` is a tool for CNV discovery and genotyping from depth-of-coverage by mapped reads.

## Installation
### Pre-requirements
- Install `ROOT`: https://root.cern/install/
- Set up `ROOT` environment variables: https://root.cern.ch/root/html534/guides/users-guide/GettingStarted.html
- Download readline library: https://tiswww.case.edu/php/chet/readline/rltop.html
```sh
# Install ROOT package
conda config --set channel_priority strict
conda create -c conda-forge --name CNVnaotr root
conda activate CNVnaotr
# Set up ROOT environment path on HP-UX system
export SHLIB_PATH=$SHLIB_PATH:$ROOTSYS/lib
# Check if system has GNU readline library installed
dpkg -l | grep libreadline-dev
# If system has it, ignore the following to download:
# yum install readline-devel         # RPM-based systems
# apt-get install libreadline-dev   # Debian-based systems
```
### CNVnator
```sh
# wget https://github.com/abyzovlab/CNVnator/releases/download/v0.4.1/CNVnator_v0.4.1.zip
conda install cnvnator -c bioconda -c conda-forge

```

### Doesn't work
```sh
# Install CNVnator from Github
git clone https://github.com/abyzovlab/CNVnator.git
cd CNVnator
# Find the /path/to/src/samtools
which samtools
ln -s /path/to/src/samtools samtools
make OMP=no
```

<pre>
Compiling with NO parallel support
g++ -O3 -std=c++11 -DCNVNATOR_VERSION=\"v0.4.1\"  -I/home/ybao2/anaconda3/envs/CNVnaotr/include      -Isamtools -c cnvnator.cpp -o obj/cnvnator.o
cc1plus: warning: samtools: not a directory
In file included from cnvnator.cpp:14:
AliParser.hh:10:10: fatal error: sam.h: No such file or directory
   10 | #include "sam.h"
      |          ^~~~~~~
compilation terminated.
make: *** [Makefile:70: obj/cnvnator.o] Error 1
</pre>

### Control-FreeC
Ref: https://github.com/BoevaLab/FREEC
```sh
git clone https://github.com/BoevaLab/FREEC.git
cd FREEC/
cd src/
make
```
Test:
```sh
PATH_TO_FREEC/freec -conf myConfig.txt -sample sample.bam -control control.bam
```
Tutorial: https://github.com/LangYeastEvoLab/ControlFreec
