---
title: Run readtagger
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - SV
---

A tool to tag reads in target bam based on other bam files [^github]

## Installation 

```sh
conda create --name py38_readtagger python=3.8
conda activate py38_readtagger
mkdir readtagger
cd readtagger
pip install -r requirements.txt
```

`requirements.txt` [^requirements]

```js
bcbio-gff==0.6.6
biopython==1.74
cached_property==1.5.1
click==7.0
compare-reads==0.0.1
contextlib2==0.6.0.post1
pandas==1.0.3
pysam==0.15.4
scipy==1.3.1
sortedcontainers==2.1.0
multiprocessing_logging==0.3.0
edlib==1.3.4
mappy==2.17
```

<pre>
Successfully installed bcbio-gff-0.6.6 biopython-1.74 cached_property-1.5.1 click-7.0 compare-reads-0.0.1 contextlib2-0.6.0.post1 edlib-1.3.4 mappy-2.17 multiprocessing_logging-0.3.0 numpy-1.24.3 pandas-1.0.3 pysam-0.15.4 python-dateutil-2.8.2 pytz-2023.3 scipy-1.3.1 six-1.16.0 sortedcontainers-2.1.0
</pre>

Then
```sh
pip install readtagger
```

## Usage
To tag reads in file a.bam with file b.bam and output to path output.bam
```sh
readtagger --help
readtagger --tag_file a.bam --annotate_with b.bam ----output_file output.bam
```

[^requirements]:https://github.com/bardin-lab/readtagger/blob/master/requirements.txt
[^github]:https://github.com/bardin-lab/readtagger