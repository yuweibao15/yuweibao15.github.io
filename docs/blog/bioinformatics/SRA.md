---
title: SRA
icon: post
# This control sidebar order
order: 1
category:
  - Bioinformatics
tag:
  - Tool
#   - Guide
---

<!-- more -->

## What is SRA?
Download data use RSA tools following [RSA website](https://www.ncbi.nlm.nih.gov/sra/docs/sradownload/)

Download sequence data files using SRA Toolkit
[Download SRA Toolkit](https://github.com/ncbi/sra-tools/wiki)

Potential error: /lib64/libc.so.6: version `GLIBC_2.14' not found

Solution: [^GLIBC_2.14Error]
```sh
mkdir ~/glibc214
cd ~/glibc214
wget http://ftp.gnu.org/gnu/glibc/glibc-2.14.tar.gz
tar zxvf glibc-2.14.tar.gz
cd glibc-2.14
mkdir build
cd build
../configure --prefix=/opt/glibc-2.14
make -j4
sudo make install
export LD_LIBRARY_PATH=/opt/glibc-2.14/lib
```


[^GLIBC_2.14Error]: https://stackoverflow.com/questions/50564999/lib64-libc-so-6-version-glibc-2-14-not-found-why-am-i-getting-this-error