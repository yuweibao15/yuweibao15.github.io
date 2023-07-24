---
title: Statistical phylogenetics study resources
icon: post
# This control sidebar order
order: 1
category:
  - Statistics
tag:
  - Papers
---

## Must read papers for graduate students

**This list was organized and posted on [^blog] by Bob Thomson [^BT] in 2015**: 

Bull, J. J., Huelsenbeck, J. P., Cunningham, C. W., Swofford, D. L., & Waddel, P. J. (1993). Partitioning and combining data in phylogenetic analysis. Systematic Biology, 42(3), 384–397.

Cavalli-Sforza, L. L., & Edwards, a W. F. (1967). Phylogenetic analysis. Models and estimation procedures. The American Journal of Human Genetics, 19, 233–257.

Edwards, S. V. (2009). Is a new and general theory of molecular systematics emerging? Evolution, 63, 1–19.

Felsenstein, J. (1973). Maximum likelihood and minimum-steps methods for estimating evolutionary trees from data on discrete characters. Systematic Biology, 22, 240–249.

Felsenstein, J. (1978). Cases in which parsimony or compatibility methods will be positively misleading. Systematic Zoology, 27, 401–410.

Felsenstein, J. (1981). Evolutionary trees from DNA sequences: a maximum likelihood approach. Journal of Molecular Evolution, 17, 368–376.

Felsenstein, J. (1985). Confidence limits on phylogenies: an approach using the bootstrap. Evolution, 39, 783–791.

Felsenstein, J. (1985). Phylogenies and the comparative method. American Naturalist, 125, 1–15.

Goldman, N. (1993). Statistical tests of models of DNA substitution. Journal of Molecular Evolution, 36, 182–198.

Hillis, D. M., & Bull, J. J. (1993). An Empirical Test of Bootstrapping as a Method for Assessing Confidence in Phylogenetic Analysis. Systematic Biology, 42, 182–192.

Holder, M., & Lewis, P. O. (2003). Phylogeny estimation: traditional and Bayesian approaches. Nature Reviews. Genetics, 4, 275–284.

Kumar, S., Filipski, A. J., Battistuzzi, F. U., Kosakovsky Pond, S. L., & Tamura, K. (2012). Statistics and truth in phylogenomics. Molecular Biology and Evolution, 29, 457–472.

Maddison, W. P. (1997). Gene Trees in Species Trees. Systematic Biology, 46, 523–536.

Pauling, L., & Zuckerkandl, E. (1963). Chemical paleogenetics. Acta Chem. Scand, 17, S9 – S16.

Sullivan, J., & Swofford, D. (1997). Are Guinea Pigs Rodents?? The Importance of Adequate Models in Molecular Phylogenetics. Journal of Mammalian Evolution, 4, 77–86.

## Papers related to HMM
**The following were recommended by by Joe Felsenstein [^HMM] in 2016:**

Yang, Z. 1994. Maximum-likelihood estimation of phylogeny from DNA sequences when substitution rates differ over sites. Molecular Biology and Evolution 10: 1396-1401. [Use of gamma distribution of rate variation in
ML phylogenies]

Yang, Z. 1994. Maximum likelihood phylogenetic estimation from DNA sequences with variable rates over sites: approximate methods. Journal of Molecular Evolution 39: 306-314. [Approximating gamma distribution in ML phylogenies by an HMM]

Yang, Z. 1995. A space-time process model for the evolution of DNA sequences. Genetics 139: 993-1005. [Allowing for autocorrelated rates along the molecule using an HMM for ML phylogenies]

Felsenstein, J. and G. A. Churchill. 1996. A Hidden Markov Model approach to variation among sites in rate of evolution Molecular Biology and Evolution 13: 93-104. [HMM approach to evolutionary rate variation]

Thorne, J. L., N. Goldman, and D. T. Jones. 1996. Combining protein evolution and secondary structure. Molecular Biology and Evolution 13 666-673. [HMM for secondary structure of proteins, with phylogenies]

## Papers related to Bayesian model comparison
**The following were recommended by Jeffrey Thorne [^bayesian] in 2016:**

Posterior Predictive Inference in Phylogenetics: J.P. Bollback. 2002. Molecular Biology and Evolution. 19:1171-1180

Harmonic Mean and other techniques for estimating Bayes factors: Newton and Raftery. 1994. Journal of the Royal Statistical Society. Series B. 56(1):3-48.

:::tip More reliable ways to approximate marginal likelihood
Thermodynamic Integration to Approximate Bayes Factors (adapted to molecular evolution data): Lartillot and Philippe. 2006. Syst. Biol. 55:195-207

Improving marginal likelihood estimation for Bayesian phylogenetic model selection. W. Xie, P.O. Lewis, Y. Fan, L. Kao, M-H Chen. 2011. Syst Biol. 60(2):150-160. 

Choosing among partition models in Bayesian phylogenetics. Y. Fan, R. Wu, M-H Chen, L Kuo, P.O. Lewis. 2011. Mol. Biol. Evol. 28(1):523-532.
:::

Markov chain Monte Carlo without likelihoods. P. Marjoram, J. Molitor, V. Plagnol, and S. Tavare. 2003. PNAS USA. 100(26): 15324-15328. 

H. Jeffreys. The Theory of Probability (3e). Oxford (1961); p. 432

M.A. Beaumont, W. Zhang, D.J. Balding. Approximate Bayesian Computation in Population Genetics. 2002. Genetics 162:2025-2035.

## Papers related to Markov Chain Monte Carlo
**The following were recommended by Jeffery Thorne [^MCMC]**

CARLIN, B.P., and T.A. LOUIS. 1996. Bayes and Empirical Bayes Methods for Data Analysis. Chapman and Hall, London.

GELMAN, A., J.B. CARLIN, H.S. STERN, and D.B. RUBIN. 1995. Bayesian Data Analysis. Chapman and Hall, London.

Hastings WK (1970) Monte Carlo sampling methods using Markov chains and their applications. Biometrika 57:97–109

METROPOLIS, N., A.W. ROSENBLUTH, M.N. ROSENBLUTH, A.H. TELLER, and E. TELLER. 1953. Equations of state calculations by fast computing machines. J. Chem. Phys. 21: 1087–1092.

**The following were recommended by Matthew Stephens and Eric C. Anderson**
### Examples of importance sampling in genetics:
1. [Griffiths and Tavare (1994)](https://pubmed.ncbi.nlm.nih.gov/7800710/)
2. [Matt Stephens and Peter Donnelly (2000)](https://doi.org/10.1111/1467-9868.00254)
3. [Anderson and Garza (2006)](https://doi.org/10.1534/genetics.105.048074)
   
### Papers related to $MC^3$
[Metropolis coupled MCMC (Geyer 1991)](https://www.jstor.org/stable/2246094)


## Other awesome recourses
1. [Joe Felsenstein's courses](https://felsenst.github.io/courses.html)
2. [2016 SISG Module 19: Molecular Phylogenetics (Instructors: Mark Holder, Jeffery Thorne, and Joe Felsenstein)](https://evolution.gs.washington.edu/sisg/2016/)
3. [Bayesian Methods Class by Rebecca C. Steorts at Duke University](http://www2.stat.duke.edu/~rcs46/bayes17.html)
4. [2019 Bodega Applied Phylogenetics Workshop by UC Davis & Bodega Marine Laboratory](http://treethinkers.org/2019-bodega-applied-phylogenetics-workshop-schedule/)
5. [Phylogenetics Seminars organized by Frederick "Erick" Matsen](http://phyloseminar.org/)
6. [Phylogenetics discussion forum organized by Frederick "Erick" Matsen](http://www.phylobabble.org/)
7. [Paul O. Lewis' grad-level Phylogenetics class](https://plewis.github.io/phylogenetics2022/)
8. [Jeffrey L. Thorne's grad-level Bioinformatics II class](https://brcwebportal.cos.ncsu.edu/thorne/bioinf2.html)
9. [Bayesian Inference notes with R examples by Ville Hyvönen & Topias Tolonen](https://vioshyvo.github.io/Bayesian_inference/)
10. [Matthew Stephens's **fiveMinuteStats**: basic statistics concepts with practical R codes](https://stephens999.github.io/fiveMinuteStats/index.html)
11. [Nicolas Lartillot's blog: The Bayesian kitchen](http://bayesiancook.blogspot.com/)
12. [Book: Statistical Rethinking-A Bayesian Course with Examples in R and Stan by Richard McElreath](https://civil.colorado.edu/~balajir/CVEN6833/bayes-resources/RM-StatRethink-Bayes.pdf)
13. [Introduction to Computational Molecular Biology: Molecular Evolution at University of Washington in 2010](https://evolution.gs.washington.edu/gs541/2010/)
    Note: [Dr. Felsenstein starts teaching Likelihood at 31'30](https://evolution.gs.washington.edu/gs541/2010/20100420.mp3) 
14. [Eric C. Anderson's Handbook on Practical Computing and Bioinformatics for Conservation and Evolutionary Genomics](https://eriqande.github.io/eca-bioinf-handbook/)
15. [Eric C. Anderson's MCMC simulations/visualizations demo](https://github.com/eriqande/sisg-mcmc-opengl-computer-demos)
    Note: [Eric C. Anderson's SISG MCMC OpenGL Demos tutorial on Youtube](https://www.youtube.com/watch?v=a8gjem86Uf4)

## Resources related to HMC

1. [Book Chapter: MCMC using Hamiltonian dynamics by Radford M. Neal](https://arxiv.org/abs/1206.1901)
2. [Book: A Conceptual Introduction to Hamiltonian Monte Carlo by Michael Betancourt](https://arxiv.org/pdf/1701.02434.pdf)

[^blog]:http://treethinkers.org/update-must-read-papers-for-graduate-students/
[^BT]:http://thomsonlab.org/people/bob-thomson/
[^HMM]:https://evolution.gs.washington.edu/sisg/2016/2016_SISG_19_5.pdf
[^bayesian]:https://evolution.gs.washington.edu/sisg/2016/2016_SISG_19_9.pdf
[^MCMC]:https://brcwebportal.cos.ncsu.edu/thorne/ftp_docs/bioinf2/sampling2023.pdf
