---
layout: post
title:  "QR Code generation for URLs"
date:   2021-08-14 04:40:00 +0900
categories: personal
comments: true
---

The easiest way I found to generate a QR Code for an URL is using the google api like this (substitute RESOLUTION and URL for your desired values):

  https://chart.googleapis.com/chart?chs=RESOLUTION&cht=qr&choe=UTF-8&chl=URL
  
For example, I can generate a 75 by 75 pixels QR Code for my personal website:

  https://chart.googleapis.com/chart?chs=75x75&cht=qr&choe=UTF-8&chl=https://maburto00.github.io/
   
References:
- https://www.reddit.com/r/LifeProTips/comments/2v8g10/lpt_make_your_own_qr_codes/
