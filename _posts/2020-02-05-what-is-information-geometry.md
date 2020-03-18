---
layout: post
title:  "What is Information Geometry?"
date:   2020-02-05 15:13:00 +0900
categories: research
---

The motivation for this post is to  briefly explain what Information Geometry is and how it can help me on my research for defining task similarity between deep reinforcement learning tasks.  

# Definition 

A formal definition of Information Geometry is that it defines a Riemannian[^1] metric[^2] with dually coupled affine connections in a manifold (generalization of curve and surface) of probability distributions. More informally, it is the application of concepts of differential geometry to probability theory and statistics, and more generally, to disciplines related to "Information Sciences". For example, in the case of probability distributions, they can be seen as manifolds and their geometrical properties analyzed. 

# Applications

Information Geometry was first successfully applied to the study of the exponential family of probability distributions[^3], which includes many known distributions (e.g. discrete probability distributions, gaussian distributions, multinomial distributions, gamma distributions). An important result of this study was that the unique invariant Riemannian metric for this manifold turned out to be the Fisher Information matrix.

Another important result is on Natural Policy Gradient [8][9], where Information Geometry validates theoretically that the natural gradient is the optimal direction for learning.

# Relevance to my research

Information Geometry may not be necessary to understand concepts like Natural Gradient or Fisher Information Matrix [4], but it is useful for giving a theoretical foundation to these concepts. In my case, I could extend some results to the field of Reinfocement learning by studying either a policy or a Q-value function parametrized by a Neural Network, analyzing this neural networks as manifolds. A first direction would be to study if previous results remain consistent for the Reinforcement Learning case. 

Some previous work using concepts from Riemmanian Geometry has been done by Sridhar Mansehavfor for Transfer Learning on Reinforcement Learning [5] and Supervised Learning [10], which is theoretically grounded but has practical application. 

# Conclusions and further questions
In conclusion, I think studying Transfer Learning from the perspective of Information Geometry is a good first step for my research. Later it may be helpful to study deeper on concepts from Differential Geometry, Manifolds and Information Theory as I see fit. 

I think the most important next steps would be:
- Try to find a formalization of policy or Q-values in NNs as manifolds, or propose one (from the work on neuro-manifolds)
- To replicate the results from Mahadevan [10][11] to see the advantages and limitations. 

# References:  
1. S. Amari, Information Geometry and Its Applications, 1st ed. Springer Publishing Company, Incorporated, 2016. 
1. B. Belousov and J. Peters, “Entropic regularization of Markov decision processes,” Entropy, vol. 21, no. 7, Jul. 2019. 
1. F. Nielsen, “An elementary introduction to information geometry,” Aug. 2018. 
1. “Applications of Information Geometry?” [Online]. Available: https://www.reddit.com/r/math/comments/147ize/1. tions_of_information_geometry/. 
1. J. Peters and S. Schaal, “Reinforcement learning of motor skills with policy gradients,” Neural Networks, vol. 21, pp. 682–697, 2008. 
1. “Riemannian manifold.” [Online]. Available: https://en.wikipedia.org/wiki/Riemannian_manifold. 
1. “Metric tensor.” [Online]. Available: https://en.wikipedia.org/wiki/Metric_tensor. 
1. S. Kakade, “A natural policy gradient,” in Advances in Neural Information Processing Systems, 2002. 
1. J. Peters and S. Schaal, “Reinforcement learning of motor skills with policy gradients,” Neural Networks, vol. 21, no. 4, pp. 682–697, 2008. 
1. Mahadevan, S., & Ferguson, K. (2006). Proto-transfer Learning in Markov Decision Processes Using Spectral Methods. Computer Science Department Faculty Publication Series. Retrieved from https://scholarworks.umass.edu/cs_faculty_pubs
1. Mahadevan, S., Mishra, B., & Ghosh, S. (2019). A unified framework for domain adaptation using metric learning on manifolds. Lecture Notes in Computer Science (Including Subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics), 11052 LNAI, 843–860. https://doi.org/10.1007/978-3-030-10928-8_50

# Footnotes: 
[^1]: What is a Riemmanian structure (manifold)? A Riemmanian manifold [6] is a smooth manifold equipped with a Riemannian metric tensor. A metric tensor is said to be Riemmanian if for every pair of tangent vectors, it assigns a positive value to them (this is also called a positive-definite metric tensor). This gives the possibility of having distance functions. 

[^2]: What is a  metric tensor? A metric tensor [7] defines the inner product and enables us to measure angles and distances between vectors tangent to the manifold at a point in the manifold. It generalizes the concept of dot product in the euclidean space. 

[^3]: Exponential family probability density function: p(x,&theta;)= exp{&theta;<sup>i</sup> h<sub>i</sub>(x) + k(x) - &phi;(&theta;)} where x is a random variable, &theta; is an n-dimensional vector parameter of the distributuion, h<sub>i</sub>(x) are n linearly independent functions of x , k(x) is a function of x, and &phi; is the normalization factor, and using the Einstein summation convention. [1]


