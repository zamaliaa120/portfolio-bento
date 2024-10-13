<template>
  <!-- <div class="grid grid-cols-2 gap-2">
    <h1 class="text-yellow-500 text-preset-1">
      Lorem ipsum dolor sit amet consectetuer adipiscing
    </h1>
    <h1 class="text-purple-500 text-preset-2">
      Lorem ipsum dolor sit amet consectetuer adipiscing
    </h1>
    <h1 class="text-yellow-500 text-preset-3">
      Lorem ipsum dolor sit amet consectetuer adipiscing
    </h1>
    <h1 class="text-purple-500 text-preset-4">
      Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </h1>
  </div> -->
  <div class="flex flex-col gap-8 m-4">
    <div
      class="bg-purple-500 text-white rounded-xl px-10 py-8 flex flex-col items-center justify-center gap-4"
    >
      <div class="text-center">
        <h1 class="text-white text-preset-2 text-[46px]">
          Social Media <span class="text-yellow-500">10x</span> Faster with AI
        </h1>
      </div>
      <div class="flex flex-col items-center justify-center gap-2">
        <img src="/img/five-stars.jpg" class="w-[192px]" alt="" />
        <h2 class="text-white text-preset-4">Over 4,000 5-star reviews</h2>
        <!-- <NuxtImg src="/img/five-stars.jpg" /> -->
      </div>
    </div>
    <div
      class="bg-white text-black rounded-xl p-4 flex flex-col items-center justify-center gap-5"
    >
      <div class="flex items-center justify-between gap-4 w-full">
        <div
          class="flex items-center rounded-full bg-white drop-shadow-2xl p-2 gap-2 w-full"
        >
          <NuxtImg class="w-[50px]" src="/img/logo-x.svg" alt="logo-x" />
          <div class="flex flex-col gap-2">
            <h1 class="text-black text-preset-4 text-[14px]">@YourCo</h1>
            <h5 class="text-black text-preset-4 text-[11px]">8K Followers</h5>
          </div>
        </div>
        <div
          class="flex items-center rounded-full bg-white drop-shadow-2xl p-2 gap-2 w-full"
        >
          <NuxtImg class="w-[50px]" src="/img/logo-ig.svg" alt="logo-ig" />
          <div class="flex flex-col gap-2">
            <h1 class="text-black text-preset-4 text-[14px]">@YourCo</h1>
            <h5 class="text-black text-preset-4 text-[11px]">8K Followers</h5>
          </div>
        </div>
      </div>
      <h1 class="text-black text-preset-3 text-[26px]">
        Manage multiple accounts and platforms.
      </h1>
    </div>
    <div
      class="bg-yellow-500 pb-0 text-black rounded-xl p-4 flex flex-col items-center justify-center gap-2"
    >
      <h1 class="text-black text-2xl text-preset-3">
        Maintain a consistent posting schedule.
      </h1>
      <NuxtImg
        src="/img/calendar.svg"
        alt="Calendar illustration for posting schedule"
        class="w-full"
      />
    </div>
    <div
      class="bg-purple-100 text-black rounded-xl p-4 flex flex-col items-center justify-center gap-4"
    >
      <h1 class="text-black text-2xl text-preset-3">
        Schedule to social media.
      </h1>
      <NuxtImg
        src="/img/statistic.svg"
        alt="Calendar illustration for posting schedule"
        class="w-full"
      />
      <p class="text-preset-4 text-center">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
    <div
      class="bg-purple-500 text-black rounded-xl p-4 flex flex-col items-center justify-center gap-4"
    >
      <NuxtImg
        src="/img/statistic.svg"
        alt="Calendar illustration for posting schedule"
        class="w-full"
      />
      <h1 class="text-white text-center text-3xl text-preset-2">
        Grow followers with non-stop content.
      </h1>
    </div>
    <div class="bg-white text-black rounded-xl p-4 flex flex-col gap-4">
      <h1 class="text-black text-5xl text-preset-2">>56%</h1>
      <p class="text-black text-preset-4">faster audience growth</p>
      <NuxtImg src="/img/avatar.svg" alt="avatar" class="w-1/2" />
    </div>
    <div class="bg-yellow-100 text-black rounded-xl p-4 flex flex-col gap-4">
      <p class="text-black text-3xl text-preset-2">
        Create and schedule content
        <span class="italic text-purple-500">quicker.</span>
      </p>
      <NuxtImg src="/img/button.svg" alt="button" class="w-1/2" />
    </div>
    <div class="bg-yellow-500 text-black rounded-xl p-4 flex flex-col gap-4">
      <h1 class="text-black text-3xl text-preset-2">
        Write your content using AI.
      </h1>
      <NuxtImg src="/img/chat.svg" alt="chat" class="w-full" />
    </div>
  </div>
</template>
