---
title: Stochastic Process HW2 
icon: post
# This control sidebar order
order: 2
category:
  - Statistics
tag:
  - Tool
#   - Guide
---
I am going to use fancy mermaid to visualize some transition probability matrix. 
::: tip Exercise 1.14 
Do the following Markov chains converge to equilibrium? [^Textbook]
:::
![stochastic_HW2](./fig/stochastic_HW2_1.14.png)

(a)
```mermaid
flowchart TB
    1-->3;
    2-->3;
    2-->4;
    3-->1;
    3-->2;
    4-->1;
```

(b)
```mermaid
flowchart TB
    1-->2;
    2-->4;
    3-->1;
    4-->1;
    4-->3;
```

(c)
```mermaid
flowchart TB
    1-->2;
    1-->3;
    2-->4;
    3-->4;
    3-->6;
    4-->1;
    5-->2;
    6-->1;
    6-->5;
```

(d)
```mermaid
flowchart TB
    1-->3;
    2-->1;
    3-->2;
    3-->5;
    4-->2;
    4-->5;
    5-->6;
    6-->4;
```


[^Textbook]: Essentials of Stochastic Processes (3rd Edition) by Rick Durrett (Springer, 2016)