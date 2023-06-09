---
title: Automatic differentiation vs. phylogenetic gradient computation
icon: post
order: 1
category:
  - Statistics
tag:
  - Reading notes
---

The paper *Automatic differentiation is no panacea for phylogenetic gradient computation* [^paper] compares the performance of automatic differentiation (AD) using machine-learning libraries against other six gradient implementations of the phylogenetic likelihood functions. The tools and analysis can be found at the Github page [^github].

## What is automatic differentiation?

It leverages the chain rule of calculus to compute derivatives of complex functions by decomposing them into elementary operations, which achieves high precision. It is used in machine learning to compute gradients for training neural networks efficiently.

**Analytic derivatives**: The exact symbolic solution of derivatives.

**Numeric derivatives**: It approximates the derivatives by calculating the function at multiple points and taking finite differences.

## Running the pipeline with docker 

### Setup nextflow [^nextflow]

```sh
java -version # Make sure 11 or later is installed
curl -s https://get.nextflow.io | bash
./nextflow run hello

# Add path to bashrc
export PATH=$PATH:PATH_TO_nextflow
```

### Installation

```sh
git clone https://github.com/4ment/gradient-benchmark.git
```

## Usage

```sh
nextflow run 4ment/autodiff-experiments -profile docker -with-trace
```

Note: the pipeline will take weeks to run to completion

[^paper]:https://arxiv.org/abs/2211.02168
[^github]:https://github.com/4ment/gradient-benchmark
[^nextflow]:https://www.nextflow.io/