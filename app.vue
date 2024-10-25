<template>
  <html>
    <head>
      <meta
        name="google-site-verification"
        content="Q7WWwneqokVhPXj3-uFaeoLjBPCGuWnyVSl1RSIpS1U"
      />
    </head>
    <body>
      <NuxtPage />
    </body>
  </html>
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
  ],
  bodyAttrs: {
    class: "portfolio-page",
  },
  script: [
    { innerHTML: "console.log('Welcome to Zahara Amalia's Portfolio')" },
  ],
});
</script>
