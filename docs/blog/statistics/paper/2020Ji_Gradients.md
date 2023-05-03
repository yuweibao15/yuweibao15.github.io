---
title: A Linear-Time O(N)-Dimensional Gradient for Statistical Phylogenetics
icon: post
# This control sidebar order
order: 1
category:
  - Statistics
tag:
  - Reading notes
---
Paper title: Gradients do grow on trees: a linear-time O(N)-dimensional gradient for statistical phylogenetics [^Paper]

## Reproduce the analyses
Follow the instruction on [^Github]:

### Setting up BEAGLE
Using Linux system, do the following [^beagle] but get the `hmc-clock` branch.
```sh
sudo apt-get install cmake build-essential autoconf automake libtool git pkg-config openjdk-11-jdk
git clone -b hmc-clock https://github.com/beagle-dev/beagle-lib.git
cd beagle-lib
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX:PATH=$HOME ..
make install
cmake ..
export LD_LIBRARY_PATH=$HOME/lib:$LD_LIBRARY_PATH
make test
```

### Setting up BEAST
```sh
git clone -b hmc-clock https://github.com/beast-dev/beast-mcmc.git
cd beast-mcmc
ant
```

### Reproducing the analyses
Prepare files and folders:

```sh
git clone https://github.com/suchard-group/hmc_clock_manuscript_supplement.git
```

```sh
mkdir test_results
cd test_results
beast_path=/media/XLStorage/ybao2/gradient_paper/
xml_path=/media/XLStorage/ybao2/gradient_paper/hmc_clock_manuscript_supplement
```

#### West Nile Virus
- Optimization
  - Analytic gradient
    ```sh
     java -jar -Djava.library.path=/usr/local/lib where_beast_is_git_cloned/beast-mcmc/build/dist/beast.jar -beagle_SSE_off -load_state where_this_repository_is_stored/xmls/WNV/WNV_skyline_optimization_save -seed 666 -overwrite where_this_repository_is_stored/xmls/WNV/WNV_HMC_skyline_MLE_Analytic.xml
    ```

[^Paper]: Ji X, Zhang Z, Holbrook A, Nishimura A, Baele G, Rambaut A, Lemey P, Suchard MA. 2019. Gradients do grow on trees: a linear-time O(N)-dimensional gradient for statistical phylogenetics. Available from: https://arxiv.org/pdf/1905.12146.pdf.
[^Github]:https://github.com/suchard-group/hmc_clock_manuscript_supplement
[^beagle]:https://github.com/beagle-dev/beagle-lib/wiki/LinuxInstallInstructions



