<script setup lang="ts">
definePageMeta({
  title: "Zahara Amalia",
  description: "Zahara Amalia's Portfolio",
});
</script>

<template>
  <main
    class="grid min-h-screen grid-cols-1 justify-center gap-5 bg-[#F6F5F6] p-5 md:grid-cols-2 lg:grid-cols-4"
  >
    <Profile />

    <SocialMedia />

    <Domicile />

    <PersonalInfo />

    <TechStack />

    <Experience />

    <Quote />

    <Project />

    <!-- <Education /> -->
    <DownloadCV />

    <Footer />
  </main>
</template>
