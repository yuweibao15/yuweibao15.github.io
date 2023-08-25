---
title: RavBayes
icon: post
# This control sidebar order
order: 2
category:
  - Statistics
tag:
  - Tool
---

RevBayes[^website] is Bayesian phylogenetic inference using probabilistic graphical models and an interpreted language `Rev`

## Download 
### Use `homebrew` on Mac OS X to download pre-requisites
More options can be found here [^download]

:::tip Test pre-requisites
```sh
which cmake
which boost
```
:::

:::tip Download pre-requisites if missing
```sh
brew install cmake boost
```
:::

### Compile
```sh
git clone --branch development https://github.com/revbayes/revbayes.git revbayes
cd revbayes/projects/cmake
./build.sh
./build.sh -boost_root /path/to/installed-boost-1.74.0
```

[^download]: https://revbayes.github.io/compile-osx
[^website]: https://revbayes.github.io/