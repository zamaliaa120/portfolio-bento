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
        Zahara Amalia <span class="italic text-yellow-500">Web Developer</span>
      </h1>
      <img
        src="/images/illustration-five-stars.webp"
        alt="Profile Zahara"
        class="w-1/2 rounded-full transition duration-300 hover:scale-125"
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
          target="_blank"
          href="https://www.linkedin.com/in/zahara-amalia/"
          class="transition duration-300 hover:scale-125"
          ><Icon name="uil:linkedin" size="50"
        /></a>
        <a
          target="_blank"
          href="https://github.com/zahara120"
          class="transition duration-300 hover:scale-125"
          ><Icon name="uil:github" size="50"
        /></a>
        <a
          target="_blank"
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
      class="group relative flex items-center justify-center gap-5 overflow-hidden rounded-xl bg-yellow-500 p-5 lg:row-start-2"
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

    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      class="relative flex flex-col items-center justify-center gap-5 overflow-hidden rounded-xl bg-purple-100 p-5 text-center md:col-span-2 lg:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:items-start lg:justify-start lg:text-start"
    >
      <h1 class="text-preset-3 lg:text-preset-2">Hi There, 👋🏻</h1>
      <p class="lg:text-preset-4">
        I'm a Web Developer with <mark>2 years</mark> of experience building
        responsive and dynamic web applications. I specialize in creating
        smooth, user-friendly interfaces using
        <mark>Vue.js, React, and Tailwind CSS</mark>. Additionally, I am
        proficient in <mark>Express.js</mark> for backend development.
      </p>
      <div class="hidden lg:block">
        <img
          src="/images/blob.png"
          alt="blob"
          class="absolute -bottom-5 -right-5 -z-10 w-[250px]"
        />
        <img
          src="/images/pp1.png"
          alt="photo profile"
          class="absolute bottom-0 right-0 h-[240px] w-[220px] rounded-b-lg"
        />
        <img
          src="/images/star.png"
          alt="star"
          class="absolute bottom-10 left-10 h-[50px] w-[50px]"
        />
        <img
          src="/images/star.png"
          alt="star"
          class="absolute bottom-40 left-20 h-[30px] w-[30px]"
        />
        <img
          src="/images/star2.png"
          alt="star"
          class="absolute bottom-40 right-5 h-[30px] w-[30px]"
        />
        <img
          src="/images/star2.png"
          alt="star"
          class="absolute bottom-10 left-80 h-[50px] w-[50px]"
        />
      </div>
      <img
        src="/images/star.png"
        alt="star"
        class="absolute bottom-0 right-0 h-[150px] w-[150px] opacity-25 lg:hidden"
      />
    </section>

    <section
      data-aos="fade-left"
      data-aos-duration="1000"
      class="flex flex-col items-center justify-center gap-5 rounded-xl bg-purple-500 p-8 md:col-span-2 md:flex-row md:justify-evenly lg:col-span-3 lg:row-span-1 lg:justify-start"
    >
      <div class="flex flex-col gap-5">
        <h1 class="text-preset-3 text-white lg:text-preset-3">Tech Stack</h1>
        <div class="flex flex-wrap items-center gap-5 text-white">
          <Icon
            name="uil:vuejs"
            size="40"
            class="transition duration-300 hover:scale-125"
          />
          <Icon
            name="uil:react"
            size="40"
            class="transition duration-300 hover:scale-125"
          />
          <Icon
            name="simple-icons:tailwindcss"
            size="40"
            class="transition duration-300 hover:scale-125"
          />
          <Icon
            name="simple-icons:express"
            size="40"
            class="transition duration-300 hover:scale-125"
          />
          <Icon
            name="simple-icons:typescript"
            size="40"
            class="transition duration-300 hover:scale-125"
          />
          <Icon
            name="simple-icons:graphql"
            size="40"
            class="transition duration-300 hover:scale-125"
          />
          <Icon
            name="simple-icons:nextdotjs"
            size="40"
            class="transition duration-300 hover:scale-125"
          />
          <Icon
            name="simple-icons:mongodb"
            size="40"
            class="transition duration-300 hover:scale-125"
          />
          <Icon
            name="simple-icons:postgresql"
            size="40"
            class="transition duration-300 hover:scale-125"
          />
          <Icon
            name="simple-icons:figma"
            size="40"
            class="transition duration-300 hover:scale-125"
          />
        </div>
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
      data-aos="fade-right"
      data-aos-duration="1000"
      class="flex flex-col justify-center gap-5 rounded-xl bg-yellow-100 p-8 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:justify-start"
    >
      <h1 class="text-preset-3">
        Passionate About
        <span class="italic text-purple-500">Design & Development</span>
      </h1>
    </section>

    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      class="flex flex-col justify-center gap-5 rounded-xl bg-yellow-500 p-8 lg:col-start-1 lg:row-span-2 lg:row-start-3"
    >
      <h1 class="text-preset-3">Education 🎓</h1>
      <ul class="list-disc pl-5">
        <li>
          Graduated from
          <span class="text-purple-500">Bina Nusantara University</span>,
          majoring in <span class="text-purple-500">Computer Science</span>.
        </li>
        <li>
          Completed a
          <span class="text-purple-500"
            >Full-Stack Web Development Bootcamp</span
          >
          at
          <span class="text-purple-500"
            >Hacktiv8
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1HjZBhqRAhKuim-BXRZm5CDg_b7nzdPH3/view?usp=sharing"
              class="hover:text-black"
              ><Icon name="uil:external-link-alt" /></a></span
          >.
        </li>
      </ul>
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
