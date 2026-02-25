---
title: DNA Methylation data analysis
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Data analysis
---

## Motivation
DNA methylation is a chemical tag on DNA that helps control whether genes are on or off. In cancer, methylation patterns often change early and in consistent ways, which can silence tumor-suppressor genes or activate cancer-related programs. Because these signals can be measured in tumor tissue and even in blood (cell-free DNA), methylation is a powerful source of biomarkers for early detection, tumor classification, prognosis, and treatment monitoring.[^ref1]

## Data Analysis
Following the tutorial [^tutorial1], we operate analysis on [Galaxy](https://usegalaxy.org/):
1. Quality Control with `Falco`
   - Result: Look into 'Per base sequence content', we observe elevated T and reduced C, which is expected for bisulfite-treated libraries because unmethylated cytosines are converted and sequenced as thymine.
2. Aligment with `bwameth` (`bwa` caller with bisulfite-aware)
3. `MethylDackel`: A tool for processing bisulfite sequencing alignments
   - Potential: 
     - Determine the position-dependent methylation bias in the dataset, producing diagnostic SVG images (mbias)
       - Result: Looking at the CPG methylation % plot, we identify where each curve becomes stable, and trim the unstable prefix/subfix.
     - Extract methylation metrics from an alignment file in BAM/CRAM for mat (extract)
       - Input: 1-Region of interest:`CpGIslands.bed`, 2-Score file: converted `fraction CpG` by `Wig/BedGraph-to-bigWig`  
       - Tool: `computeMatrix`, `plotProfile`
       - Result: Mean methylation profile around CpG islands (±1 kb)
4. `Metilene`: calling differentially methylated regions from bisulfite sequencing data
   - Result: compare methylation between two groups and report contiguous genomic segments where the groups differ consistently (DMRs) over the regions of interest.


[^ref1]: Lakshminarasimhan, R., & Liang, G. (2016). The Role of DNA Methylation in Cancer. Advances in experimental medicine and biology, 945, 151–172. https://doi.org/10.1007/978-3-319-43624-1_7
[^tutorial1]:https://training.galaxyproject.org/training-material/topics/epigenetics/tutorials/methylation-seq/tutorial.html