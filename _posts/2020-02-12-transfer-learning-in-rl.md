---
layout: post
title:  "Transfer Learning in Reinforcement Learning"
date:   2020-02-12 22:31:00 +0900
categories: research
---

# Purpose 

The purpose of this post is to define what we mean by Transfer Learning in Reinforcement Learning. This will in turn help me decide the type of transfer learning that I should focus on (at least at first) and which would benefit most from my research on task similarity.

# Definition

Transfer Learning can be defined as the set of techniques that makes learning "better" by transfering "something" learnt from one task to another. What we mean by "better" and by "something" depends largely on the area that we apply the transfer (e.g. Supervised Learning, Reinforcement Learning).

For Reinforcement Learning, there have been some works trying to formalize the concept of transfer and categorize the different possible types of transfer. The first work to attempt this was done in 2009 by Taylor and Stone (Taylor and Stone, 2009) where they give a detailed categorization. A more recent study was due to (Lazaric 2012), which builds on the previous one.

The survey by (Taylor and Stone, 2009), although offering a very careful study of many aspects of transfer learning, it is seems too detailed and specific to the algorithms they were surveying. These are the "dimensions" that they identified for transfer, however I exclude some details of each dimension for brevity.
* Allowed task differences (on actions, states, rewards, etc)
* Source task selection (all-used, one-used, human-selected, library-organized, etc)
* Transferred knowledge (actions, task features, task model, policy, shaping reward, etc)
* Task mappings (none, learned-by-experience, human-mapped, etc)
* Allowed learners (bayesian, batch, hierarchical, linear programming,  relational RL, Temporal-Difference Learning, etc) 
* TL metrics (asymtotic performance increase, jumpstart demonstrated, total reward increased, task learning time reduced)

The work  due to (Lazaric 2012) makes a more broad classification than that of Taylor and Stone, which in my opinion makes it easier to grasp. Following is the list of "dimensions" that Lazaric identifies for transfer.
* Settings
	* source to target with fixed domain
	* across tasks with fixed domain
	* across tasks with different domain
* Knowledge
	* instance tr
	* representation tr
	* parameter tr
* Objective (analog to TL metrics from Taylor)
	* learning speed improvement
	* asymptotic improvement (improve approx. error of the func. approx.)
	* jumpstart improvement.

# Relevance to research

As noted by (Glatt et al., 2016), the effectiveness of transfer is highly dependant on task similarity, but when done correctly, greatly improves learning; when done incorrectly, negative learning[^1] occurs. Glatt's experiment, in terms of Larazic classification, talks about transfer learning where:
* Setting: source to target with fixed domain
* Knowledge: representation/parameter transfer
* Objective: asymptotic improvement (improve approx. error of the func. approx.)

I think it would be beneficial to try to replicate the results of (Glatt et al., 2016) to understand how they measure the effect of task similarity on the transfer.

UPDATE: The measure is kind of naive. They compare the transfer when they tasks are the same, when they are "similar" and when they are "different", deciding that visually.

# Conclusion
Using Lazaric taxonomy, the kind of transfer learning that would be most relevant to me would be:
* Setting: source to target with fixed domain
* Knowledge: representation/parameter transfer
* Objective: asymptotic improvement (improve approx. error of the func. approx.)

Some next steps I identify are:
* Define simplest test environment for this kind of TL (e.g. gridworld) and also identify which environment from Atari Learning Environment could help (especially for replicating (Glatt et al., 2016))

# References:
1. Glatt, R., Da Silva, F. L., & Costa, A. H. R. (2016). Towards Knowledge Transfer in Deep Reinforcement Learning. 5th Brazilian Conference on Intelligent Systems (BRACIS), 91–96.
2. Pan, S. J., & Yang, Q. (2010). A survey on transfer learning. IEEE Transactions on Knowledge and Data Engineering, 22(10), 1345–1359.
3. Taylor, M. E., & Stone, P. (2009). Transfer Learning for Reinforcement Learning Domains : A Survey. Journal of Machine Learning Research, 10, 1633–1685.
4. Lazaric, A. (2012). Transfer in reinforcement learning: A framework and a survey. In Adaptation, Learning, and Optimization.


# Footnotes:
[^1]: Negative transfer. The transfer affects performance negatively.  
