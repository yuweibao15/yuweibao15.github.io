---
title: Use svTools/svTyper to generate PON for identifying SV 
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
  - SV
---

`svtools` [^paper] are the comprehensive utilities to explore structural variations in genomes [^svtools]
:::danger Pythin version
`svtools` requires Python 2.7.
:::
## Installation [^install]
My personal preference is always using docker images [^docker]. But for experiment purpose, I want to use `svtools (v0.3.0)` using `pip install`

### Failure
#### Attempt 1 failed using pip
```sh
conda activate py27_svtools
pip install svtools==0.3.0
svtools --version
```
There is error `ImportError: No module named abc`
:::tip Clean workspace
Uninstall the product from previous attempt if needed
```sh
pip uninstall svtools
```
:::

#### Attemp 2 failed using direct installation from the git repo
```sh
git clone https://github.com/hall-lab/svtools.git svtools_test
cd svtools_test
git tag -l
git checkout tags/v0.3.0
pip install .
svtools --version
```

Even it shows `Successfully installed svtools-0.3.0` but the version check still fails with the same error as previous attempt.

#### Attemp 3 failed using github release tarball
```sh
wget https://github.com/hall-lab/svtools/archive/refs/tags/v0.3.0.tar.gz
tar -xvzf v0.3.0.tar.gz
cd svtools-0.3.0/
pip install .
svtools --version
```
Even it shows `Successfully installed svtools-0.3.0` but the version check still fails with the same error as previous attempt.

### Succuss
#### Attempt 4: Just use docker image
I have not found a way to work around it to get `svtools (v0.3.0)` to run properly, so I will ignore the version and just use docker images of the latest version of `svtools (v0.5.1)`. [^docker]

```sh
docker pull halllab/svtools:v0.5.1
docker run -v halllab/svtools:v0.5.1 svtools --help
```

It works. `docker` won another score in my heart. Let's move on.

## Usage
```sh
svtools [-h] [--version] [--support] subcommand ...
```

## SVTyper
`SVTyper` can compute genotype of structural variants based on breakpoint depth.

:::danger Pythin version
`SVTyper` requires Python 2.7.
:::

### Installation
```sh
pip install git+https://github.com/hall-lab/svtyper.git
```
### Usage
1. Using `normal.bam` to call `normal.SV.vcf`
```sh
svtyper -i $input.vcf -T $REF -B $normal -o $out/$NO.vcf
```
2. Merge all `normal.SV.vcf`
```sh
bcftools merge <path/to/normal_sample1.vcf> <path/to/normal_sample2.vcf> ... <path/to/normal_sampleN.vcf> \
-o <path/to/pon.vcf> \
-m all \
--threads <number of threads>
```

Now I realized that I am missing input.vcf, which is the product of a structural variant caller. It is werid that to use `Delly`, we want to have `PON` in hand. While to produce `PON` using `svTyper`, we need the results produced by SV callers such as `Delly ` or `Lumpy`.

[^svtools]:https://github.com/hall-lab/svtools
[^install]:https://github.com/hall-lab/svtools/blob/master/INSTALL.md
[^doscker]:https://hub.docker.com/r/halllab/svtools/tags
[^pip]:https://stackoverflow.com/questions/4888027/python-and-pip-list-all-versions-of-a-package-thats-available
[^paper]:https://academic.oup.com/bioinformatics/article/35/22/4782/5520944