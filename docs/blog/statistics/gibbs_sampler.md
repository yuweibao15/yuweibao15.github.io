---
title: Gibbs sampler
icon: post
# This control sidebar order
order: 1
category:
  - Statistics
tag:
  - Sampling
---

Gibbs sampling is a special case of MH algorithms. Gibbs sampling involves sampling from the conditional distributions of the variables of interest given the values of the other variables until the chain converges to a stationary distribution. Gibbs sampling is very useful for inference under linear models (the prior, the likelihood, and the posterior are all normal distributions) [^yang2014molecular] and for sampling from high-dimensional distributions. However, it requires the knowledge of conditional distributions.

Let's understand Gibbs sampling by some R codes [^duke]


[^yang2014molecular]: Z. Yang. Molecular Evolution: A Statistical Approach. Oxford Univ. Press, 2014.
[^duke]: http://www2.stat.duke.edu/~rcs46/modern_bayes17/lecturesModernBayes17/lecture-7/07-gibbs.pdf
[^general]: http://www2.stat.duke.edu/~rcs46/bayes17.html
