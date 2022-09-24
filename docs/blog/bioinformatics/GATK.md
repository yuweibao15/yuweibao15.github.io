---
title: GATK Practice
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
#   - Guide
---
GATK is a Genome Analysis Toolkit. Here are some notes about GATK:
## GATK data pre-processing
[GATK data pre-processing](https://gatk.broadinstitute.org/hc/en-us/articles/360035535912-Data-pre-processing-for-variant-discovery)

Here is a workflow from GATK:

![GATK_preprocessing.png](./fig/GATK_preprocessing.png)
1. Raw Mapped Reads (Bam) -> `MarkDuplicates` 
Check and compare results
```sh
samtools view BEFORE_MARKDUPLICATES.bam | wc -l
samtools view AFTER_MARKDUPLICATES.bam | wc -l
```
2. -> `BaseRecalibrator` + `ApplyBQSR` -> Analysis-Ready Rads (Bam)

## GATK Somatic short variant discovery (SNVs + Indels)
[GATK Somatic short variant discovery (SNVs + Indels)](https://gatk.broadinstitute.org/hc/en-us/articles/360035894731-Somatic-short-variant-discovery-SNVs-Indels-)

## CNV
Here is a workflow from GATK:

![GATK CNV](./fig/GATK_CNV.png)
GATK tutorials:
[Part I](https://gatk.broadinstitute.org/hc/en-us/articles/360035531092)
[Part II](https://gatk.broadinstitute.org/hc/en-us/articles/360035890011)

[Ref in Chinese](https://mp.weixin.qq.com/s/Lvfy7Y352WhLMuzawMvroA)