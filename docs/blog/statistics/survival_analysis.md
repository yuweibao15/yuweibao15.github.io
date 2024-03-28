---
title: Survival Analysis
icon: post
# This control sidebar order
order: 1
category:
  - Statistics
tag:
  - Definition
---

## Definition
Survival analysis is a time to event analysis. Majorly it contains two kinds: 

## The KM plot and Log-rank test

Kaplan-Meier method is used to compute tables of the survival probability. When we plot the results, we end up with a stepped survival curve. The Kaplan-Meier table and associated plot is the simplest way of estimating the survival time when there are drop-outs.

TNM staging system is useful in predicting survival following a cancer diagnosis, where
- T describes the size of the tumor
- N describes nearby lymph nodes that are involved
- M describes distant metastasis spread to other parts of the body

Log-rank test the survival curves

1. Survival function
2. Censoring: when a patient is censored meaning this patient is dropped out of the study with no way to know the condition of the patient.

## Cox model
- Hazard is the probability of surviving at time t having survived up to time t.
- The risk set comprises the set of patients at time t that are at risk of experiencing the event 