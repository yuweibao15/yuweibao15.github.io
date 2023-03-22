---
title: Filter bam using samtools
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
#   - Guide
---

All the following information is from `samtools (v1.15.1)` [^samtools]

### 1. fixmate: [^fixmate]
Fill in mate coordinates, ISIZE and mate related flags from a name-sorted alignment.

```sh
samtools fixmate [-rpcm] [-O format] in.nameSrt.bam out.bam
```

:::tip Parameters
- `-r`: Remove secondary and unmapped reads.
- `-m`: Add ms (mate score) tags. These are used by `markdup` to select the best reads to keep.
:::

### 2. markdup: [^markdup]
Mark duplicate alignments from a coordinate sorted file that has been run through `samtools fixmate` with the `-m` option. This program relies on the MC and ms tags that `fixmate` provides.
```sh
samtools markdup [-l length] [-r] [-s] [-T] [-S] in.algsort.bam out.bam
```

:::tip Parameters
- `-r`: Remove duplicate reads.
:::

### 3. sort: [^sort]
Sort alignments by leftmost coordinates, or by read name when -n is used. An appropriate @HD-SO sort order header tag will be added or an existing one updated if necessary.
#### Usage
```sh
samtools sort [-l level] [-u] [-m maxMem] [-o out.bam] [-O format] [-M] [-K kmerLen] [-n] [-t tag] [-T tmpprefix] [-@ threads] [in.sam|in.bam|in.cram]
```
Parameters:
```js
-l INT     Set compression level, from 0 (uncompressed) to 9 (best) 
Set the desired compression level for the final output file, ranging from 0 (uncompressed) or 1 (fastest but minimal compression) to 9 (best compression but slowest to write), similarly to gzip(1)'s compression level setting.

-@ INT
Set number of sorting and compression threads. By default, operation is single-threaded.

-o FILE
Write the final sorted output to FILE, rather than to standard output.
```
### 4. view [^view]
View and convert SAM/BAM/CRAM files
#### Usage
```sh
samtools view [options] <in.bam>|<in.sam>|<in.cram> [region ...]
```

Parameters
```js
-S           Ignored (input format is auto-detected)
-b, --bam                  Output BAM
-@, --threads INT
               Number of additional threads to use [0]
-o, --output FILE          Write output to FILE [standard output]
```

### Other people's realated blogs
- Dave Tang: [Learning the BAM format](https://davetang.github.io/learning_bam_file/)
- Felix Yanhui Fan: [bam file format and samtools usage](https://felixfan.github.io/bam-sam/)

[^samtools]:http://www.htslib.org/doc/1.15/samtools.html
[^fixmate]:http://www.htslib.org/doc/1.15/samtools-fixmate.html
[^sort]:http://www.htslib.org/doc/1.15/samtools-sort.html
[^markdup]:http://www.htslib.org/doc/1.15/samtools-markdup.html
[^view]:http://www.htslib.org/doc/1.15/samtools-view.html