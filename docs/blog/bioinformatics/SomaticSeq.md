---
title: Run SomaticSeq to combine multiple SNV calls
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

## Installation (v3.3.0)
```sh
wget https://github.com/bioinform/somaticseq/archive/refs/tags/v3.3.0.zip
unzip v3.3.0.zip
cd somaticseq-3.3.0
```

```sh
wget https://github.com/bioinform/somaticseq/archive/refs/tags/v3.7.3.zip
unzip v3.7.3.zip
cd somaticseq-3.7.3
./setup.py install

conda activate py38_GR
conda install -c bioconda somaticseq
```

[^github]:https://github.com/bioinform/somaticseq