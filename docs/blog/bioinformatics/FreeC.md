# FreeC usage

## Usage
```sh
freec -conf <config file> -sample <mySample.bam> -control <myControl.bam>
```

To run it with a control sample (window size is automatically selected):
```sh
freec -conf config_ctrl.txt
```

```sh
cat config_ctrl.txt
```
</pre>
[general]

chrLenFile = hs18_chr.len
coefficientOfVariation = 0.062
ploidy = 3

#breakPointThreshold = -.002;
#window = 50000
#chrFiles = hg18/hg18_per_chromosome
#outputDir = test
#degree=3
#intercept = 0

[sample]

mateFile = HCC1143.arachne
inputFormat = arachne
mateOrientation = 0

#mateCopyNumberFile = HCC1143.arachne_sample.cpn

[control]

mateFile = HCC1143_BL.arachne
inputFormat = arachne
mateOrientation = 0

#mateCopyNumberFile = HCC1143_BL.arachne_control.cpn
<pre>

To obtain Chromosome length file, use
```sh
conda install -c bioconda ucsc-fasize

cat file.fa | awk '$0 ~ ">" {if (NR > 1) {print c;} c=0;printf substr($0,2,100) "\t"; } $0 !~ ">" {c+=length($0);} END { print c; }
```