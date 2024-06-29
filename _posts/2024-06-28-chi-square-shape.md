---
layout: post
title: Interesting Facts About \(\:\chi^2\) Distribution Shapes
header-includes:
   - \usepackage{amsmath}
nav_exclude: True
---

### **A Visual Motivation**

When we first learn about probability distributions, we might first see the beauty of normal (Gaussian) distributions, understand its density function and bell-shaped curve, then study many <i>related</i> distribution.

One of the interesting distribution is the **chi-squared** $$\chi^2$$ one. Given $$k$$ i.i.d. standard normal variables $$X_1, ..., X_k$$, if we denote 
\begin{equation}
Z_k = X_1^2 + \cdots + X_k^2 = \sum_{i=1}^k X_i^2 \tag{1}
\end{equation}
then $$Z_k \sim \chi^2_k$$, a chi-squared R.V. with $$k$$ degrees of freedom. $$Z_k$$ has density
\begin{equation}
   f_{Z_k}(z) = \frac{1}{2^{k/2}\Gamma(k/2)} z^{k/2 - 1} e^{-z/2} \tag{2}
\end{equation}
and its expectation and variance are $$k$$ and $$2k$$ respectively. 

In the lecture, we might have seen the following graph for 
chi-squared distributions with different degrees of freedom $$k$$:
<img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Chi-square_pdf.svg" alt="Chi-Squared Distribution" style="margin-top: 10px;">

My immediate response when seeing this picture was: *what makes the difference between $$k \leq 2$$ and $$k > 2$$?* For the cases where 
$$k = 1 \:\text{or}\: 2$$, we observe
1. The density at $$x = 0$$ is non-zero, while later on they all become zero.
2. The density also reaches its mode at $$0$$ on the x-axis, while later on they all peak at $$x > 0$$.
3. The density function overall is convex and monotonic decreasing, but when $$k > 2$$, convexity/concavity changes.

Most important, as we should remember that $$\chi^2$$ is a special case of the more general [gamma distribution](https://en.wikipedia.org/wiki/Gamma_distribution), we want to make sure whether $$k = 2$$ (an integer degree of freedom) is the real boundary between the two **"shape behaviors"**, or whether we can find a more precise boundary by allowing $$k$$ to take arbitrary values in $$\mathbb{R}^+$$.

### **Level I: $$\:\chi^2$$ At the Origin**

### **Level II: Diving Into the Maximizer**

### **Level III: The Myth of Convexity**