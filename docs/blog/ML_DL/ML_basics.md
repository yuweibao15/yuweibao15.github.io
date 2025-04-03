---
title: Machine Learning 101
icon: post
# This control sidebar order
order: 2
category:
  - ML_DL
tag:
  - Notes
---

## Definitions
Machine Learning
1. Supervised: learn from labeled inputs
    - Regression; Classification
    - eg. Logistic Regression; 
2. Unsupervised: learn from unlabeled inputs to discover patterns in the data
    - Clustering
    - eg. k-Means


Gradient descent is an algorithm for finding values of parameters w and b that minimize the cost function J. Repeat the following until convergence
$$w = w - \alpha J'_w (w,b)$$
$$b = b - \alpha J'_b (w,b)$$
alpha: learning rate