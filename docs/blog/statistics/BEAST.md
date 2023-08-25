---
title: BEAST-Bayesian Evolutionary Analysis Sampling Trees
icon: post
# This control sidebar order
order: 2
category:
  - Statistics
tag:
  - Tool
---

BEAST [^website] s a software package for phylogenetic analysis with an emphasis on time-scaled trees.

## Pre-requisites
Java 8 [^install]

## Install BEAST
```sh
wget https://github.com/beast-dev/beast-mcmc/releases/download/v1.10.4/BEASTv1.10.4.tgz
tar -zxvf BEASTv1.10.4.tgz

cd BEASTv1.10.4/bin
./beauti
./beast
```
## Adding the executables to the system path
```sh
nano ~/.bashrc
export PATH=$PATH:$HOME/BEASTv1.10.4/bin/
source ~/.bashrc  # or ~/.bash_profile, ~/.zshrc, etc.
echo $PATH
```

## Running BEAST from a jar file (with GUI)
```sh
cd PATH_TO/BEASTv1.10.4/lib
java -jar beauti.jar
java -jar beast.jar
```

## Running BEAUti and BEAST from a jar file (without GUI)
```sh
cd PATH_TO/BEASTv1.10.4/lib
java -jar beast.jar -seed 1234 example.xml
```

<pre>
Failed to load BEAGLE library: no hmsbeagle-jni in java.library.path:
BEAGLE not installed/found
</pre>

<style>
pre {
  background-color:#38393d;
  /* color: #FF33F3; */
  color: #33F3FF;
}
</style>

[^website]:https://beast.community/
[^install]:https://beast.community/installing