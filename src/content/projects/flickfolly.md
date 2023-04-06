---
title: Flick Folly
publishDate: 2020-03-04 00:00:00
img: /assets/flick-folly.webp
img_alt: Screenshot of homepage of Flick Folly
link: https://flick-folly.vercel.app/
github: https://github.com/infiplaya/flick-folly
description: |
  I made a web app powered by OpenAI that recommends TV shows or movies.
tags:
  - React
  - Nextjs
  - OpenAI
---

## Introduction

So if you are not living in a cage, there is a big hype around AI at this point. I got inspired by [Nutlope](https://github.com/Nutlope/twitterbio) idea to create web application that uses OpenAI for generating twitter bios. But in my app I use AI to give a user 3 recommendations of TV shows or movies, based on his preferences.

### Unique features

One unique feature of my application is that a user can save recommendation he likes to a list of favorites. The favorites are kept in local storage. I have implemented this functionality with Zustand state management library.

### Dev decisions

For styling, I used Tailwind CSS which is my go to CSS framework for quickly building responsive websites. I have also used HeadlessUI library to implement accessible dropdown menus, and sidebar, that displays list of user's favorite recommendations.

## Summary

Overall, I had fun playing with this app, and I think it gives fairly decent recommendations of shows if we are specific. I am really excited to share this project with you and I hope you will give it a try! It shows why people are so hyped about AI, basically you need only OpenAI API key to build your own app powered by AI. Credits for Nutlope once again for creating the original version.