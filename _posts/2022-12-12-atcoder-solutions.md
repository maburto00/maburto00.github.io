---
layout: post
title:  "Atcoder - Solutions to some problems and references"
date:   2022-12-12 13:14:00 +0900
categories: atcoder
---

The idea is to write here brief explanation of the solutions of some of AtCoder problems. The goal is to have a reference for the future of past problems, and also improve my own understanding by writing down the explanations.

**Contents**
* TOC
{:toc}


## DP educational contest
[https://atcoder.jp/contests/dp/tasks](https://atcoder.jp/contests/dp/tasks)

### A - Frog 1
### B - Frog 2
### C - Vacation
### D - Knapsack 1
### E - Knapsack 2
### F - LCS
### G - Longest Path
### H - Grid 1
### I - Coins
### J - Sushi
This problem was specially challenging for me, so I gave up after several days and saw the editorial. I found out that I was getting close to the solution, but the fact that I used an array instead of separate variables got in the way to arrive to the correct dp formula. In particular, I was trying to use an array with entries c[0],c[1],c[2],c[3], but using c1, c2, c3 is good enough and makes the code more clear since we can write the formula for each case instead of using a for loop (we can do same with an array, but with an array we tend to try to write a loop)

Lesson learned: I will try to set a fixed time to try to solve the problems and then if I cannot solve just look at the editorial. I think I need to get used to this kind of problems, so trying hard to solve is good, but also advancing to other problems may be more productive. I am also considering how to "review" the previously solved problems, again, I think there is some "muscle" memory that needs to be developed by pure repetition.

## References
- [YOUTUBE AtCoderで水色になりました！ここまでの戦略・練習量・知識を紹介](https://www.youtube.com/watch?v=8YW5g2f8GKA)
- [YOUTUBE 未経験者のアナタもハマる？競技プログラミング「AtCoder」って何だ？【橋本幸治の理系通信】（2021年3月19日）](https://www.youtube.com/watch?v=WGNQrH0AV2k)
