

```sh

git clone https://github.com/nriddiford/mutationProfiles.git

cd mutationProfiles

# BioPerl
sudo apt install cpanminus
sudo cpanm Bio::Perl

# vcfParse
git clone https://github.com/nriddiford/vcfParse.git
cd vcfParse

perl Makefile.PL
make
make test
make install
```