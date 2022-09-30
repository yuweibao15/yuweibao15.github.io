---
title: Stochastic Processes
icon: post
# This control sidebar order
order: 1
category:
  - Statistics
tag:
  - Definition
#   - Guide
---

As I am taking Stochastic Processes class at Tulane University, I want to highlight some definitions from the textbook *Essentials of Stochastic Processes (3rd Edition) by Rick Durrett (Springer, 2016)*

<!-- ::: tip Common commands using server

::: -->

## Chapter 1 - Markov Chains
### 1.1 Definitions and Examples
::: danger Discrete type of Markov Chain
A sequence $\{X_n\}$ is a discrete Markov chain with transition matrix $p(i,j)$ if for any $j,i,i_{n-1}$, s.t. 
$$P(X_{n+1} = j | X_n = i, X_{n-1} = i_{n-1}, \dots, X_0 = i_0) = P(X_{n+1} = j | X_n = i) = p(i,j)$$
:::
### 1.2 Multistep Transition Probabilities
::: tip Theorem 1.1
The $m$ step transition probability $P(X_{n+m} = j | X_n=1)$ is the $m$th power of the transition matrix $P: p \times p \times p \times \dots \times p$ for $m$ times.
:::
### 1.3 Classification of States
::: danger Chapman–Kolmogorov equation
$$p^{n+m}(i,j) = \sum_{k} p^m(i,k) p^n (k,j)$$

$p^{n+m}(i,j)$ is the $(n+m)$ step transition probability.
:::

::: tip Theorem 1.2 Strong Markov Property
Suppose $T$ is a stopping time. Given that $T=n$ and $X_T =y$, and other information about $X_0, X_1, \dots, X_n$ is irrelevant for predicting the future. Then $X_{T+k}, k \geq 0$ behaves like a Markov Chain with initial state $y$.
:::

::: info Lemma 1.3 
Suppose $P_x(T_y \leq k) \geq \alpha > 0$ for all $x$ in the state space $S$ for a Markov Chain $X_n$. Then 
$$P_x(T_y > nk) \leq (1-\alpha)^n$$
:::

::: info Lemma 1.4
If $x \rightarrow y$ and $y \rightarrow z$, then $x \rightarrow z$
:::

::: tip Theorem 1.5
If $\rho_{xy} >0$ but $\rho_{yx} <1$, then $x$ is a transit state.
:::

::: info Lemma 1.6
If $x$ is recurrent and $\rho_{xy} > 0$, then $\rho_{xy} = 1$.
:::

::: tip Theorem 1.7
If $C$ is a finite closed and irreducible set, then all states in $C$ are **recurrent**.
:::

::: tip Theorem 1.8
If the state space S of a Markov Chain is finite, then S can be written as the disjoint union $T \cup R_1 \cup \dots \cup R_k$, where T is the set of transient states and $R_i, 1 \leq i \leq k$ are closed irreducible sets of recurrent states.
:::

::: info Lemma 1.9
If $x$ is recurrent and $x \rightarrow y$, then $y$ is recurrent.
:::

::: info Lemma 1.10
In a finite closed set, there must be at least one recurrent state.
:::

::: info Lemma 1.11
$$E_x N(y) = \frac{\rho_{xy}}{1- \rho_{yy}}$$
where $E_x N(y)$ denotes the **expected number** of visits to state $y$ beginning at state $x$.
:::

::: info Lemma 1.12
$$E_x N(y) = \sum_{n=1}^\infty p^n(x,y)$$
:::
::: tip Theorem 1.13
A state $y$ is recurrent if and onl if 
$$\sum_{k=1}^\infty p^n(y,y) = E_y N(y) = \infty$$
:::
### 1.4 Stationary Distributions
:::danger Stationary Distributions
Suppose we start a Markov Chain in a randomly selected state. \\
We have 
$$\begin{align*}
    P(X_n = j) &= \sum_i P(X_0 = i, X_n = j) \\
    &= \sum_i P(X_0 = i) P(X_n = j| X_0 = i) \\
    &= \sum_i q(i) p^n(i,j), \text{ where } q(t) = p(X_0 = i)
\end{align*}$$
If the chain has $k$ states, then 
$$q = \begin{pmatrix}
    q_1 \\
    q_2 \\
    \vdots \\
    q_k
\end{pmatrix}$$
is a $k-$dimensional vector, and the transition matrix $p$ is $k \times k$
:::
#### 1.4.1 Doubly Stochastic Chains
:::danger Definition 1.2 Doubly Stochastic Chains
A transition matrix $P$ is **doubly stochastic** if its columns sum to 1. $\sum_x p(x,y) = 1$ 
:::

:::tip Theorem 1.14
If $P$ is a doubly stochastic transition matrix for a Markov chain over $N$ states, then the uniform distribution $\pi(x) = \frac{1}{N}, x = 1, \dots, N$ is a stationary distribution.
:::
### 1.5 Detailed Balance Condition
:::danger Detailed balance
A stationary distribution $\pi$ satisfies the detailed \textbf{balance condition} if $\pi(x) p(x,y) = \pi(y) p(y,x)$
:::
#### 1.5.1 Reversibility
:::tip Theorem 1.15
Fix $n$ and let $Y_m = X_{n-m}$ for $0 \leq m \leq n$. Then $Y_m$ is a Markov chain with transition probability 
:::
#### 1.5.2 The Metropolis-Hastings Algorithm
:::danger The Metropolis-Hastings Algorithm
Consider sampling from some distribution $\pi$. If we begin in state $X$, we will jump to another state with probability 
$$\begin{align*}
    r(x,y) = \min \{ \frac{\pi(y)q(y,x)}{\pi(x) q(x,y)}, 1\}
\end{align*}$$
where $q(x,y)$ is a jumping distribution 
The transition probability from the chain is thus
$$p(x,y) = q(x,y) r(x,y)$$
Suppose that $\pi(y) q(x,y) > \pi(x) q(x,y)$, then $r(x,y) = 1$, so $\pi(x) p(x,y) = \pi(x) q(x,y) 1 = \pi(x) q(x,y)$ and $\pi(y) p(y,y) = \pi(y) q(y,x
) r(y,x) = \pi(y) q(y,x) \frac{\pi(x)q(x,y)}{\pi(y) q(y,x)} = \pi(x) q(x,y)$, so we see that the detailed balance condition is satisfied.

To generate a sample, we can run the chain for a sufficient period of time to reach an equilibrium. 
:::
#### 1.5.3 Kolmogerov Cycle Condition
:::danger Kolmogerov Cycle Condition
Consider an irreducible Markov chain with state space $S$. We say that for an irreducible Markov Chain with state space $s$, the cycle condition is satisfied if, given a cycle of states
$x_0, x_1, \dots, x_{n-1}, x_n$ with $p(x_{i-1},x_i) >0 \quad 1 \leq i \leq n$, we have 
$$\prod_{i=1}^n p(x_{i-1},x_i) = \prod_{i=1}^n p(x_i,x_{i-1})$$
:::

::: tip Theorem 1.16
There is a stationary distribution that satisfies the detailed balance condition if and only if the cycle condition holds.
:::
### 1.6 Limit Behavior
::: danger Limit behavior
If $y$ is a transient state, then we know that $\sum_{n=1}^{\infty} p^n(x,y) < \infty$ for any state $x$ \textbf{Lemma 1.11} so $\lim_{n \rightarrow \infty} p^n(x,y) = 0$. So we can focus on studying recurrent states.
:::

::: info Lemma 1.17
If $\rho_{xy}>0$ and $\rho_{yx}>0$, the $x$ and $y$ have the same period.
:::

::: info Lemma 1.18
If $p(x,x)>0$, then $x$ has period 1.
:::

::: danger 4 key assumptions about a chain with transition matrix $P$
- $I$: $P$ is irreducible 
- $A$: All states have period 1 (aperiodic)
- $R$: All states are recurrent
- $S$: There is a stationary distribution $\pi$
:::

::: tip Theorem 1.19 Convergence Theorem
Suppose $I,A,S$ hold, then as $n \rightarrow \infty$, $p^n(x,y) \rightarrow \pi(y)$
:::

::: tip Theorem 1.20 Asymptotic Frequency
Suppose $I,R$ hold, let $N_n(y)$ be the number of visits to $y$ up to time $n$, then $\frac{N_n(y)}{n} \rightarrow \frac{1}{E_y T_y}$
:::

::: tip Theorem 1.21
If $I$ and $S$ hold, then $\pi(y) = \frac{1}{E_y T_y}$, and hence the stationary distribution is unique. 
:::

::: tip Theorem 1.22
Suppose $I,S$ hold, and $\sum_x |f(x)| \cdot \pi(x) < \infty$ for some $f(x)$, then 
$$\frac{1}{n} \sum_{m=1}^n f(x_m) \rightarrow^x \sum_x f(x) \pi(x)$$
:::


::: tip Theorem 1.23 Convergence Theorem
Suppose $I,S$ hold. Then 
$$\frac{1}{n} \sum_{m=1}^n p^m(x,y) \rightarrow \pi(y)$$
:::

::: tip Theorem 1.24
Suppose $p$ is irreducible and recurrent. Let $x \in S$ and let $T_x = \inf \{n \geq 1: X_n = x\}$ 
$$\mu_x(y) = \sum_{n=0}^{\infty} P_x (X_n) = y, T_x > n)$$
defines a stationary measure with $0 < \mu_x(y) < \infty$ for all $y$.
:::
### 1.8 Proof of the Convergence Theorem
::: info Lemma 1.25
If there is a stationary distribution, then all states $y$ that have $\pi(y)>0$ are recurrent.
:::

::: info Lemma 1.26
If $x$ has period 1, then there is a number $n_0$ s.t. if $n \geq n_0$, then $n \in I_x$ (the set of all times $k$ for which $p^k(x,x) >0$)
:::

::: info Lemma 1.27
$I_x$ is closed under addition. That is, if $i,j \in I_x$, then $i+j \in I_x$
:::
### 1.9 Exit Distributions
::: info Theorem 1.28
Consider a Markov chain with state space $S$. Let $A$ and $B$ be subsets of $S$, so that $C=S-(A \cup B)$ is finite. Suppose $h(a)=1$ for $a \in A, h(b) = 0$ for $b \in B$, and that for $x \in C$ we have 
$$h(x) = \sum_y p(x,y) h(y)$$
If $P_x(V_A \wedge V_B < \infty) > 0 \quad \forall x \in C$, then $h(x) = P_x(V_a < V_b)$.
:::
### 1.10 Exit Times
::: tip Theorem 1.29
Let $V_A = \inf \{ n \geq 0; X_n \in A\}$. Suppose $C=S-A$ is finite, and that $P_x(V_A < \infty) >0 \quad \forall x \in C$. If $g(a) = 0 \quad \forall a \in A$, and $\forall x \in C$, we have 
$$g(x) = 1 + \sum_y p(x,y)g(y)$$ 
then $g(x) = E_x (V_A)$  
:::
### 1.11 Infinite State Spaces
::: danger 
$x$ is **positive recurrent** if $E_xT_x < \infty$

If a state is recurrent but not positive recurrent, i.e. $P_x(T_x < \infty) = 1$ but $E_x T_x = \infty$, then we say that $x$ is **null recurrent**.
:::

::: tip Theorem 1.30
For an irreducible chain the following are equivalent:
1. Some state is positive recurrent.
2. There is a stationary distribution $\pi$.
3. All states are positive recurrent.
:::



