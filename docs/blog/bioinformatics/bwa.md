---
title: Use bwa, samtools for aligning reads to reference genome
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

The very first step of variant calling analysis is to align `sequences.fastq` to its reference genome `reference_genome.fasta`.

This can be done using the `bwa` [^github_bwa] then followed by the tool `samtools` [^github_samtools]

## `bwa`

For example, to align illumina paired-ends reads to its reference genome using `bwa mem` algorithm:
```sh
bwa mem reference_genome.fasta read1.fastq read2.fastq > output.sam
```

However, we want to convert sam to bam to save disc space, add additional information, mark duplicates, and index the bam file prior to use variant calling tools. Thus, we use `samtools`.

## `samtools`
```sh
samtools view # Convert SAM to BAM
samtools sort # Sort the BAM files according to their placement in the reference genome
samtools index # Index the BAM files
samtools merge # Merge multiple sorted BAM into a single BAM
```

## Use `bwa` and `samtools` together without saving the intermediate SAM files
Reference: Dr. Eric C. Anderson's Bioinformatics Handbook [^handbook]

```sh
bwa mem genome.fna R1.fq R2.fq |
  samtools view -u -  |   # convert the SAM output from bwa mem into BAM format
  samtools sort -l 9  - -o output_file.bam  # take stdin as the input, sort it, and write (with the best
                                        # compression possible: -l 9) the output to output_file.bam
```

### Practice with one job in one step
Get the example SAM data:
```sh
mkdir -p results/sam
wget https://eriqande.github.io/eca-bioinf-handbook/downloads/s001---1.sam
mv s001---1.sam results/sam/
```
Convert SAM to BAM:
```sh
samtools view -b results/sam/s001---1.sam > results/sam/s001---1.bam
```
Compare the size of SAM and BAM:
```sh
du -h results/sam/*
```
Read the alignments in a BAM file (without header)
```sh
samtools view results/sam/s001---1.bam
```
Read the alignments in a BAM file (with header)
```sh
samtools view -h results/sam/s001---1.bam
```
Read only the header in a BAM file
```sh
samtools view -H results/sam/s001---1.bam
```
Sort the BAM file in order of their placement in the reference genome
```sh
samtools sort -l 9 -o results/sam/s001---1.srt.bam results/sam/s001---1.bam
```
Check how `samtools sort` makes changes:
```sh
samtools view -H results/sam/s001---1.srt.bam | head    # @HD	VN:1.6	SO:coordinate
samtools view -H results/sam/s001---1.srt.bam | tail -n 10  # @PG line stored the commands
```
Index a bam:
```sh
samtools index results/sam/s001---1.srt.bam     # Create s001---1.srt.bam.bai
```
Merge multiple sorted BAM files into a single BAM file:
```sh
samtools merge [options] output-bam-name.bam  sorted-input-bam-1.bam sorted-input-bam-2.bam ..
```
Check the mapping statistics on a BAM:
```sh
samtools flagstats results/sam/s001---1.srt.bam
```

### Practice with multiple jobs in one step
```sh
# remove the .bam .srt.bam files:
rm results/sam/s001---1.bam results/sam/s001---1.srt.bam

# now, directly make a sorted BAM file at results/sam/s001---1.srt.bam
# by piping samtools view output into samtools sort.  Note the use
# of -u for uncompressed BAM output, and the - at the end of the
# line, instead of a file name, to mean take
# input from stdin instead of a file
samtools view -u results/sam/s001---1.sam | \
  samtools sort -l 9 -o results/sam/s001---1.srt.bam -
```



[^github_bwa]:https://github.com/lh3/bwa
[^github_samtools]:https://github.com/samtools/samtools
[^handbook]:https://eriqande.github.io/eca-bioinf-handbook/alignment-of-sequence-data-to-a-reference-genome-and-associated-steps.html#aligning-reads-with-bwa