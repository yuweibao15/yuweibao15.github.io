---
title: Study notes using Dr. Eric C. Anderson's Bioinformatics Handbook
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Notes
---

Never stop learning new things from great people. I personally met Dr. Eric C. Anderson at SISG in July 2023. He is a humble researcher and fun person to talk to. He also provided great resources for me to study $MC^3$ through simulations and bioinformatics guidelanes. 

Here are some notes reading his bioinformatics handbook [^ECABioinformatics]

## Unix basics
### The simple ones
```sh
pwd # Print current working directory
ls  # List all the files in the current directory
cd PATH/TO/FOLDER   # Enter a folder
echo $PATH # Print enviroment variables
mkdir -p DIR_NAME   # Create a directory with all necessary parent directories
mv WHERE_THE_FILE_FROM WHERE_THE_FILE_TO    # Move file from one location to another
cp WHERE_THE_FILE_FROM WHERE_THE_FILE_TO    # Copy file from one location to another
rm UNWANTED_FILE    # Remove a file

cat A_FILE_YOU_WANT_TO_SEE

command < file  # Send a data file into standard input for a utility

ls -s WHERE_THE_FILE_FROM WHERE_THE_FILE_TO # Copy a symbolic link of one file to a difference location (shortcuts)
```
### Additional useful ones
```sh
echo
cat
head, -n, -c
tail, -n
less
sort, -n -b -k
paste
cut, -d
tar, -cvf, -xvf
gzip, -c
du, -h -C,
wc
date
uniq
chmod, u+x, ug+x
grep
```

### An example script
[^ECABioinformatics] `clone-classroom-repos.sh`
```sh
#!/bin/bash

# define a function to print the usage or "help" for the script
function usage {
      echo Syntax:
      echo "  $(basename $0)  GH_Prefix  Repo_Prefix  Branch  Dir
      
      GH_Prefix: the URL of the GitHub site where the repository exists.
      Repo_Prefix: the prefix of the name of each repository to be cloned.
      Branch: the name of the branch to create and switch to in the repository,
         once the repo has been cloned.
      Dir: path to the directory (will be created if necessary) to clone all
         the repositories to.
         
   Example:
   
      $(basename $0)  https://github.com/CSU-con-gen-bioinformatics-2020  illumina-video-questions- erics-edits  /tmp/illumina-questions
      "
      echo
}

#  test for right number of required args.  If not, print usage message
if [ $# -ne 4 ]; then
    usage;
    exit 1;
fi

# copy positional parameters into other variables
GHP=$1
RP=$2
BRANCH=$3
DD=$4

# assign string with student GitHub handles into a variable
GHNAMES="AmandaCicchino
BrennaF
CaitlinWells
EllenMCampbell
FayDong
LibbyGH
NathanPhipps
RGCheek
Ronan17
abeulke
carolazari
cbossu
ccolumbu
elenacorrea
eriqande
jenleon07
kimhoke
kruegg
lauracgoetz
mdrod110
mgdesaix
raven-wings
seamus100
taylorbobowski
wcfunk"

# assign my GitHub username to the variable USER
USER=eriqande

# assign the current working directory to the variable RUNDIR
RUNDIR=$PWD

# make a new directory named whatever the user wanted for the output directory
mkdir -p $DD

# make variables to hold log and error file names
LOG=${PWD}/${RP}log
ERR=$LOG.stderr

# print the date/time when the process is starting
echo "STARTING at $(date)"

# make a clean slate. remove any files with the name
# of the error output file
rm -f $ERR

# cycle over the student GitHub names, and for each one *do*
# the commands that appear before the *done* keyword. Indenting
# is used to make it easier to read, but is not essential.
for L in $GHNAMES; do

    echo "Working on $L, starting at $(date)"  # print a progress line to stdout
    REPO=$GHP/${RP}$L     # combine variables into new variables that
    echo $REPO            # hold the URL for the repository to be
    DEST=$DD/$L           # cloned and the path where it should be cloned to
  
    # store the commands themselves into variables. Note the 
    # use of double quotes.
    CLONE_IT="git clone ${REPO/github.com/$USER@github.com} $DEST" 
    BRANCH_IT="git checkout -B $BRANCH"
    PUSH_IT="git push -u origin $BRANCH"
  
    
    # now, run those commands, chained together by exit-status-AND
    # operators (so it will stop if any one part fails), while
    # all the while appending error statements to the Error file. Run it
    # all within an "if" statement so you can deliver a report as to
    # whether the whole shebang succeeded or failed.
    if $CLONE_IT 2>> $ERR  && \
        cd $DEST && \
        $BRANCH_IT 2>> $ERR  && \
        $PUSH_IT 2>> $ERR  && \
        cd $RUNDIR   # at the very end make sure to return to the original working directory
    then
        echo "FULL SUCCESS $L"
    else
        echo "FAILURE SOMEWHERE WITHIN $L"
        cd $RUNDIR  # get back to the working directory from which the original command was run.
                    # so we are ready to handle the next student repo.
    fi
  
done  # signifies the end of the for loop we are cycling over
```

### Other essentials
```sh
# Loop:
for i in dogs cats people; do
  echo "I like $i"
done

for fruit in pears figs; do
  for who in Mark Alice; do
    echo "$who likes $fruit"
  done
done

if exit_status1; then
  Do this if exit_status1 = SUCCESS!
elif exit_status2; then
  Do this if exit_status1 = NO_SUCCESS and exit_status2 = SUCCESS!
else 
  Do this if both were NO_SUCCESS
fi
```
:::tip Read files line by line
```sh
# this is an example of reading a file in which each row is delimited
# by whitespace, the second column is a file name and the the
# third column is a number
cat a_file | while read -r line; do 
  A=($line); 
  file=${A[1]}; 
  num=${A[2]}; 
done
```
:::

:::tip awk, sed
```sh
sed 's/orginal/replacement/g;' file
```
Parameter: `-g`: globally rather than only the first match
:::

## Other highlights
1. Connect to remove server
2. File transfer between local PC and remote server
3. Set up SSH config file for easily connect to remove server with its nickname. (Chapter 7.3.1)
4. `tmux`: the terminal multiplexer (Chapter 7.4)
5. `conda`: the environment manager
6. Download softwares on HPC such as `gatk`
7. `slurm`: Simple Linux Utility for Resource Management
8. Manage workflows with `Snakemake` - a Python-based framework to manage bioinformatics workflows. 
   For example, Unix programming is using input-oriented, forward marching workflows that the workflow itself doesn’t really know what it is trying to produce from those inputs until it has run all the way through and actually turned those inputs into outputs. 

   However, `Snakemake` is an output-oriented, backward-looking approach because its workflows are defined first and foremost in terms of the output files that are desired, along with instructions on how to create those output files from necessary input files and bioinformatic programs.

    To learn `Snakemake`, check the documentation [^Snakemake_doc] and the tutorial [^Snakemake_tutorial]. Then check back on Chapter 14.

## DNA Basics
1. DNA typically occurs as a double-helix of two complementary strands. 
2. There are four nucleotide bases: adenine (A), cytosine (C), guanine (G), and thymine (T).
3. DNA sequences is read from the 5' to the 3' end of the molecule because $5' \rightarrow 3'$ (forward strand) is the direction in which a new strand of DNA is synthesized during DNA replication.
   For example, for a sequence `5'--ACTCGACCT--3'`, when it paired with its complement (A-T, C-G), it will look like:
   ```js
    5'--ACTCGACCT--3'
        |||||||||
    3'--TGAGCTGGA--5'
   ```
4. Regardless of which strand of DNA the original template comes from, sequences must be read off of it in a 5’ to 3’ direction (as that is how the biochemistry works).

## Bioinformatics file formats [^bioinformatics_file_format]
The common types: `FASTA`, `FASTQ`, `SAM`, `BAM`, and `VCF`.
1. Remember to index your `FASTA` files.
2. `SAM` file has an entry starts with `@PG` that  tells about the program that was used to produced the SAM file. 
   - `ID`: software
   - `VN`: version
   - `CL`: complete command line
For example:
```js
@PG     ID:bwa  PN:bwa  VN:0.7.17-r1188 CL:bwa mem -R @RG\tID:s001_T199967_Lib-1_HY75HDSX2_1_AAGACCGT+CAATCGAC\tSM:T199967\tPL:ILLUMINA\tL
B:Lib-1\tPU:HY75HDSX2.1.AAGACCGT+CAATCGAC resources/genome.fasta results/trimmed/s001---1_R1.fq.gz results/trimmed/s001---1_R2.fq.gz
```
**CIGAR** column in a `SAM` file denotes the position and length of the insertion.
3. `BAM` (Binary Alignment Map) file is a compressed binary ot `SAM` file.
4. I really wish I read all these when I first seeing `VCF` [^bioinformatics_file_format].
   -  `vcflib vcf2fasta` takes a phased VCF file and a fasta file and spits out sequence.

:::warning In progress...
Continue with 19.4.1.5
:::

## Steps in a typical analysis:
0. Preparation:
   - Download reference genome from NCBI
   - Use `samtools faidx` to create index of `reference_genome.fasta`
1. Alignment: align reads from a sequencing machine to a reference genome.
2. Variant calling: use tools to identify genetic variation and the genotypes of individuals at different location in the genome.
3. Analysis

### Highlights:
1. The “paired-end” sequencing: the sequences come in pairs from different ends of the same fragment.
## Remarks:
1. Doing bioinformatics, you will find that there will be failures of various programs. It is essential to store pipeline logs then debug.
2. Pro tip on notebooks: First, number your notebooks and have outputs and intermediates directories associated with them. And second, always save the R object that is a ggplot in the outputs so that if you want to tweak it without re-generating all the underlying data, you can do that easily.

## Other resources:
1. Bash tutorial: https://ryanstutorials.net/bash-scripting-tutorial/
2. A video about how Illumina sequencing work: https://eriqande.github.io/erics-captioned-vids/vids/illumina-sbs/
   

[^ECABioinformatics]:https://eriqande.github.io/eca-bioinf-handbook/
[^Snakemake_doc]:https://snakemake.readthedocs.io/en/stable/.
[^Snakemake_tutorial]:https://snakemake.readthedocs.io/en/stable/tutorial/tutorial.html
[^bioinformatics_file_format]:https://eriqande.github.io/eca-bioinf-handbook/bioinformatic-file-formats.html