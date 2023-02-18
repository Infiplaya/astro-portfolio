---
title: Personal Blog
publishDate: 2019-10-02 00:00:00
img: /assets/stock-3.jpg
img_alt: Place where I will occasionally post some blogs.
description: |
  I build a blog and a place to post some weird things that will come to my head. Hope to make it more alive in the future.
tags:
  - Astro
  - Tailwindcss
---

As a website owner, you always want to make sure that your website is up-to-date and using the latest technologies. This includes the framework or platform that you use to build your website. In this article, we’ll be discussing the experience of rebuilding a portfolio/blog website from Next.js to Astro.

Next.js is a popular framework for building React applications, including server-side rendering and static site generation. However, Astro is a new framework that promises faster build times and better performance. So, why did we decide to switch from Next.js to Astro?

Firstly, Astro has faster build times. With Next.js, we noticed that our build times were becoming slower as our website grew larger. This is because Next.js generates every page on every build, even if the content hasn’t changed. Astro, on the other hand, only rebuilds pages that have been changed, making the build process much faster.

Secondly, Astro is more performant. Astro uses a lightweight runtime that’s smaller than Next.js, which means that our website loads faster for users. Additionally, Astro only loads the JavaScript required for each page, reducing the overall page size and improving performance.

Lastly, Astro has a simpler syntax. While Next.js is built on top of React, Astro is based on standard HTML, CSS, and JavaScript. This means that there’s less of a learning curve for developers who are familiar with web development basics. Astro also provides a component system, which makes it easy to build and reuse components across pages.

The process of migrating our website from Next.js to Astro was relatively straightforward. We started by creating a new Astro project and copying over the necessary files from our Next.js project. We then had to update the syntax and make a few minor changes to the code to align with Astro’s component system.

One thing we did notice was that there was a slight difference in the way Astro handles CSS. Astro uses a CSS-in-JS approach, which meant we had to make a few changes to our CSS files. However, the changes were minor, and we were able to adapt quickly.

In conclusion, rebuilding our portfolio/blog website from Next.js to Astro was a positive experience. The switch to Astro resulted in faster build times, improved performance, and simpler syntax. If you’re considering rebuilding your website, we highly recommend giving Astro a try.