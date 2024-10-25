<template>
  <section
    data-aos="fade-down"
    data-aos-duration="1000"
    class="group relative flex items-center justify-center gap-5 overflow-hidden rounded-xl bg-purple-100 p-5 lg:col-start-1 lg:row-start-2"
    role="region"
    aria-labelledby="location-title"
  >
    <img
      src="/images/maps.png"
      alt="Background map of Indonesia"
      class="absolute z-0 opacity-50 transition duration-300 group-hover:opacity-25"
    />
    <a
      target="_blank"
      href="https://maps.app.goo.gl/5HnSAiXt9sy5NKfd9"
      class="z-10 flex items-center gap-2 transition duration-300 group-hover:text-purple-500"
      aria-label="View location on Google Maps"
    >
      <Icon name="uil:map-marker" size="50" />
      <h1 id="location-title" class="text-preset-3">Indonesia, Jakarta</h1>
    </a>
  </section>
</template>
