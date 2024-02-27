---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'BLOG101'
  text: ''
  tagline: '通过搭建博客来掌握学习计算机科学的基本技能。'
  image:
    src: /logo.webp
    alt: BLOG101
  actions:
    - theme: brand
      text: 开始学习
      link: /course/introduce

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
:root {
  

  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #90b3ed 30%, #aeefe2);

  --vp-home-hero-image-background-image: linear-gradient(135deg, #90b3ed 50%, #aeefe2 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
