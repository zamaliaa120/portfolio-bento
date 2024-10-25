<template>
  <main
    class="grid min-h-screen grid-cols-1 justify-center gap-5 bg-[#F6F5F6] p-5 md:grid-cols-2 lg:grid-cols-4"
  >
    <Profile />

    <SocialMedia />

    <Domicile />

    <About />

    <TechStack />

    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      class="flex flex-col justify-center gap-5 rounded-xl bg-white p-8 lg:col-span-1 lg:col-start-2 lg:row-span-1 lg:row-start-3"
    >
      <h1 class="text-preset-2 lg:text-preset-1">2+ Years</h1>
      <p class="text-preset-4">Experience in Web Development</p>
    </section>

    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      class="flex flex-col justify-center gap-5 rounded-xl bg-yellow-100 p-8 lg:col-start-1 lg:row-start-1 lg:justify-start"
    >
      <h1 class="text-preset-3 italic text-purple-500">Core Values</h1>
      <blockquote class="text-lg italic text-purple-500">
        "Growing, learning, and adapting – that’s how I tackle every project."
      </blockquote>
    </section>

    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      class="group row-start-3 flex cursor-pointer flex-col items-center justify-center gap-5 rounded-xl border-8 border-dashed border-yellow-500 bg-yellow-100 p-8 md:row-start-5 lg:col-start-3 lg:row-start-2"
    >
      <h1
        class="text-center text-preset-3 italic text-purple-500 lg:text-preset-2"
      >
        Dive into My Projects!
      </h1>
      <Icon
        name="hugeicons:cursor-magic-selection-01"
        size="90"
        class="animate-pulse text-purple-500 transition duration-300 group-hover:scale-125 group-hover:animate-none"
      />
    </section>

    <Education />

    <section
      class="flex flex-col justify-between gap-5 rounded-xl bg-purple-500 p-8 text-center text-white md:col-span-2 md:flex-row md:items-center lg:col-span-4"
    >
      <h1 class="text-preset-4 text-sm">
        &copy; 2024
        <a
          href="mailto:zaharaa120@gmail.com"
          class="rounded-xl text-yellow-500 hover:underline"
          >Zahara Amalia</a
        >
        All rights reserved.
      </h1>
      <h1 class="text-preset-4 text-sm">
        Contact me at
        <a
          href="mailto:zaharaa120@gmail.com"
          class="rounded-xl text-yellow-500 hover:underline"
          >zaharaa120@gmail.com</a
        >
      </h1>
    </section>
  </main>
</template>
