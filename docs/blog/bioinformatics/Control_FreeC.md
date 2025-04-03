---
title: Run Control_FreeC to calculate tumor purity
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

## Installation [^tutorial]
```sh
wget https://github.com/BoevaLab/FREEC/archive/refs/tags/v11.6.tar.gz
tar -zxvf v11.6.tar.gz

cd PATH_TO/FREEC-11.6/src/
make

PATH_TO/FREEC-11.6/src/freec --help
```

## Usage
### Running Control-FREEC on a test data
Download a test dataset for HCC1143 and HCC1143-BL (from Chiang et al., 2009):
```sh
mkdir test_FREEC
cd test_FREEC
wget http://xfer.curie.fr/get/l4nQtrIsGmo/test.zip
PATH_TO/FREEC-11.6/src/freec -conf myßConfig.txt -sample sample.bam -control control.bam
# Or
# PATH_TO/FREEC-11.6/src/f (if BAM files are provided directly in the config file)

	/PATH_TO_FREEC/freec -conf config_ctrl.txt

to run it without a control sample (50kb window):
	/PATH_TO_FREEC/freec -conf config_GC.txt

to run it only for the normal sample (50kb window):
	/PATH_TO_FREEC/freec -conf config_BL.txt
```

## Prepare input files
### Generate a chromosome length file from a fasta file
```sh
samtools faidx your_file.fasta
cut -f1,2 your_file.fasta.fai | grep -w -E '(2R|2L|3R|3L|X|Y|4)' > filtered_chromosomes.txt

```

## Work with something that is not human

Produce chrom length file:

```sh
wget https://github.com/BoevaLab/FREEC/tree/master/scripts/get_fasta_lengths.pl
perl get_fasta_lengths.pl MyGenome.fa
```


MY OWN
```sh
perl /home/ybao2/GitFolders/FREEC-11.6/scripts/get_fasta_lengths.pl /media/XLStorage/ybao2/RefGenome/dmel-all-chromosome-r6.39.fasta

# result: /home/ybao2/GitFolders/FREEC-11.6/scripts/res-dmel-all-chromosome-r6.39.fasta
```

[^tutorial]:http://boevalab.inf.ethz.ch/FREEC/tutorial.html