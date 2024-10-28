<template>
  <div
    class="grid min-h-screen grid-cols-1 justify-center gap-5 overflow-hidden bg-purple-500 p-5 md:grid-cols-2 lg:grid-cols-4"
  >
    <div class="flex w-full flex-col gap-4 lg:col-span-2">
      <NuxtLink
        to="/"
        data-aos="zoom-in"
        data-aos-duration="1000"
        class="group flex max-h-16 items-center gap-5 rounded-xl bg-yellow-100 p-8"
      >
        <Icon
          name="material-symbols:keyboard-backspace-rounded"
          size="50"
          class="text-purple-500 transition duration-300 group-hover:scale-125"
        />

        <span
          class="text-center text-preset-4 italic text-purple-500 transition duration-300 group-hover:underline lg:text-preset-3"
        >
          Back to Home
        </span>
      </NuxtLink>

      <section
        data-aos="zoom-in"
        data-aos-duration="1000"
        class="flex flex-1 flex-col justify-center gap-5 rounded-xl bg-yellow-100 p-4 lg:justify-start"
      >
        <h1 class="text-preset-3 italic text-purple-500 lg:text-preset-2">
          Venteny Management System (<span class="text-yellow-500">VMS</span>)
        </h1>
        <p class="text-purple-500 lg:text-preset-4">
          Website to manage company registration, loans, financial reports, used
          by all divisions such as BD, finance, collection, and legal.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <NuxtImg
            class="rounded-xl drop-shadow-lg"
            src="/images/project/vms-home.png"
            alt="landing page"
          />
          <NuxtImg
            class="rounded-xl drop-shadow-lg"
            src="/images/project/vms-form.png"
            alt="landing page"
          />
        </div>
        <span class="text-preset-4 text-sm italic text-purple-500"
          >Tools : Vue js, Tailwind, Pinia ,Json Web Token (JWT), Leaflet</span
        >
      </section>
    </div>

    <div class="grid grid-cols-2 gap-4 lg:col-span-2">
      <section
        data-aos="zoom-in"
        data-aos-duration="1000"
        class="flex flex-col justify-center gap-5 rounded-xl bg-yellow-100 p-4 lg:justify-start"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-preset-3 italic text-purple-500">Quick Recipe Pro</h1>
          <a
            href="https://quick-recipe-pro.web.app"
            class="group"
            target="_blank"
          >
            <Icon
              name="uil:external-link-alt"
              size="30"
              class="text-purple-500 transition duration-300 group-hover:scale-125"
            />
          </a>
        </div>
        <div class="flex items-center gap-2 overflow-auto">
          <NuxtImg
            class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
            src="/images/project/qrp-1.png"
            alt="landing page"
          />
          <NuxtImg
            class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
            src="/images/project/qrp-2.png"
            alt="landing page"
          />
          <NuxtImg
            class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
            src="/images/project/qrp-3.png"
            alt="landing page"
          />
          <NuxtImg
            class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
            src="/images/project/qrp-4.png"
            alt="landing page"
          />
        </div>
        <span class="text-preset-4 text-sm italic text-purple-500"
          >Tech stack: React, Next js, MongoDB, Cron-job</span
        >
      </section>
      <section
        data-aos="zoom-in"
        data-aos-duration="1000"
        class="flex flex-col justify-center gap-5 rounded-xl bg-yellow-100 p-4 lg:justify-start"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-preset-3 italic text-purple-500">News Portal﻿</h1>
          <a href="https://zrnews.web.app/" class="group" target="_blank">
            <Icon
              name="uil:external-link-alt"
              size="30"
              class="text-purple-500"
            />
          </a>
        </div>
        <div class="flex items-center gap-2 overflow-auto">
          <NuxtImg
            class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
            src="/images/project/np-1.png"
            alt="landing page"
          />
          <NuxtImg
            class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
            src="/images/project/np-2.png"
            alt="landing page"
          />
          <NuxtImg
            class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
            src="/images/project/np-3.png"
            alt="landing page"
          />
        </div>
        <span class="text-preset-4 text-sm italic text-purple-500"
          >Tech stack: React, Next js, MongoDB, Cron-job</span
        >
      </section>
      <section
        data-aos="zoom-in"
        data-aos-duration="1000"
        class="col-span-2 flex flex-col justify-center gap-5 rounded-xl bg-yellow-100 p-4 lg:justify-start"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-preset-3 italic text-purple-500">ParkMate - CMS</h1>
          <a
            href="https://parkmate-cms.vercel.app"
            class="group"
            target="_blank"
          >
            <Icon
              name="uil:external-link-alt"
              size="30"
              class="text-purple-500"
            />
          </a>
        </div>
        <div class="flex items-center gap-2 overflow-auto">
          <NuxtImg
            class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
            src="/images/project/parkmate.png"
            alt="landing page"
          />
          <NuxtImg
            class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
            src="/images/project/parkmate-2.png"
            alt="landing page"
          />
          <NuxtImg
            class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
            src="/images/project/parkmate-3.png"
            alt="landing page"
          />
        </div>
        <span class="text-preset-4 text-sm italic text-purple-500"
          >Tech stack: React, Next js, MongoDB, Cron-job</span
        >
      </section>
    </div>

    <section
      data-aos="zoom-in"
      data-aos-duration="1000"
      class="flex flex-col justify-center gap-5 rounded-xl bg-yellow-100 p-4 lg:justify-start"
    >
      <h1 class="text-preset-3 italic text-purple-500">
        <h1 class="text-preset-3 italic text-purple-500">
          Attendance (Web View)
        </h1>
      </h1>
      <p class="text-sm text-purple-500">
        This website is specifically designed to enable companies or
        organizations to efficiently and accurately record employee attendance.
      </p>
      <div class="grid grid-cols-3 gap-2">
        <img
          class="rounded-xl drop-shadow-lg"
          src="/images/project/Attendance-1.png"
          alt="landing page"
        />
        <img
          class="rounded-xl drop-shadow-lg"
          src="/images/project/Attendance-2.png"
          alt="landing page"
        />
        <img
          class="rounded-xl drop-shadow-lg"
          src="/images/project/Attendance-3.png"
          alt="landing page"
        />
      </div>
      <span class="text-preset-4 text-sm italic text-purple-500"
        >Tools : Nuxt js, Vue js, Tailwind</span
      >
    </section>
    <section
      data-aos="zoom-in"
      data-aos-duration="1000"
      class="col-span-1 flex flex-col justify-center gap-5 rounded-xl bg-yellow-100 p-4 lg:col-span-2 lg:justify-start"
    >
      <h1 class="text-preset-3 italic text-purple-500">Web Company Profile﻿</h1>
      <p class="text-sm text-purple-500">
        A website designed to provide comprehensive information about the
        company, including stock details, articles, products, and contact
        information.
      </p>
      <div class="flex items-center gap-2 overflow-auto">
        <img
          class="w-full rounded-xl drop-shadow-lg lg:w-4/5"
          src="/images/project/gcp-1.png"
          alt="landing page"
        />
        <img
          class="w-full rounded-xl drop-shadow-lg lg:w-4/5"
          src="/images/project/gcp-2.png"
          alt="landing page"
        />
        <img
          class="w-full rounded-xl drop-shadow-lg lg:w-4/5"
          src="/images/project/gcp-3.png"
          alt="landing page"
        />
      </div>
      <span class="text-preset-4 text-sm italic text-purple-500"
        >Tools : Nuxt js, Vue js, Tailwind</span
      >
    </section>
    <section
      data-aos="zoom-in"
      data-aos-duration="1000"
      class="flex flex-col justify-center gap-5 rounded-xl bg-yellow-100 p-4 lg:justify-start"
    >
      <div class="flex items-center justify-between">
        <h1 class="text-preset-3 italic text-purple-500">ParkMate – Mobile</h1>
        <a
          href="https://github.com/Parkmates/mobile.git"
          class="group"
          target="_blank"
        >
          <Icon
            name="uil:external-link-alt"
            size="30"
            class="text-purple-500"
          />
        </a>
      </div>
      <div class="flex items-center gap-2 overflow-auto">
        <NuxtImg
          class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
          src="/images/project/pm-mbl-1.jpg"
          alt="landing page"
        />
        <NuxtImg
          class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
          src="/images/project/pm-mbl-2.jpg"
          alt="landing page"
        />
        <NuxtImg
          class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
          src="/images/project/pm-mbl-3.jpg"
          alt="landing page"
        />
        <NuxtImg
          class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
          src="/images/project/pm-mbl-4.jpg"
          alt="landing page"
        />
        <NuxtImg
          class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
          src="/images/project/pm-mbl-5.jpg"
          alt="landing page"
        />
        <NuxtImg
          class="w-full rounded-xl drop-shadow-lg lg:w-1/2"
          src="/images/project/pm-mbl-6.jpg"
          alt="landing page"
        />
      </div>
      <span class="text-preset-4 text-sm italic text-purple-500"
        >Tech stack: React Native, MongoDB, Midtrans</span
      >
    </section>
  </div>
</template>
