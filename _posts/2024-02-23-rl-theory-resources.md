---
layout: post
title:  "RL theory learning resources "
date:   2024-02-23 16:23:00 +0900
categories: research
---

See also the section [Reinforcement Learning in my post of Learning resources](https://maburto00.github.io/learning-resources#reinforcement-learning).

## Books
- [RL Theory book (Available for free from the author)](https://rltheorybook.github.io/)
- Puterman - MDPs
- [Bandit Algorithms (Available for free from the author)](https://tor-lattimore.com/downloads/book/book.pdf)
- [Morimura RL book (not as theoretical, but in the middle between theory and application)](https://bookclub.kodansha.co.jp/product?item=0000275420)

## Papers
- Q-learning convergence:
  - Jaakaal
  - Sham Kakade PhD Thesis
    
## Courses 
- [Nan Jiang RL course](https://nanjiang.cs.illinois.edu/cs443/)
  - NOTE: since this is a running course check the links inside the provided website to previous semesters for slides/notes
- [Nan Jiang Statistical RL course](https://nanjiang.cs.illinois.edu/cs542/)
  - NOTE: since this is a running course check the links inside the provided website to previous semesters for slides/notes
- [Wen Sun and Sham Kakade - Foundations of RL course](https://wensun.github.io/CS6789_fall_2021.html)

# Workshops
- [Theory of RL program](https://simons.berkeley.edu/programs/theory-reinforcement-learning)
  - [Theory of Reinforcement Learning Boot Camp](https://simons.berkeley.edu/workshops/theory-reinforcement-learning-boot-camp)
  - [Mathematics of Online Decision Making](https://simons.berkeley.edu/workshops/mathematics-online-decision-making#simons-tabs)
    - NOTE: these talks are not necessarily on RL methods but on algorithms that process data in an online manner (instead of on batches of fixed data) which is useful for example when the data is continually being updated or when it is so large that the whole batch cannot fit in the memory of the computer.
  - [Reinforcement Learning from Batch Data and Simulation](
  - [Deep Reinforcement Learning](https://simons.berkeley.edu/workshops/deep-reinforcement-learning#simons-tabs)
## YouTube
- 2021 RL Theory Course [Website](https://rltheory.github.io/) [Youtube](https://www.youtube.com/playlist?list=PLQCZ7_TRKVIx6_UVxwUBFca3cDnl9DrNW) 
- 2022 RL Theory Course [Website](https://rltheory.github.io/) [Youtube](https://www.youtube.com/playlist?list=PLQCZ7_TRKVIzODPXorEyvhCk25TlcTANC)
  - NOTE: The 2022 course uses a flip classroom setting, which means the students watched the recordings from 2021 and attended class for discussions about those contents. Therefore, I recommend watching 2021 first (although maybe watching in parallel would be even better).
- RL Theory Seminars [Website](https://sites.google.com/view/rltheoryseminars) [YouTube Channel](https://www.youtube.com/@RLtheory)
- [YOUTUBE Brunskill - A tutorial on RL 1](https://www.youtube.com/watch?v=fIKkhoI1kF4)
- [YOUTUBE Brunskill - A tutorial on RL 2](https://www.youtube.com/watch?v=8hK0NnG_DhY)

## Suggested learning roadmap
1. Prerrequisites
  1. Learn ML basics (regression; classification; NNs basics)
  2. Learn RL basics (value iteration; policy iteration; td; q-learning)
    a. Read Ch1-Ch4 of Sutton's book (do not take too long on small details for the first read)
    b. Watch Silver's RL lectures, Levine's DRL lectures, Abbeel Foundations of RL lectures 
    c. Implement Q-Learning in a simple environment (e.g. recycling robot in Sutton book; any gridworld from Sutton's book). A better suggestion is to try to replicate an experiment from Sutton's book and try to get the same discounted reward graph. You will notice you need to do a lot of debugging to make it work, and that the actual experiments have a lot of noise so that is why usually we average the results over many trials. In my opinion, only after implementing you can get a real understanding of the methods.
  3. For people with no mathematical background (my case when starting PhD), I suggest reading
    1. Real Analysis book (as much as needed; to be honest I still lack a lot of knowledge in this area). (e.g. Axler's MIRA supplementary material book which discusses supremum/infimum/ and other concepts that are used a lot in theory papers)
    2. Linear Algebra, both the matrix setting (e.g. Gilbert Strange book/course) and vector space setting (e.g. Axler's Linear Algebra Done Right)
2. RL Theory (consult these resources is any order; try to complement what you do not understand from each other resource or cited papers)
  1. Watch RL Theory Course from Szepesvari; Read Badint Algorithms sections suggested; 
  
