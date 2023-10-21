---
title: Blog
index: false
icon: creative
category:
  - Study notes
---

## Bioinformatics

### Notes
- [Dr. Eric C. Anderson's Bioinformatics Handbook](bioinformatics/study_notes_EricA_handbook.md)

### Variant calling related
**I. Single nucleotide variants and short insertions/deletions (SNVs and INDELs)**
#### GATK
- [GATK Data Pre-processing](bioinformatics/GATK_preprocessing.md)
- [GATK Somatic Short Variant Discovery](bioinformatics/GATK_SNV.md)
- [GATK Somatic copy number variant discovery (CNVs)](bioinformatics/GATK_CNV.md)
- [Run GATK older version by docker images](bioinformatics/docker.md)
#### From fastqs to bam
- [Quality control for fastqs](bioinformatics/fastqc_fastp.md)
- [Align fastqs to reference genome](bioinformatics/bwa.md)
#### Filter bam
- [Filter bam using samtools](bioinformatics/filter_bam_samtools.md)
- [Filter bam using gatk](bioinformatics/filter_bam_gatk.md)
#### Other
- [Different variant callers](bioinformatics/variant_callers.md)
- [GEM: Reference genome mappability](bioinformatics/GEM_mappability.md)
- [freebayes: Bayesian genetic variant detector](bioinformatics/freebayes.md)
- [SomaticSniper: SNVs and short Indel caller](bioinformatics/SomaticSniper.md)
- [Strelka: SNVs and short Indel caller](bioinformatics/Strelka.md)
- [RTG Tools: compare vcf](bioinformatics/rtgTools.md)
- [Control_FreeC: calculate tumor purity](bioinformatics/Control_FreeC.md)
- [readtagger: tag reads using bams](bioinformatics/readtagger.md)
- [SomaticSeq: combine multiple SNV calls](bioinformatics/SomaticSeq.md)

**II. Structural variants (SV)**
#### Tools
- [LUMPY: SV caller](bioinformatics/Lumpy.md)
- [DELLY: SV caller](bioinformatics/Delly.md)
- [svtools: comprehensive utilities for SV](bioinformatics/svtools.md)
- [novoBreak: a structural variant breakpoint detection tool](bioinformatics/novoBreak.md)
- [svParser: a tool to deal with SV output vcf](bioinformatics/svParser.md)
- [Manta: SV caller](bioinformatics/Manta.md)
- [GRIDSS2: SV caller](bioinformatics/GRIDSS2.md)
- [SURVIVOR: merge SVs](bioinformatics/survivor.md)
- [gGnome: post-visualization tool for SV](bioinformatics/gGnome.md)

### Transposable elements (TEs)
- [dnaPipeTE](bioinformatics/dnaPipeTE.md)

### Toolbox
- [SRA: Download data from NCBI](bioinformatics/SRA.md)
- [Cypress: Tulane HPC](bioinformatics/Cypress.md)
- [sshfs: Mount a remote server](bioinformatics/sshfs.md)

### Programming
#### Linux
- [Linux basics](bioinformatics/linux.md)
- [Basic shell scripting](bioinformatics/shell_scripting.md)
- [Activate conda in a bash script](bioinformatics/bash_use_conda.md)
#### Python
- [Python scipy.integrate for numerical integration](coding/Python/integration.md)
#### Java
- [IntellJ: Java IDEA](coding/Java/IntelliJ.md)
### Format
- [Enhanced styles](bioinformatics/styles.md)
### Tools
- [Git clone from a private repository](bioinformatics/git_clone.md)


## Statistics
### Theory
- [Detailed Balance Condition](statistics/detailed_balance_condition.md)
- [Stochastic Processes](statistics/stochastic_processes.md)
- [Stochastic HW2 Graph](statistics/stochastic_HW2.md)
- [Gibss sampler](statistics/gibbs_sampler.md)
- [Kingman’s coalescent](statistics/felsenstein_coalescent.md)
### Tools
- [BEAST: Bayesian Evolutionary Analysis Sampling Trees](statistics/BEAST.md)
- [RavBayes: Bayesian phylogenetic inference model](statistics/RavBayes.md)
### Research related papers
- [Statistical phylogenetics study resources](statistics/paper/resources.md)
- [2020Ji - Gradients Do Grow on Trees: A Linear-Time O(N)-Dimensional Gradient for Statistical Phylogenetics](statistics/paper/2020Ji_Gradients.md)
- [2023Fourment - Automatic differentiation is no panacea for phylogenetic gradient computation](statistics/paper/AD_gradient.md)
### Data type
- [Time Series Data](statistics/time_series.md)

## Tulane footprint
- [Tulane Courses](Tulane/classes.md)