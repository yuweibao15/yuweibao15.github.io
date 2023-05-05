---
title: Compare vcf files using RTG Tools
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

## RTG Tools [^rtg]
It provides utilities for accurate VCF comparison and manipulation

### Installation
:::tip Prerequisites for building from source
Java 1.8 or later
apache ant 1.9 or later
:::
```sh
git clone https://github.com/RealTimeGenomics/rtg-tools.git
cd rtg-tools
ant runalltests
ant zip-nojre

unzip PATH_TO/rtg-tools/dist/rtg-tools-3.12.1-32d4c2d2-nojre.zip

cd PATH_TO/rtg-tools/dist/rtg-tools-3.12.1-32d4c2d2
./scripts/demo-tools.sh $PWD/rtg
```

### Example
Assume there are two vcf files storing SNVs called by different software `Strelka2` and `Mutect2`, then:

```sh
bcftools isec Strelka2_vcf.gz MuTect2_vcf.gz -p isec_Streka2_MuTet2 --collapse all
# Build SDF for reference genome
rtg format -o referece.SDF reference.fa

rtg vcfeval --baseline 0000.vcf.gz --calls 0001.vcf.gz --template referece.SDF --output rtg_results --sample TUMOR,NORMAL --vcf-score-field INFO.TLOD --squash-ploidy
```

[^rtg]:https://github.com/RealTimeGenomics/rtg-tools