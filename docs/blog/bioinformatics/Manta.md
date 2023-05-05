---
title: Run Manta to get structural variants
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - SV
---

## Manta [^manta]
Manta calls structural variants (SVs) and indels from mapped paired-end sequencing reads.


### Installation
Follow the instruction for different operating system [^install]

### Usage
Somatic configuration examples
Tumor Normal Analysis -- Example Configuration:
```sh
${MANTA_INSTALL_PATH}/bin/configManta.py \
--normalBam HCC1187BL.cram \
--tumorBam HCC1187C.cram \
--referenceFasta hg19.fa \
--runDir ${MANTA_ANALYSIS_PATH}

${MANTA_ANALYSIS_PATH}/runWorkflow.py
```

### Output
```
├── Sample_name
│   ├── results
│   │   ├── evidence
│   │   ├── stats
│   │   ├── variants
│   │   │   ├──candidateSmallIndels.vcf.gz
│   │   │   ├──candidateSV.vcf.gz
│   │   │   ├──diploidSV.vcf.gz
│   │   │   ├──somaticSV.vcf.gz
│   ├── runWorkflow.py.config.pickle
│   ├── workflow.error.log.txt
│   ├── workflow.exitcode.txt
│   ├── workflow.warning.log.txt
```

[^manta]:https://github.com/Illumina/manta
[^install]:https://github.com/Illumina/manta/blob/master/docs/userGuide/installation.md#linux