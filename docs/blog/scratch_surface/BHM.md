---
title: Bayesian Hierarchical Models
icon: post
# This control sidebar order
order: 2
category:
  - Scratch Surface Learn
tag:
  - Tool
---

## Motivation
If we want to address difference of treatment effects among multiple studies, we need to understand two level of differences:
1. Random differences between individual patients
2. Systematic differences between studies

Using Bayesian Hierarchical Models (BHM), we can address the multilevel information and estimate the probability of an overall treatment effect in the population.

## Model characteristics
1. Multilevel structure
2. Use prior information

## When to use
When the data is multilevel, the pooled analysis and individual group analysis will be underpowered.

::: tip 
**Pooled analysis**: simply combining data from all patients that would not account for patient-to-patient differences.

**Individual group analysis**: analyzing each individual patient's trial separately that would not represent the information available across all the trials. 
:::

## Limitations
1. Assuming a certain type of distribution for the across-group variability. eg. normal
2. Since a prior is used, it is important to do sensitivity analysis to verify robustness of the conclusions.


## References
1. McGlothlin AE, Viele K. Bayesian Hierarchical Models. JAMA. 2018;320(22):2365–2366. doi:10.1001/jama.2018.17977
2. Stunnenberg BC, Raaphorst J, Groenewoud HM, et al. Effect of Mexiletine on Muscle Stiffness in Patients With Nondystrophic Myotonia Evaluated Using Aggregated N-of-1 Trials. JAMA. 2018;320(22):2344–2353. doi:10.1001/jama.2018.18020
3. https://andrewcparnell.github.io/bhm_course/
4. https://bayesball.github.io/BOOK/bayesian-hierarchical-modeling.html
5. https://www.shaneorr.io/post/bayesian-bar-passage-a-tutorial-on-bayesian-data-analysis-in-r/
