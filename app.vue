<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import "~/assets/styles/global.css";

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
    { property: "og:title", content: "Zahara Amalia - Portfolio" },
    {
      property: "og:description",
      content:
        "Discover Zahara Amalia's portfolio, including projects in web development, mobile apps, and CMS systems.",
    },
    { property: "og:image", content: "/images/thumbnail.png" },
    { property: "og:url", content: "https://portfolio.zahara.id" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Zahara Amalia - Project Portfolio" },
    {
      name: "twitter:description",
      content: "Showcasing Zahara Amalia's projects and technical skills.",
    },
    { name: "twitter:image", content: "/images/thumbnail.png" },
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
