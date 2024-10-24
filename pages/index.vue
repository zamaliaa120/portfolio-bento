<template>
  <main
    class="grid min-h-screen grid-cols-1 justify-center gap-5 bg-[#F6F5F6] p-5 md:grid-cols-2 lg:grid-cols-4"
  >
    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      class="flex flex-col items-center justify-center gap-5 rounded-xl bg-purple-500 p-5 py-8 text-center md:col-span-2 lg:col-span-2 lg:col-start-2"
    >
      <h1 class="text-preset-2 text-white">
        Zahara Amalia <span class="text-yellow-500">Web Developer</span>
        <span class="italic"> Portfolio</span>
      </h1>
      <img
        src="/images/illustration-five-stars.webp"
        alt="Profile Zahara"
        class="w-1/2 rounded-full"
      />
      <p class="text-preset-4 text-white">
        Building stunning websites and apps.
      </p>
    </section>

    <section
      data-aos="fade-down"
      data-aos-duration="1000"
      class="flex flex-col items-center justify-center gap-5 rounded-xl bg-white p-5 lg:row-start-2 lg:items-start"
    >
      <!-- <img src="/images/illustration-five-stars.webp" alt="Project 1" /> -->
      <div class="flex items-center justify-center gap-5">
        <a
          href="https://www.linkedin.com/in/zahara-amalia/"
          class="transition duration-300 hover:scale-125"
          ><Icon name="uil:linkedin" size="50"
        /></a>
        <a
          href="https://github.com/zahara120"
          class="transition duration-300 hover:scale-125"
          ><Icon name="uil:github" size="50"
        /></a>
        <a
          href="https://read.cv/zaharaa120"
          class="transition duration-300 hover:scale-125"
          ><Icon name="uil:file" size="50"
        /></a>
      </div>
      <h1 class="text-preset-3">Social Media</h1>
      <p class="text-center lg:text-start">
        If you’re interested in working together or exploring new projects,
        let’s connect! I’m excited to collaborate and
        <span class="italic text-purple-500">create something amazing✨.</span>
      </p>
    </section>

    <section
      data-aos="fade-down"
      data-aos-duration="1000"
      class="flex flex-col items-center justify-center gap-5 rounded-xl bg-yellow-500 p-5 lg:row-start-2"
    >
      <h1 class="text-preset-3">Skills</h1>
      <div>
        <Icon name="uil:react" size="40" />
        <Icon name="uil:vuejs" size="40" />
      </div>
    </section>

    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      class="flex flex-col items-center justify-center gap-5 overflow-hidden rounded-xl bg-purple-100 p-5 text-center md:col-span-2 lg:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:items-start lg:text-start"
    >
      <h1 class="text-preset-3 lg:text-preset-2">Hi There, 👋🏻</h1>
      <p class="lg:text-preset-4">
        I'm a Web Developer with <mark>2 years</mark> of experience building
        responsive and dynamic web applications. I specialize in creating
        smooth, user-friendly interfaces using
        <mark>Vue.js, React, and Tailwind CSS</mark>.
      </p>
      <a
        href="mailto:zaharaa120@gmail.com"
        class="cursor-pointer rounded-xl bg-purple-500 p-3 text-yellow-500 transition duration-300 hover:bg-yellow-500 hover:text-purple-500"
      >
        Contact me
      </a>
    </section>

    <section
      data-aos="fade-left"
      data-aos-duration="1000"
      class="flex flex-col items-center justify-center gap-5 rounded-xl bg-purple-500 p-8 md:col-span-2 md:flex-row md:justify-evenly lg:col-span-3 lg:row-span-1"
    >
      <img
        src="/images/illustration-five-stars.webp"
        alt="project4"
        class="max-w-[227px]"
      />
      <div class="flex flex-col gap-3">
        <h1 class="text-preset-3 text-white lg:text-preset-3">
          CRM System for a Startup
        </h1>
        <p class="text-center text-white lg:text-start">
          Developed a CRM system to help startups manage customer interactions
          effectively.
        </p>
      </div>
    </section>

    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      class="flex flex-col justify-center gap-5 rounded-xl bg-white p-8 md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-1 lg:row-start-3"
    >
      <h1 class="text-preset-2 lg:text-preset-1">2+ Years</h1>
      <p class="text-preset-4">Experience in Web Development</p>
    </section>

    <section
      class="flex flex-col justify-center gap-5 rounded-xl bg-yellow-100 p-8 lg:col-start-1 lg:row-span-2 lg:row-start-1"
    >
      <h1 class="text-preset-3">
        Passionate About
        <span class="italic text-purple-500">Design & Development</span>
      </h1>
      <img
        src="/images/illustration-five-stars.webp"
        alt="Design & Development"
        class="w-1/2"
      />
    </section>

    <section
      class="flex flex-col justify-center gap-5 rounded-xl bg-yellow-500 p-8 lg:col-start-1 lg:row-span-2 lg:row-start-3"
    >
      <h1 class="text-preset-3">Continuous Learning</h1>
      <img src="/images/illustration-five-stars.webp" alt="Learning" />
      <p class="text-center lg:text-start">
        Always staying up-to-date with the latest web technologies and trends.
      </p>
    </section>

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
