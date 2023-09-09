---
title: How to use conda activate commands inside a bash
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Debug
---

## Issue:
When I try to run a bash script `TEST_activate_conda.sh` like following:
```sh
#!/bin/bash

conda activate py38_GR

samclip --version
```
where my base conda doesn't have the software `samclip`, but the `py38_GR` conda environment has the software.

I see the error:
<pre>
CommandNotFoundError: Your shell has not been properly configured to use 'conda activate'.
To initialize your shell, run

    $ conda init <SHELL_NAME>

Currently supported shells are:
  - bash
  - fish
  - tcsh
  - xonsh
  - zsh
  - powershell

See 'conda init --help' for more information and options.

IMPORTANT: You may need to close and restart your shell after running 'conda init'.
</pre>

## Solution [^ref]
Firstly, find the path to anaconda
```sh
conda env list
```
Then modify the script like following
```sh
#!/bin/bash

source PATH_TO/anaconda3/etc/profile.d/conda.sh

conda activate py38_GR

samclip --version
```
Then we see
<pre>
samclip 0.4.0
</pre>

## Attempt that doesn't work
```sh
conda init bash
```
<pre>
modified      PATH_TO_anaconda3/condabin/conda
modified      PATH_TO_anaconda3/bin/conda
modified      PATH_TO_anaconda3/bin/conda-env
no change     PATH_TO_anaconda3/bin/activate
no change     PATH_TO_anaconda3/bin/deactivate
no change     PATH_TO_anaconda3/etc/profile.d/conda.sh
no change     PATH_TO_anaconda3/etc/fish/conf.d/conda.fish
no change     PATH_TO_anaconda3/shell/condabin/Conda.psm1
no change     PATH_TO_anaconda3/shell/condabin/conda-hook.ps1
no change     PATH_TO_anaconda3/lib/python3.9/site-packages/xontrib/conda.xsh
no change     PATH_TO_anaconda3/etc/profile.d/conda.csh
no change     PATH_TO/.bashrc
</pre>
Kill this terminal, start a new terminal but it doesn't work.

<style>
pre {
  background-color:#38393d;
  /* color: #FF33F3; */
  color: #33F3FF;
}
</style>

[^ref]:https://stackoverflow.com/questions/61915607/commandnotfounderror-your-shell-has-not-been-properly-configured-to-use-conda