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
```sh
samtools sort [-l level] [-u] [-m maxMem] [-o out.bam] [-O format] [-M] [-K kmerLen] [-n] [-t tag] [-T tmpprefix] [-@ threads] [in.sam|in.bam|in.cram]
```

### 4. view [^view]
View and convert SAM/BAM/CRAM files
```sh
samtools view [options] in.sam|in.bam|in.cram [region...]
```

[^samtools]:http://www.htslib.org/doc/1.15/samtools.html
[^fixmate]:http://www.htslib.org/doc/1.15/samtools-fixmate.html
[^sort]:http://www.htslib.org/doc/1.15/samtools-sort.html
[^markdup]:http://www.htslib.org/doc/1.15/samtools-markdup.html
[^view]:http://www.htslib.org/doc/1.15/samtools-view.html