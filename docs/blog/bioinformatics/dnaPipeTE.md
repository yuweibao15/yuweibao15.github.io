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

## Run
```sh
# Start the dnaPipeTE container with an interactive section
sudo docker run -it -v ~/Project:/mnt clemgoub/dnapipete:latest
# Run the dnaPipeTE
python3 dnaPipeTE.py -input /mnt/reads_input.fastq -output /mnt/output -RM_lib ../RepeatMasker/Libraries/RepeatMasker.lib -genome_size 170000000 -genome_coverage 0.1 -sample_number 2 -RM_t 0.2 -cpu 2
```

[^Github]:https://github.com/clemgoub/dnaPipeTE