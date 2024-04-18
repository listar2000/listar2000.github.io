---
layout: post
title: Accelerating and Generalizing Langevin Monte Carlo
header-includes:
   - \usepackage{amsmath}
nav_exclude: True
---
[📝 Draft Link (Work in Progress)](https://drive.google.com/file/d/1MuitobzRv-aBQzz3O62ooaqyskLXJ-7L/view?usp=sharing)
### Langevin Monte Carlo --- why matters?

In the world of computational statistics and machine learning, Langevin Monte Carlo (LMC) has recently emerged as a significant advancement {% include sidenote.html id='note-sgld' note='For a good and concise first paper to read on this topic, I recommend [*Welling, et al. (2011)*](https://icml.cc/2011/papers/398_icmlpaper.pdf).' %}. Its growing popularity can be attributed to its unique approach to sampling from complex, high-dimensional probability distributions, a task central to numerous applications in data science and artificial intelligence.

A few factors distinguish LMC from traditional methods (e.g. RWMH):

1. **Tractability:** instead of directly evaluating on the target density $$\pi(x)$$ or its gradient $$\nabla \pi(x)$$, LMC samples from the target by relying on $$\nabla \log \pi(x)$$ (i.e. the *score function*). This enables LMC on a wide set of models where full density is intractable.
{% include sidenote.html id='note-ebm' note='One famous example is the family of *energy based models*. See the survey [*Song, Yang, and Diederik P. Kingma (2021)*](https://arxiv.org/abs/2101.03288).' %}
2. **Proposal-free:** LMC directly incorporates stochastic differential equations. This approach eliminates the need for a proposal distribution, simplifying the sampling process and reducing the dependency on expert knowledge for tuning. This attribute makes LMC particularly appealing for complex problems where designing an appropriate proposal distribution is challenging.
3. **Generalizability:** as will be seen in the following section, different variants of LMC (and other stochastic gradient MCMC methods) can be written under a unified framework (SDE). This framework enables adding additional pre-conditioner (which is effective when the target density is poorly scaled -- has large *condition number*) and a curl matrix (which helps traversing through the level curves of the target).

While the first two advantages of LMC have been well-known, this thesis largely exploits the third point: it investigates into particular choices that could be made in the general framework that **(1) accelerate the convergence of sampling problem** and **(2) generalize LMC to a larger range of tasks**.

### The General Recipe

Let $$\pi(x): \mathbf{R}^d \to \mathbf{R}$$ be the target density of a d-dimensional random variable (might only known up to some constant). The following SDE gives a general recipe {% include sidenote.html id='note-recipe' note='A more comprehensive description of this recipe/framework was proposed in [*Ma, et al. (2015)*](https://arxiv.org/abs/1506.04696).' %} for sampling from $$\pi$$:

\begin{equation}
dX_t = [D + Q]\nabla_x \log \pi(X_t)\, dt + \sqrt{2D}\, dB_t
\end{equation}

where $$B_t$$ is a d-dimensional Brownian motion (Wiener process), $$D$$ and $$Q$$ are the *diffusion* (pre-conditioner) and *curl* matrices respectively. Discretizing this SDE (via *Euler-Maruyama method*) would give us a valid way to take samples using this SDE. [Section 1](https://drive.google.com/file/d/1MuitobzRv-aBQzz3O62ooaqyskLXJ-7L/view?usp=sharing) of the thesis provides an overview, including how this dynamics admits the target density as a steady state solution and the roles of $$D$$ and $$Q$$.
