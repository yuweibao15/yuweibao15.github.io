---
title: dnaPipeTE (de-novo assembly & annotation Pipeline for Transposable Elements)
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

`dnaPipeTE` can find, annotate and quantify Transposable Elements in small samples of NGS datasets.  [^Github]

## Installation
Use docker:
```sh
sudo docker pull clemgoub/dnapipete:latest
```

## Usage
```sh
# Start the dnaPipeTE container with an interactive section
sudo docker run -it -v ~/Project:/mnt clemgoub/dnapipete:latest
# Run the dnaPipeTE
python3 dnaPipeTE.py -input /mnt/reads_input.fastq -output /mnt/output -RM_lib ../RepeatMasker/Libraries/RepeatMasker.lib -genome_size 170000000 -genome_coverage 0.1 -sample_number 2 -RM_t 0.2 -cpu 2
```

According to the original paper [^paper] for the tool, we need to pre-processing the reads.

For our own data, we have paired-end short reads from Illumina NGS technology. According to [^paper], we can use only the first read of each pair for analysis.

:::tip Fun fact
We actually ran the analysis separately using both first read R1 and second reads R2, and the results are different for the same sample. 

I thought about merging paired-end reads, but the tool [^Github] mentioned explicitly that

"The input file must be a single-end FASTQ or FASTQ.GZ file of NGS reads. It can be either the R1 or R2 end of a paired-end library. "
:::

But we do need to pre-process the reads to remove mitochondrial DNA to keep TE identification accurate.

## Read Pre-processing
Paper [^paper] suggested:
1. Quality file: use `FASTX-toolkit`: (http://hannonlab.cshl.edu/fastx_toolkit/) with a minimum 20 average Phred score on 90% of the reads.
2. Remove reads from mitochondrial DNA with `Bowtie2` by mapping reads to the whole mitochondrail genome sequence for own species on NCBI website. 

Our approach:
1. Use `fastp` [^fastp] to pre-process QC/adapters/trimming/filtering/splitting/merging
2. Map reads to mitochondrial DNA
3. Extract the reads that are not mapped to mitochondrial DNA

## Script
If your FASTA file is indexed (you have a .fai file), use samtools to directly extract the mitochondrial genome.

```sh
samtools faidx genome.fasta mitochondrion_genome > mitochondrial_genome.fasta

```

[^Github]:https://github.com/clemgoub/dnaPipeTE
[^paper]:https://academic.oup.com/gbe/article/7/4/1192/533768?login=true
[^fastp]:https://github.com/OpenGene/fastp