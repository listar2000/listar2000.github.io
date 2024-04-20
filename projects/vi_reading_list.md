---
layout: page
title: Variational Inference Reading List
header-includes:
   - \usepackage{amsmath}
nav_exclude: True
---

<h1 style="font-size: 30px">Part I: <i>VI Basics & Overview</i></h1>

Kickstart with two most important survey papers in VI.
<p class="paper vi_paper" markdown="1">
    *[Variational Inference: A Reivew for Statisticians (2017)](https://www.cse.iitk.ac.in/users/piyush/courses/tpmi_winter19/readings/VI_Review.pdf)*<br/>
    Blei, David M., Alp Kucukelbir, and Jon D. McAuliffe
</p>
<p class="paper vi_paper" markdown="1">
    *[Advances in Variational Inferece (2018)](https://arxiv.org/abs/1711.05597)*<br/>
    Zhang, Cheng, Judith Bütepage, Hedvig Kjellström, and Stephan Mandt
</p>

<h1 style="font-size: 30px">Part II: <i>Scalable VI</i></h1>
Papers in this part aim to apply VI to scenarios where data size is massive and scalable inference is needed.
<p class="paper vi_paper" markdown="1">
    *[Stochastic Variational Inference (2013)](https://www.jmlr.org/papers/volume14/hoffman13a/hoffman13a.pdf)*<br/>
    Hoffman, Matthew D., David M. Blei, Chong Wang, and John Paisley
</p>
<p class="paper vi_paper" markdown="1">
    *[An Adaptive Learning Rate for Stochastic Variational Inference (2013)](http://proceedings.mlr.press/v28/ranganath13.html)*<br/>
    Ranganath, Rajesh, Chong Wang, Blei David, and Eric Xing
</p>
<p class="paper vi_paper" markdown="1">
    *[Fast and Scalable Bayesian Deep Learning by Weight-Perturbation in Adam (2018)](https://proceedings.mlr.press/v80/khan18a.html)*<br/>
    Emtiyaz Khan, Mohammad, Didrik Nielsen, Voot Tangkaratt, Wu Lin, Yarin Gal, and Akash Srivastava
</p>

<h1 style="font-size: 30px">Part III: <i>Black Box VI</i></h1>

Let's get rid of mean-field assumptions and perform VI on a broader range of models and problems.

<p class="paper vi_paper" markdown="1">
    *[Black Box Variational Inference (2014)](http://proceedings.mlr.press/v33/ranganath14)*<br/>
    Ranganath, Rajesh, Sean Gerrish, and David Blei
</p>

<p class="paper vi_paper" markdown="1">
    *[Local Expectation Gradients for Black Box Variational Inference (2015)](https://proceedings.neurips.cc/paper/2015/hash/1373b284bc381890049e92d324f56de0-Abstract.html)*<br/>
    AUEB, Titsias RC, and Miguel Lázaro-Gredilla
</p>

<h1 style="font-size: 30px">Part IV: <i>Reparametrized VI</i></h1>

Here's another way to enable general VI algorithms.

<p class="paper vi_paper" markdown="1">
    *[Stochastic Backpropagation and Approximate Inference in Deep Generative Models (2014)](https://proceedings.mlr.press/v32/rezende14.html)*<br/>
    Rezende, Danilo Jimenez, Shakir Mohamed, and Daan Wierstra
</p>

<p class="paper vi_paper" markdown="1">
    *[Categorical Reparametrization with Gumbel-softmax (2017)](https://arxiv.org/abs/1611.01144)*<br/>
    Jang, Eric, Shixiang Gu, and Ben Poole
</p>

<p class="paper vi_paper" markdown="1">
    *[Quasi-Monte Carlo Variational Inference (2018)](https://proceedings.mlr.press/v80/buchholz18a.html)*<br/>
    Buchholz, Alexander, Florian Wenzel, and Stephan Mandt
</p>

<h1 style="font-size: 30px">Part V: <i>TBD</i></h1>

May or may not include *VI with other divergence measures*, *Structured VI* (normalizing flow, hierachical VI, etc.), and *amortized VI* (VAE and its variants).