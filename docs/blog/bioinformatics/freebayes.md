---
title: Freebayes
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

Here, we are learning how to use `freebayes` [^freebayes] to call SNVs and further to filter variants using `vcflib` [^vcflib] and `vt` [^vt] following Nick Riddiford 21 supplementary methods [^GR].

## 1. freebayes (v1.3.6) [^freebayes]
### Purpose
`freebayes` is a Bayesian genetic variant detector designed to find small polymorphisms, specifically SNPs, indels, MNPs, and complex events smaller than the length of a short-read sequencing alignment.
### Installation
```sh
wget https://github.com/freebayes/freebayes/archive/refs/tags/v1.3.6.zip

unzip v1.3.6.zip
```
### Usage
```sh
freebayes -f [REFERENCE] [OPTIONS] [BAM FILES] >[OUTPUT]
freebayes -f ref.fa aln.bam >var.vcf

freebayes -f ref.fa --pooled-discrete --genotype-qualities tumor.bam normal.bam | vcfsamplediff -s VT normal tumor -
```
Genomic Research paper [^GR] usage:
```sh
freebayes -f ref.fa  -0 --pooled-discrete --genotype-qualities --min-coverage 20 tumor.bam normal.bam  > output.vcf
```

## 2. vcflib [^vcflib]
### Purpose
`vcflib` processes the VCF variant calling format
### Installation
```sh
conda install -c bioconda vcflib
```
### Usage
```sh
vcfallelicprimitives [options] [file]
vcfsamplediff options [ ... ]

vcfsamplediff SAME TAP1 PATIENT1 compare_tap1.vcf | vcffilter -f "QUAL / AO > 10" | vcffilter -f "NS = 2" | vcffilter -f "! ( SAME = germline ) " | grep -v "^#" | wc -l

vcfsamplediff --diff-site tumor.vcf normal.vcf > somatic_variants.txt

```


## 3. vt (v0.57721) [^vt]
### Purpose: 
`vt` decomposes biallelic block substitutions into their constituent SNVs
### Installation:
```sh
git clone https://github.com/atks/vt.git
cd vt
git submodule update --init --recursive
make
# Test the build
make test
```
### Usage:
Documentation [^vt_usage]
```sh
# Decomposes biallelic block substitutions and write out to decomposed_blocksub.vcf
vt decompose_blocksub gatk.vcf -o decomposed_blocksub.vcf 
```

## Summary script

```sh
# Input files
REF=reference.fasta
TU=TUMOR
NO=NORMAL
tumor=TUMOR.bam
normal=NORMAL.bam
unmappable_genome=unmappable.bed

# 1. Run `freebayes` for each tumor normal pair
freebayes -f $REF  -0 --pooled-discrete --genotype-qualities --min-coverage 20 $tumor $normal > $out/$TU.freebayes.unfiltered.vcf
# 2. Exclude calls within the unmappable genome
bedtools intersect -v -a $out/$TU.freebayes.unfiltered.vcf -b $unmappable_genome -wa > $out/$TU.freebayes.unfiltered.un.vcf
# 3. Filter using `vcflib` function `vcfallelicprimitives`
vcfallelicprimitives -m $out/$TU.freebayes.unfiltered.un.vcf > $out/$TU.vcflib.vcf
# 4. Filter using `vt` function `decompose_blocksub`
bgzip -c $out/$TU.vcflib.vcf > $out/$TU.vcflib.vcf.gz
tabix -fp vcf $out/$TU.vcflib.vcf.gz
vt decompose_blocksub $out/$TU.vcflib.vcf.gz -o $out/$TU.vt.decompose.vcf
# 5. Normalize calls using `vt` function `normalize`
vt normalize $out/$TU.vt.decompose.vcf -r $REF -o $out/$TU.vt.normalize.vcf
## 6. NEED TO DO: Use vcfsamplediff to select somatic calls
vcfsamplediff SAME $TU $NO $out/$TU.vt.normalize.vcf | vcffilter -f "DP > 20" | vcffilter -f "SAF > 0 & SAR > 0" | vcffilter -f "RPR > 0 & RPL > 0" | vcffilter -f "! ( SAME = germline ) " > $out/$TU.vcflib.filtered.vcf
############## Work in progress #############
# ########### Filter ###########
# # 7. Select calls with a depth greater than 20
# vcffilter -f "DP > 20" $out/$TU.vt.normalize.vcf > $out/$TU.vcflib.depth.vcf
# # Get high-quality calls
# vcffilter -f \"QUAL > 1 & QUAL / AO > 10\" $out/$TU.vcflib.depth.vcf > $out/$TU.vcflib.depth.highquality.vcf
# # Get calls supported by reads on both DNA strands
# vcffilter -f \"SAF > 0 & SAR > 0\" $out/$TU.vcflib.depth.vcf > $out/$TU.vcflib.depth.bothreads.vcf
# # Get calls with both right- and left-facing readsupport
# vcffilter -f \"RPR > 0 & RPL > 0\" $out/$TU.vcflib.depth.vcf > $out/$TU.vcflib.depth.leftright.vcf
# ## Clear intermediate files if needed
```

### Other people's realated blogs
Arun Seetharam: [FreeBayes variant calling workflow for DNA-Seq](https://bioinformaticsworkbook.org/dataAnalysis/VariantCalling/freebayes-dnaseq-workflow.html#gsc.tab=0)

[^vt]:https://github.com/atks/vt
[^vt_usage]:https://genome.sph.umich.edu/wiki/Vt
[^GR]:https://genome.cshlp.org/content/early/2021/06/24/gr.268441.120
[^freebayes]:https://github.com/freebayes/freebayes
[^vcflib]:https://github.com/vcflib/vcflib