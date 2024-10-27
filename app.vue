<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import "~/assets/styles/global.css";
// useHead({
//   title: "Portfolio | Zahara Amalia",
//   meta: [
//     {
//       name: "description",
//       content:
//         "Explore the portfolio of Zahara Amalia, showcasing skills, projects, and achievements in web development.",
//     },
//     {
//       name: "keywords",
//       content: "Zahara Amalia, portfolio, web development, projects, skills",
//     },
//     { name: "author", content: "Zahara Amalia" },
//   ],
//   script: [
//     {
//       src: "https://www.googletagmanager.com/gtag/js?id=G-TR7LBHJG4L",
//       async: true,
//     },
//     {
//       innerHTML: `
//         window.dataLayer = window.dataLayer || [];
//         function gtag(){ dataLayer.push(arguments); }
//         gtag('js', new Date());
//         gtag('config', 'G-TR7LBHJG4L');
//       `,
//       type: "text/javascript",
//     },
//     {
//       innerHTML: "console.log('Welcome to Zahara Amalia's Portfolio')",
//       type: "text/javascript",
//     },
//   ],
//   bodyAttrs: {
//     class: "portfolio-page",
//   },
// });

useHead({
  title: "Portfolio | Zahara Amalia",
  meta: [
    {
      name: "description",
      content:
        "Explore the portfolio of Zahara Amalia, showcasing skills, projects, and achievements in web development.",
    },
    {
      name: "keywords",
      content: "Zahara Amalia, portfolio, web development, projects, skills",
    },
    { name: "author", content: "Zahara Amalia" },
    { name: "robots", content: "index, follow" },
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-TR7LBHJG4L",
      async: true,
    },
  ],
  bodyAttrs: {
    class: "portfolio-page",
  },
});

if (process.client) {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-TR7LBHJG4L");
}
</script>
