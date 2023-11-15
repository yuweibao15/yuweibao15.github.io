---
title: deTEct - transposition event detector
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
---

Transposable elements (TEs) are mobile DNA sequences capable of replicating themselves within genomes independently of the host cell DNA. They are the "jumping genes" that move from one location on the genome to another. These events will add complexity into large-scale genomic functional analysis. It is crucial to identify TEs and explore the impact of TEs into structural variants identification.

## Protocol
According to [^paper], we want to use the tool `deTEct` [^deTEct] to identify transposition event.

## Ingredients
Input: Structural variants (VCF file) of PBSV (on PBMM2 alignments) or Sniffles (on NGMLR alignments), transposon annotations (by resonaTE), reference genome (FASTA)

### Test
I already have SV results called by lumpy, let's see if it works for this workflow.

## Installation
```sh
conda create --name py38_deTEct python=3.8
conda activate py38_deTEct
conda install -c derkevinriehl transposition_detector_detect 
```

## Usage
```sh
transposition_deTEct -help
```

```js
transposition_deTEct [-help] -seqHeadTXT <FILE> -transpGFF3 <FILE> -assmFasta <FILE> -svTool <FILE> -svFile <FILE> -outParsedFile <FILE> -outResultFile <FILE>
```

## Demo
```sh
git clone https://github.com/DerKevinRiehl/transposition_detector_deTEct.git
cd PATH_TO/transposition_detector_deTEct
conda activate py38_deTEct
# demo for sniffles_ngmlr alignments
transposition_deTEct -seqHeadTXT demoFiles/sequence_heads.txt -transpGFF3 demoFiles/FinalAnnotations_Transposons.gff3 -assmFasta demoFiles/sequence_CB4856.fasta -svTool sniffles -svFile demoFiles/SX3351_addisababa.sniffles_ngmlr.vcf -outParsedFile demoFiles/sniffles_ngmlr/SX3351_addisababa.SV.vcf.gff3 -outResultFile demoFiles/sniffles_ngmlr/SX3351_addisababa.transpositionEvents.gff3

# demo for pbsv_pbsmm2 alignments
transposition_deTEct -seqHeadTXT demoFiles/sequence_heads.txt -transpGFF3 demoFiles/FinalAnnotations_Transposons.gff3 -assmFasta demoFiles/sequence_CB4856.fasta -svTool pbsv -svFile demoFiles/SX3351_addisababa.pbsv_pbmm2.vcf -outParsedFile demoFiles/pbsv_pbmm2/SX3351_addisababa.SV.vcf.gff3 -outResultFile demoFiles/pbsv_pbmm2/SX3351_addisababa.transpositionEvents.gff3
```

The actual scripts
```sh
conda activate py38_deTEct
seqhead=/home/ybao2/GithubWorkRepo/BulkDNA/transposon_annotation_reasonaTE/workspace/testProject/sequence_heads.txt
TE=/home/ybao2/GithubWorkRepo/BulkDNA/transposon_annotation_reasonaTE/workspace/testProject/finalResults/FinalAnnotations_Transposons.gff3
genome=/media/XLStorage/ybao2/RefGenome/dmel-all-chromosome-r6.39.fasta
SV=demoFiles/SX3351_addisababa.sniffles_ngmlr.vcf
outparse=demoFiles/sniffles_ngmlr/SX3351_addisababa.SV.vcf.gff3
outresult=demoFiles/sniffles_ngmlr/SX3351_addisababa.transpositionEvents.gff3

transposition_deTEct -seqHeadTXT $seqhead -transpGFF3 $TE -assmFasta $genome -svTool sniffles -svFile $SV -outParsedFile $outparse -outResultFile $outresult
```

which tells us we need multiple files produced by the tool `reasonaTE` [^reasonaTE]

## `reasonaTE`
### Ingredients
- Input: Genome assembly (FASTA file).
- Output: Lots of transposon annotations (GFF3 file).
### Installation
```sh
# Environment 1 - including all annotation tools
conda create -y --name transposon_annotation_tools_env python=2.7
conda activate transposon_annotation_tools_env
conda install -y mamba
conda install -c bioconda repeatmodeler repeatmasker # Recommended not too install via conda
mamba install -y -c bioconda genometools-genometools # for some users: mamba install -y -c bioconda -c conda-forge genometools-genometools
mamba install -y -c derkevinriehl transposon_annotation_reasonate
mamba install -y -c derkevinriehl transposon_annotation_tools_proteinncbicdd1000
conda install -y -c derkevinriehl transposon_annotation_tools_transposonpsicli
mamba install -y -c derkevinriehl transposon_annotation_tools_mitetracker
mamba install -y -c derkevinriehl transposon_annotation_tools_sinescan=1.1.2
mamba install -y -c derkevinriehl transposon_annotation_tools_helitronscanner
mamba install -y -c derkevinriehl transposon_annotation_tools_mitefinderii
mamba install -y -c derkevinriehl transposon_annotation_tools_mustv2
mamba install -y -c derkevinriehl transposon_annotation_tools_sinefinder
mamba install -y -c anaconda biopython
conda deactivate
# Environment 2 - including CD-Hit and Transposon Classifier RFSB
conda create -y --name transposon_annotation_reasonaTE
conda activate transposon_annotation_reasonaTE
conda install -y mamba
mamba install -y -c anaconda biopython
mamba install -y -c bioconda cd-hit blast seqkit
mamba install -y -c derkevinriehl transposon_annotation_reasonate transposon_classifier_rfsb
conda deactivate
```
Issue:
The process is very slow and `mamba` is not working with error message:
```js
/anaconda3/envs/transposon_annotation_tools_env/lib/python2.7/site-packages/tqdm/__init__.py", line 3, in <module>
    from .cli import main  # TODO: remove in v5.0.0
  File "/home/ybao2/anaconda3/envs/transposon_annotation_tools_env/lib/python2.7/site-packages/tqdm/cli.py", line 202
    sys.stderr.write(f"Error:Unknown argument:{argv[0]}\n{help_short}")
                                                                     ^
SyntaxError: invalid syntax
```

### New attempt
Remove the conda env 
```sh
wget https://raw.githubusercontent.com/DerKevinRiehl/transposon_annotation_reasonaTE/main/environment_yml/transposon_annotation_tools_env.yml
wget https://raw.githubusercontent.com/DerKevinRiehl/transposon_annotation_reasonaTE/main/environment_yml/transposon_annotation_reasonaTE.yml
conda env create -f transposon_annotation_tools_env.yml
conda env create -f transposon_annotation_reasonaTE.yml
```
It seems to work.

### Usage
```sh
conda activate transposon_annotation_tools_env
mkdir workspace
wget https://raw.githubusercontent.com/DerKevinRiehl/transposon_annotation_reasonaTE/main/workspace/testProject/sequence.fasta # demo fasta you could use
```

The actual script
```sh
#!/bin/sh
#SBATCH --qos=normal            # Quality of Service
#SBATCH --job-name=reasonaTE     # Job Name
#SBATCH --time=1-0:00:00         # WallTime
#SBATCH --nodes=1               # Number of Nodes
#SBATCH --ntasks-per-node=1     # Number of tasks (MPI processes)
#SBATCH --cpus-per-task=1	# Number of threads per task (OMP threads)
#SBATCH --output=Log/reasonaTE.out	  ### File in which to store job output

# Activate annaconda to make it usable in slurm
eval "$(conda shell.bash hook)"

workspace=workspace
projectname=testProject
genome=sequence.fasta
mkdir -p $workspace

# 1. Create a project
conda activate transposon_annotation_tools_env
reasonaTE -mode createProject -projectFolder $workspace -projectName $projectname -inputFasta $genome
# 2. Annotate genome with annotation tools
conda activate transposon_annotation_tools_env
reasonaTE -mode annotate -projectFolder $workspace -projectName $projectname -tool all
# 3. Parse annotations
conda activate transposon_annotation_tools_env
reasonaTE -mode parseAnnotations -projectFolder $workspace -projectName $projectname
# 4. Run the pipeline on the genome annotations
conda activate transposon_annotation_reasonaTE
reasonaTE -mode pipeline -projectFolder $workspace -projectName $projectname
# 5. Calculate final statistics
conda activate transposon_annotation_reasonaTE
reasonaTE -mode statistics -projectFolder $workspace -projectName $projectname

```

### Check!
#### Step 3: Annotate results
```sh
conda activate transposon_annotation_tools_env
reasonaTE -mode checkAnnotations -projectFolder workspace -projectName testProject
```
<pre>
reasonaTE -mode checkAnnotations -projectFolder workspace -projectName testProject
Checking helitronScanner        ... completed
Checking ltrHarvest     ... completed
Checking ltrPred        ... not completed
Checking mitefind       ... completed
Checking mitetracker    ... completed
Checking must   ... completed
Checking repeatmodel    ... not completed
Checking repMasker      ... not completed
Checking sinefind       ... completed
Checking sinescan       ... completed
Checking tirvish        ... completed
Checking transposonPSI  ... completed
Checking NCBICDD1000    ... completed
</pre>

:::tip Notice there is no result for `ItrPred`
To run `ItrPred`, do separate installation following the tutorial [^ItrPred]
:::

:::tip Notice there is no result for `repeatmodel` and `repMasker`
Previously, I tried to use conda to work with these two and failed. The conda environment for these two tools have been reported errors. Running with the docker image also got me nowhere. I need to revisit this bit to install from source. 
:::

#### Step 3: Parse annotations:
```sh
conda activate transposon_annotation_tools_env
reasonaTE -mode checkParsed -projectFolder workspace -projectName testProject
```
<pre>
29       NCBICDD1000.gff3
9        helitronScanner.gff3
180      ltrHarvest.gff3
0        mitefind.gff3
41       mitetracker.gff3
25       must.gff3
12       sinefind.gff3
90       sinescan.gff3
295      tirvish.gff3
15       transposonPSI.gff3
</pre>

### Supplementary
Annotation tools list
```js
helitronScanner
ltrHarvest
mitefind
mitetracker
must
repeatmodel
repMasker
sinefind
sinescan
tirvish
transposonPSI
NCBICDD1000
```


[^paper]:https://academic.oup.com/nar/article/50/11/e64/6541023
[^deTEct]:https://github.com/DerKevinRiehl/transposition_detector_deTEct
[^reasonaTE]:https://github.com/DerKevinRiehl/transposon_annotation_reasonaTE
[^ItrPred]:https://github.com/DerKevinRiehl/transposon_annotation_reasonaTE/blob/main/TutorialRunLTRPred.md