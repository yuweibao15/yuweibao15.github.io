---
title: Linux 101
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

## A place to store some basic linux commands

Grep A or B:
```sh
grep -E "PATTERN1|PATTERN2" FILE
```

Extract .tar.gz file to current working directory:
```sh
tar -xf filename.tar.gz
```
Extract .tar.gz file to a different working directory:
```sh
tar -xf filename.tar.gz -C /home/user/files
```

Zip a file to .gz with progress
```sh
gzip -v filename
```
Decompress a file from .gz
```sh
gunzip filename.gz
```