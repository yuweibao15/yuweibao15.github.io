---
title: GATK Somatic Short Variant Discovery (SNVs and Indels)
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - GATK
---
Here are some notes about calling somatic mutations using GATK `mutect2`.

## Reference - GATK tutorials:

[GATK Somatic short variant discovery (SNVs + Indels)](https://gatk.broadinstitute.org/hc/en-us/articles/360035894731-Somatic-short-variant-discovery-SNVs-Indels-)

[Version I](https://gatk.broadinstitute.org/hc/en-us/articles/360035889791?id=11136)

[Version II](https://gatk.broadinstitute.org/hc/en-us/articles/360035531132)

[Related](https://gatk.broadinstitute.org/hc/en-us/articles/360035890491?id=11127)

## 1. Call somatic short variants and generate a bamout with Mutect2
```sh
gatk --java-options "-Xmx2g" Mutect2 \
    -R hg38/Homo_sapiens_assembly38.fasta \
    -I tumor.bam \
    -I normal.bam \
    -tumor HCC1143_tumor \
    -normal HCC1143_normal \
    -pon resources/chr17_pon.vcf.gz \
    --germline-resource resources/chr17_af-only-gnomad_grch38.vcf.gz \
    --af-of-alleles-not-in-resource 0.0000025 \
    --disable-read-filter MateOnSameContigOrNoMappedMateReadFilter \
    -L chr17plus.interval_list \
    -O 1_somatic_m2.vcf.gz \
    -bamout 2_tumor_normal_m2.bam
```
::: tip --disable-read-filter MateOnSameContigOrNoMappedMateReadFilter
We disable a specific read filter `--disable-read-filter
MateOnSameContigOrNoMappedMateReadFilter` since this filter removes from analysis paired reads whose mate maps to a different contig. Otherwise, we may miss out on detecting SNVs and indels associated with alternate haplotypes. 

This filter removes around 8-9% sample reads from the full data [^GATK_SNV]
:::
## 2. Create a sites-only PoN with CreateSomaticPanelOfNormals
1. First, run Mutect2 in tumor-only mode on each normal sample.
```sh
gatk Mutect2 \
    -R ~/Documents/ref/hg38/Homo_sapiens_assembly38.fasta \
    -I HG00190.bam \
    -tumor HG00190 \
    --disable-read-filter MateOnSameContigOrNoMappedMateReadFilter \
    -L chr17plus.interval_list \
    -O 3_HG00190.vcf.gz
```

2. Second, collate all the normal VCFs into a single callset with `CreateSomaticPanelOfNormals`.
```sh
gatk CreateSomaticPanelOfNormals \
    -vcfs 3_HG00190.vcf.gz \
    -vcfs 4_NA19771.vcf.gz \
    -vcfs 5_HG02759.vcf.gz \
    -O 6_threesamplepon.vcf.gz
```

## 3. Estimate cross-sample contamination using GetPileupSummaries and CalculateContamination.

1. First, run `GetPileupSummaries` on the tumor BAM to summarize read support for a set number of known variant sites. 
```sh
gatk GetPileupSummaries \
    -I tumor.bam \
    -V resources/chr17_small_exac_common_3_grch38.vcf.gz \
    -O 7_tumor_getpileupsummaries.table
```

2. Second, estimate contamination with `CalculateContamination`
```sh
gatk CalculateContamination \
    -I 7_tumor_getpileupsummaries.table \
    -O 8_tumor_calculatecontamination.table
```

Note: CalculateContamination can operate in two modes. The alternate mode incorporates the metrics for the matched normal, to enable a potentially more accurate estimate.

### What if I find high levels of contamination?
Picard’s [CrosscheckFingerprints](https://gatk.broadinstitute.org/hc/en-us/articles/360036364232-CrosscheckFingerprints-Picard-)

This tool allows us to 
1. Check at the sample level that our tumor and normal are related, as it is imperative they should come from the same individual
2. Check at the read group level that each of the read group data come from the same individual.

## 4. Filter for confident somatic calls using `FilterMutectCalls`
Filter the Mutect2 callset with FilterMutectCalls.
```sh
gatk FilterMutectCalls \
    -V somatic_m2.vcf.gz \
    --contamination-table tumor_calculatecontamination.table \
    -O 9_somatic_oncefiltered.vcf.gz
```

## 5. (Optional) Estimate artifacts with CollectSequencingArtifactMetrics and filter them with FilterByOrientationBias
1. First, collect metrics on sequence context artifacts with `CollectSequencingArtifactMetrics`.

```sh
gatk CollectSequencingArtifactMetrics \
    -I tumor.bam \
    -O 10_tumor_artifact \
    –-FILE_EXTENSION ".txt" \
    -R ~/Documents/ref/hg38/Homo_sapiens_assembly38.fasta
```
Results provide a global view across the genome that empowers decision making in ways that site-specific analyses cannot. The metrics can help decide whether to consider downstream filtering.

2. Second, perform orientation bias filtering with `FilterByOrientationBias`
```sh
gatk FilterByOrientationBias \
    -A G/T \
    -A C/T \
    -V 9_somatic_oncefiltered.vcf.gz \
    -P tumor_artifact.pre_adapter_detail_metrics.txt \
    -O 11_somatic_twicefiltered.vcf.gz
```

## 6. Set up in IGV to review somatic calls
1. First, load Human (hg38) as the reference in IGV. Then load these six files in order:
<pre>
resources/chr17_pon.vcf.gz
resources/chr17af-only-gnomadgrch38.vcf.gz
11somatictwicefiltered.vcf.gz
2tumornormal_m2.bam
normal.bam
tumor.bam
</pre>

2. Second, navigate IGV to certain locus.
3. Third, tweak IGV settings that aid in visualizing reassembled alignments.

<style>
pre {
  background-color:#38393d;
  /* color: #FF33F3; */
  /* color: #33F3FF; */
  color: #BF40BF
}
</style>

[^GATK_SNV]:https://gatk.broadinstitute.org/hc/en-us/articles/360035889791?id=11136