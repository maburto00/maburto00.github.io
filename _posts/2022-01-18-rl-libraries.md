---
layout: post
title:  "Reinforcement Learning Libraries"
date:   2022-01-19 00:40:00 +0900
categories: research
---

In this post I want to list the libraries I know for Reinforcement Learning. I am currently looking for a way to accelerate my research on Reinforcement Learning, so using good libraries is essential.

For other resources (books, courses, videos, etc), please see the resources that I listed [here](https://maburto00.github.io/learning-resources#reinforcement-learning).

# List of libraries
- [**Garagee**](https://github.com/rlworkgroup/garage "Toolkit for developing and evaluating reinforcement learning algorithms"). Toolkit for developing and evaluating reinforcement learning algorithms.
- [**TF Agents**](https://www.tensorflow.org/agents). Agents is a library for reinforcement learning in Tensorflow.
- [**Dopamine**](https://github.com/google/dopamine). RL library from Google (
- [**Stable-Baselines3**](https://stable-baselines3.readthedocs.io/en/master/) - Reliable Reinforcement Learning Implementations
- [**RL Baselines3 Zoo**](https://github.com/DLR-RM/rl-baselines3-zoo): A Training Framework for Stable Baselines3 Reinforcement Learning Agents
- [**OpenAI Gym**](https://gym.openai.com/envs). Gym is a toolkit for developing and comparing reinforcement learning algorithms
- [**Unity Machine Learning Agents**](https://unity.com/products/machine-learning-agents)
- [**Ray RLlib**](https://docs.ray.io/en/master/rllib/): Industry-Grade Reinforcement Learning (distributed computing)
- [**MineRL**](https://minerl.io/): Towards AI in Minecraft
- [**PySC2**](https://github.com/deepmind/pysc2) - StarCraft II Learning Environment
- [**MiniGrid**](https://github.com/maximecb/gym-minigrid) Minimalistic Gridworld Environment
- [**Rliable**](https://github.com/google-research/rliable) - Reliable evaluation on reinforcement learning and machine learnings benchmarks.

## For contextual bandits
- Mentioned in [^1]:
  - [**ReAgent (previously Horizon)**](https://github.com/facebookresearch/ReAgent)
  - **Decision Service** (by Microsoft, uses Vowpal Wabbit internally. Sadly, I could not find the source code link)
  - [**Ray RLlib**](https://docs.ray.io/en/master/rllib/): Industry-Grade Reinforcement Learning (distributed computing)
- [**David Cortes - Contextual Bandits**](https://github.com/david-cortes/contextualbandits/)
- [**HCDM - BanditLib**](https://github.com/HCDM/BanditLib)
- [**Vowpal Wabbit**](https://vowpalwabbit.org/)

## References:
[^1]: Karampatziakis, Nikos, Sebastian Kochman, Jade Huang, Paul Mineiro, Kathy Osborne, and Weizhu Chen. “Lessons from Contextual Bandit Learning in a Customer Support Bot.” ArXiv:1905.02219 [Cs, Stat], June 18, 2019. http://arxiv.org/abs/1905.02219.
[^2]: Phil Winder, [A Comparison of Reinforcement Learning Frameworks: Dopamine, RLLib, Keras-RL, Coach, TRFL, Tensorforce, Coach and More.](https://winder.ai/a-comparison-of-reinforcement-learning-frameworks-dopamine-rllib-keras-rl-coach-trfl-tensorforce-coach-and-more/#google-dopamine-https-github-com-google-dopamine)
