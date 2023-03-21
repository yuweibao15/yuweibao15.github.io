---
title: Filter bam using gatk
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
#   - Guide
---

All the following information is from `gatk (v4.2.6.1)` [^gatk]

### 1. MarkDuplicates (Picard): Identifies duplicate reads [^DUP]
```sh
java -jar picard.jar MarkDuplicates \
      -I input.bam \
      -O marked_duplicates.bam \
      -M marked_dup_metrics.txt \
      --REMOVE_DUPLICATES TRUE \
```
:::tip Parameters
- `marked_dup_metrics.txt` was created to store duplication metrics.
- `--REMOVE_DUPLICATES` is optional. If true do not write duplicates to the output file instead of writing them with appropriate flags set.
:::

### 2. AddOrReplaceReadGroups (Picard): Assigns all the reads in a file to a single new read-group. [^RG]
```sh
java -jar picard.jar AddOrReplaceReadGroups \
       I=input.bam \
       O=output.bam \
       RGID=4 \
       RGLB=lib1 \
       RGPL=ILLUMINA \
       RGPU=unit1 \
       RGSM=read_group_sample_name
```

### 3. BaseRecalibrator: Generates recalibration table for Base Quality Score Recalibration (BQSR) [^BQSR]
```sh
gatk BaseRecalibrator \
   -I my_reads.bam \
   -R reference.fasta \
   --known-sites sites_of_variation.vcf \
   --known-sites another/optional/setOfSitesToMask.vcf \
   -O recal_data.table
```
:::tip Parameters
- `--known-sites`: One or more databases of known polymorphic sites used to exclude regions around known polymorphisms from analysis.
:::

### 4. ApplyBQSR: Apply base quality score recalibration [^apply_BQSR]
```sh
gatk ApplyBQSR \
   -R reference.fasta \
   -I input.bam \
   --bqsr-recal-file recalibration.table \
   -O output.bam
```

### 5. BuildBamIndex (Picard): Generates a BAM index ".bai" file [^index]
```sh
java -jar picard.jar BuildBamIndex \
      I=input.bam
```

[^gatk]:https://gatk.broadinstitute.org/hc/en-us/articles/5358824293659--Tool-Documentation-Index
[^DUP]:https://gatk.broadinstitute.org/hc/en-us/articles/5358880192027-MarkDuplicates-Picard-
[^RG]:https://gatk.broadinstitute.org/hc/en-us/articles/5358911906459-AddOrReplaceReadGroups-Picard-
[^BQSR]:https://gatk.broadinstitute.org/hc/en-us/articles/5358896138011-BaseRecalibrator
[^apply_BQSR]:https://gatk.broadinstitute.org/hc/en-us/articles/5358826654875-ApplyBQSR
[^index]:https://gatk.broadinstitute.org/hc/en-us/articles/5358886012443-BuildBamIndex-Picard-