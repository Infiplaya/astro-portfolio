---
title: Cryptosito
publishDate: 2023-03-04 00:00:00
img: /assets/cryptosito.webp
img_alt: Screenshot of homepage of Cryptosito
link: https://cryptosito.vercel.app/
github: https://github.com/infiplaya/cryptosito
description: |
  I developed fullstack coinmarket application that displays informations about cryptocurrencies.
tags:
  - Fullstack
  - React
  - Nextjs
---

## Introduction
Cryptosito is an app I built using Nextjs and React, with a focus on providing users with valuable data about the crypto market. As a full-stack application, it includes a table of coins, global information about the market, and categories such as NFTs, derivatives, and indexes. I created it using a T3 stack which is a great way to create a fully type-safe fullstack applications with Nextjs, tRPC and Prisma.

### Challenges
One of the most challenging parts of building Cryptosito was implementing the backend with Prisma and Trpc. As a first-time user of these technologies, I had a lot to figure out and learn. Although the database relationships are not perfect yet, I'm continuously working to improve them.

### Unique features
One unique feature of the app is the ability to add coins to a watchlist table. Users can keep track of their favorite cryptocurrencies, making it easier to monitor their progress over time. Additionally, users can simulate buying a coin by entering the amount of shares they would like to purchase. The app calculates the resulting shares in their portfolio, allowing users to get a feel for how their investments might perform.

Another exciting feature is the community section, where authenticated users can write tweet-style posts about the crypto market. This feature encourages engagement and discussion among users, providing a space for them to share their insights and opinions.

### Dev decisions
For styling, I drew inspiration from CoinMarket, but used TailwindCSS to create a unique look and feel for Cryptosito. I also used Incremental Static Regeneration for fast, revalidated pages, ensuring a smooth user experience.

To ensure fully typesafe data, I used Zod to create schemas and parse them. This helped me ensure that the data I was collecting and using was of the highest quality, providing users with the most accurate information possible.

I've also used Prisma for ORM database. It is fairly easy to use and have well structured documentation. Also I used tRPC for building typesafe API's. To be honest I wasn't really good at it at first. I thought, okay what the hell is that? I didn't realize the use-case of this technologies. But time passed, I googled, I watched videos, I tried stuff, I asked for help, refactor stuff, and it's working!

## Summary
Overall, Cryptosito is a valuable tool for anyone interested in the crypto market. With its continuously evolving database and unique features, it has the potential to become a go-to resource for crypto enthusiasts. I'm excited to continue working on it, improving its functionality and adding new features to make it even more valuable for users.
