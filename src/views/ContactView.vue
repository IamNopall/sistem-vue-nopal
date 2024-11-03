<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <section class="mt-44 flex flex-col items-center text-base text-center text-gray-800 max-w-[749px] mx-auto my-10">
      <header>
        <h2 class="font-black leading-none uppercase tracking-[3px]">
          Contact us
        </h2>
        <h3 class="mt-3 text-5xl font-bold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
          Let's Start a Conversation
        </h3>
      </header>
      <p class="z-10 self-stretch mt-6 w-full leading-7 text-zinc-500 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
    </section>


    <section class="px-8 py-12 w-full bg-amber-300 max-w-[768px] mx-auto my-10">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-6/12 max-md:w-full">
          <div class="flex flex-col grow items-start text-xl leading-relaxed text-neutral-600 max-md:mt-10">
            <h2 class="text-sm leading-none opacity-60">Working hours</h2>
            <hr class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
            <p class="mt-4 font-bold">Monday To Friday</p>
            <time datetime="09:00-20:00" class="font-bold">9:00 AM to 8:00 PM</time>
            <p class="text-base leading-7 opacity-60">Our Support Team is available 24/7</p>
          </div>
        </article>

        <article class="flex flex-col w-6/12 max-md:w-full">
          <div class="flex flex-col items-start text-neutral-600 max-md:mt-10">
            <h2 class="text-sm leading-none opacity-60">Contact Us</h2>
            <hr class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
            <a href="tel:02079932905" class="mt-4 text-xl font-bold leading-relaxed hover:underline focus:outline-none focus:ring-2 focus:ring-neutral-600" tabindex="0">020 7993 2905</a>
            <a href="mailto:hello@finsweet.com" class="text-base leading-7 opacity-60 hover:underline focus:outline-none focus:ring-2 focus:ring-neutral-600" tabindex="0">hello@finsweet.com</a>
          </div>
        </article>
      </div>
    </section>

    <div class="mt-8 max-w-full w-[768px] max-md:px-5 mx-auto">
    <label for="fullName" class="sr-only">Full Name</label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      class="gap-2.5 self-stretch p-6 text-base leading-7 text-gray-800  border border-solid border-zinc-500 border-opacity-50 w-full"
      placeholder="Full Name"
      aria-label="Full Name"
    />
</div>

<div class="mt-4 max-w-full w-[768px] max-md:px-5 mx-auto">
    <label for="email" class="sr-only">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      class="gap-2.5 self-stretch p-6 text-base leading-7 text-gray-800  border border-solid border-zinc-500 border-opacity-50 w-full"
      placeholder="Email"
      aria-label="Email"
    />
</div>

<div class="mt-4 max-w-full w-[768px] max-md:px-5 mx-auto flex gap-4">
    <div class="flex-1">
        <label for="province" class="sr-only">Province</label>
        <select
          id="province"
          name="province"
          class="gap-2.5 self-stretch p-6 text-base leading-7 text-gray-800  border border-solid border-zinc-500 border-opacity-50 w-full"
          aria-label="Province"
        >
            <option value="" disabled selected>Province</option>
            <option value="province1">Province 1</option>
            <option value="province2">Province 2</option>
            <option value="province3">Province 3</option>
        </select>
    </div>
    <div class="flex-1">
        <label for="city" class="sr-only">City</label>
        <select
          id="city"
          name="city"
          class="gap-2.5 self-stretch p-6 text-base leading-7 text-gray-800 border border-solid border-zinc-500 border-opacity-50 w-full"
          aria-label="City"
        >
            <option value="" disabled selected>City</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
            <option value="city3">City 3</option>
        </select>
    </div>
</div>

<div class="mt-4 max-w-full w-[768px] max-md:px-5 mx-auto">
    <label for="message" class="sr-only">Message</label>
    <textarea
      id="message"
      name="message"
      class="gap-2.5 self-stretch p-6 text-base leading-7 text-gray-800  border border-solid border-zinc-500 border-opacity-50 w-full h-40"
      placeholder="Your Message"
      aria-label="Message"
    ></textarea>
</div>
<div class="mt-4 max-w-full w-[768px] max-md:px-5 mx-auto">
    <button
      type="submit"
      class="w-full p-4 text-base font-bold text-black bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
    >
      Send Message
    </button>
</div>



  </MainLayout>
</template>
