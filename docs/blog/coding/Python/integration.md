---
title: Numerical integration using Python scipy.integrate
icon: post
# This control sidebar order
order: 2
category:
  - Bioinformatics
tag:
  - Tool
#   - Guide
---

What tools can we use to do numerical integration?


## Python scipy.integrate
### Purpose
Solve a double integral numerically.
### Installation
```sh
pip install scripy
```
### Usage Examples
```sh
help(integrate)
```
#### 1. Simple single integral
To calculate $$I(a,b) = \int_0^1 a x^2 + b \quad dx$$
when $a=2, b=1$
```py
from scipy.integrate import quad
def integrand(x, a, b):
    return a*x**2 + b

a = 2
b = 1
I = quad(integrand, 0, 1, args=(a,b))
print(I)
```
<pre>
(1.6666666666666667, 1.8503717077085944e-14)
</pre>

The return value is a tuple in the form of `(estimated value of the integral, an upper bound on the error)`

#### 2. Single integral with exponential
To calculate $$I(x) = \int_1^\infty \frac{e^{-xt}}{2} dt$$
when $t=2$
```py
from scipy.integrate import quad
import numpy as np
def integrand(x,t):
    return np.exp(-x*t) / 2

t = 2
I = quad(integrand, 1, np.inf, args=(t))
print(I)
```
<pre>
(0.03383382080915317, 5.2341136313236115e-12)
</pre>

#### 3. Double integral with non-constant integration bounds
To calculate 
$$I=\int_{y=0}^{0.5} \int_{x=0}^{1-2y} xy \quad dx dy $$
[Method 1]
```py
from scipy import integrate
def f(x,y):
    return x*y

def bounds_y():
    return [0,0.5]

def bounds_x(y):
    return [0,1-2*y]

I = integrate.nquad(f,[bounds_x,bounds_y])
print(I)
```
[Method 2]
```py
from scipy.integrate import dblquad
area = dblquad(lambda x, y: x*y, 0, 0.5, lambda x: 0, lambda x: 1-2*x)
area
```
<pre>
(0.010416666666666668, 4.1016201284723663e-16)
</pre>



[^manual]:https://docs.scipy.org/doc/scipy/tutorial/integrate.html
[^fangohr]:https://www.southampton.ac.uk/~fangohr/teaching/python/book/html/16-scipy.html

<style>
pre {
  background-color:#38393d;
  /* color: #FF33F3; */
  color: #33F3FF;
}
</style>