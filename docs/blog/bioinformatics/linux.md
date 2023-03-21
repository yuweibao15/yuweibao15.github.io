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

Add character # to the begging of each line of a file
```sh
sed 's/^/#/' file.txt  > new-file.txt
```
Alternatively, use the `-i` option with the sed command to edit a file in place. Be careful, as this will overwrite the file with the new changes.
```sh
sed -i 's/^/#/' file.txt
```

Delete empty files in current directory
```sh
find . -type f -empty -print -delete
```