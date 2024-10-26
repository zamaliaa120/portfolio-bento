<template>
  <section
    @click="downloadCV"
    data-aos="fade-right"
    data-aos-duration="1000"
    class="group flex cursor-pointer flex-col items-center justify-center gap-5 rounded-xl border-8 border-dashed border-purple-500 bg-yellow-500 p-8 lg:col-start-1 lg:row-span-2 lg:row-start-3"
  >
    <h1
      class="text-center text-preset-3 italic text-purple-500 lg:text-preset-2"
    >
      Curious About My Work? <span class="underline">Download</span> My CV!
    </h1>
    <Icon
      name="hugeicons:download-04"
      size="90"
      class="animate-pulse text-purple-500 transition duration-300 group-hover:scale-125 group-hover:animate-none"
    />
  </section>
</template>

<script setup>
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/CV - Zahara Amalia.pdf";
  link.download = "CV - Zahara Amalia.pdf";
  link.click();
};
</script>
