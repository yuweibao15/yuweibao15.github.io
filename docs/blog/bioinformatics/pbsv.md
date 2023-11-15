---
title: Run pbsv to call SVs
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - SV
---

Due to the tool `transposition_deTEct` only takes structural variant detected by either `pbsv` or `sniffles`, we run `pbsv`.

:::danger Data type
It has to be long-read DNA data!
:::

## Installation
```sh
conda activate py38_deTEct
conda install -c bioconda pbsv
conda install pbmm2 # The recommended aligner
```

## Usage
```sh
conda activate py38_deTEct
REF=/media/XLStorage/ybao2/RefGenome/dmel-all-chromosome-r6.39.fasta
fq=/media/XLStorage/ybao2/Jimmy_data/TEST_deTEct/test.fq.gz
bam=/media/XLStorage/ybao2/Jimmy_data/TEST_deTEct/test.bam
sample=testSample
out=/media/XLStorage/ybao2/Jimmy_data/TEST_deTEct

# 1. Align reads to a reference genome
pbmm2 align $REF $fq $bam --sort --sample $sample
# 2. Discover signatures of structural variation
pbsv discover $bam $out/$sample.svsig.gz
# optionally index svsig.gz to allow random access via `pbsv call -r`
tabix -c '#' -s 3 -b 4 -e 4 $out/$sample.svsig.gz
# 3. Call structural variants and assign genotypes
pbsv call $REF $out/$sample.svsig.gz $out/$sample.ref.var.vcf
```

[^pbsv]:https://github.com/PacificBiosciences/pbsv