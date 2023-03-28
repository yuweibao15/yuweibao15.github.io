---
title: Strelka
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

## Strelka (v2.9.10) [^Strelka]

### Purpose
Strelka2 is a fast and accurate small variant caller optimized for analysis of germline variation in small cohorts and somatic variation in tumor/normal sample pairs.
### Installation
```sh
# download strelka binary
wget https://github.com/Illumina/strelka/releases/download/v2.9.2/strelka-2.9.2.centos6_x86_64.tar.bz2
# decompress
tar xvjf strelka-2.9.2.centos6_x86_64.tar.bz2
# run demo to check successful installation
bash strelka-2.9.2.centos6_x86_64/bin/runStrelkaSomaticWorkflowDemo.bash
bash strelka-2.9.2.centos6_x86_64/bin/runStrelkaGermlineWorkflowDemo.bash
```
### Usage
**Example for germline calling:**
```sh
# configuration
${STRELKA_INSTALL_PATH}/bin/configureStrelkaGermlineWorkflow.py \
    --bam sample1.bam \
    --bam sample2.bam \
    --referenceFasta hg38.fa \
    --runDir demo_germline
# execution on a single local machine with 20 parallel jobs
demo_germline/runWorkflow.py -m local -j 20
```

**Example for somatic calling:**
```sh
# configuration
${STRELKA_INSTALL_PATH}/bin/configureStrelkaSomaticWorkflow.py \
    --normalBam normal.bam \
    --tumorBam tumor.bam \
    --referenceFasta hg38.fa \
    --runDir demo_somatic
# execution on a single local machine with 20 parallel jobs
demo_somatic/runWorkflow.py -m local -j 20
```

[^Strelka]:(https://github.com/Illumina/strelka)