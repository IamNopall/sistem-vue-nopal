<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <article class="p-20 w-full bg-gray-200 max-md:px-5">
      <div class="flex gap-5 max-md:flex-col">
        <section class="flex flex-col w-[55%] max-md:w-full">
          <div class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10">
            <span class="text-base leading-none text-gray-800 uppercase tracking-[3px]">Featured Post</span>
            <h1 class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">
              Step-by-step guide to choosing great font pairs
            </h1>
            <time datetime="2022-05-23" class="mt-4 text-sm leading-none text-black-300">
              By <span class="text-amber-300">John Doe</span> | May 23, 2022
            </time>
            <p class="self-stretch mt-4 text-base leading-7 text-zinc-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <a
  href="/post"
  data-layername="button"
  class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 max-md:px-5 max-md:mt-10 max-md:mb-2.5 font-inter "
  aria-label="Read more about font pairs guide"
>
  Read More &gt;
</a>
          </div>
        </section>
        <section class="flex flex-col w-[45%] max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d8e2ad51b83243c6a1b8dc7a5ef0551de55869448857de5ea983f125477ec0?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
            alt="Featured post illustration"
            class="object-contain w-full aspect-[2] max-md:mt-10"
          />
        </section>
      </div>
    </article>
    <div
    class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
  >
    <div
      class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl"
    >
      All posts
    </div>
    <div
      class="shrink-0 mt-8 h-px border border-solid bg-zinc-500 border-zinc-500 opacity-[0.32] max-md:max-w-full"
    ></div>
    <div class="mt-16 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              class="object-contain w-full aspect-[1.54] max-md:max-w-full"
            /><img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/166941846cc8a759998da1832ed117e392c3a909fb28a336b9a5dcca1aa8c9a3?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/166941846cc8a759998da1832ed117e392c3a909fb28a336b9a5dcca1aa8c9a3?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/166941846cc8a759998da1832ed117e392c3a909fb28a336b9a5dcca1aa8c9a3?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/166941846cc8a759998da1832ed117e392c3a909fb28a336b9a5dcca1aa8c9a3?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/166941846cc8a759998da1832ed117e392c3a909fb28a336b9a5dcca1aa8c9a3?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/166941846cc8a759998da1832ed117e392c3a909fb28a336b9a5dcca1aa8c9a3?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/166941846cc8a759998da1832ed117e392c3a909fb28a336b9a5dcca1aa8c9a3?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/166941846cc8a759998da1832ed117e392c3a909fb28a336b9a5dcca1aa8c9a3?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
            /><img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf22d21539fde087b95109b591c5c30952c34bc57569e8a219e3f9e8d4c0d0fa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf22d21539fde087b95109b591c5c30952c34bc57569e8a219e3f9e8d4c0d0fa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf22d21539fde087b95109b591c5c30952c34bc57569e8a219e3f9e8d4c0d0fa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf22d21539fde087b95109b591c5c30952c34bc57569e8a219e3f9e8d4c0d0fa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf22d21539fde087b95109b591c5c30952c34bc57569e8a219e3f9e8d4c0d0fa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf22d21539fde087b95109b591c5c30952c34bc57569e8a219e3f9e8d4c0d0fa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf22d21539fde087b95109b591c5c30952c34bc57569e8a219e3f9e8d4c0d0fa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf22d21539fde087b95109b591c5c30952c34bc57569e8a219e3f9e8d4c0d0fa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
            /><img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe6bc17e39e42108cfc446ef3fd97e7f17a962c19271f726d02e325ad5f94701?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe6bc17e39e42108cfc446ef3fd97e7f17a962c19271f726d02e325ad5f94701?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe6bc17e39e42108cfc446ef3fd97e7f17a962c19271f726d02e325ad5f94701?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe6bc17e39e42108cfc446ef3fd97e7f17a962c19271f726d02e325ad5f94701?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe6bc17e39e42108cfc446ef3fd97e7f17a962c19271f726d02e325ad5f94701?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe6bc17e39e42108cfc446ef3fd97e7f17a962c19271f726d02e325ad5f94701?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe6bc17e39e42108cfc446ef3fd97e7f17a962c19271f726d02e325ad5f94701?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe6bc17e39e42108cfc446ef3fd97e7f17a962c19271f726d02e325ad5f94701?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
            /><img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
        <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div
            class="flex flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full"
          >
            <div class="self-start uppercase tracking-[3px]">Startup</div>
            <div
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              Design tips for designers that cover everything you need
            </div>
            <div class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
            <div class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">
              BUSINESS
            </div>
            <div
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              How to build rapport with your web design clients
            </div>
            <div class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
            <div class="self-start mt-48 uppercase tracking-[3px] max-md:mt-10">
              Startup
            </div>
            <div
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              Logo design trends to avoid in 2022
            </div>
            <div class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
            <div class="self-start mt-48 uppercase tracking-[3px] max-md:mt-10">
              TECHNOLOGY
            </div>
            <div
              class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
            >
              8 Figma design systems you can download for free today
            </div>
            <div class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
            <div class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">
              ECONOMY
            </div>
            <div
              class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              Font sizes in UI design: The complete guide to follow
            </div>
            <div class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex gap-4 self-center mt-16 ml-3.5 max-w-full font-bold text-center w-[174px] max-md:mt-10"
    >
      <div class="grow my-auto text-2xl leading-none text-zinc-500">
        &lt; Prev
      </div>
      <div class="text-3xl tracking-tighter leading-none text-gray-800">
        Next &gt;
      </div>
    </div>
  </div>
  <div
  class="flex flex-col items-center px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
>
  <div
    class="self-start text-4xl font-bold tracking-tighter leading-none text-gray-800"
  >
    All Categories
  </div>
  <div class="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
    <div class="flex gap-5 max-md:flex-col">
      <!-- Business Category -->
      <a href="/business" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full group">
        <div
          class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-300 transform group-hover:scale-105 group-hover:bg-zinc-100"
        >
          <div class="flex overflow-hidden relative flex-col w-12 aspect-square fill-orange-50">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce335824448cbad56f38896330200d6bf9ede337a7a65aedb9c940df72afce49?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              class="object-contain w-full aspect-square"
            />
          </div>
          <div class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800">
            Business
          </div>
          <div class="self-stretch mt-1 text-base leading-7 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </div>
        </div>
      </a>

      <!-- Startup Category -->
      <a href="/category" class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full group">
        <div
          class="flex flex-col grow items-start p-8 w-full bg-blue-600 max-md:px-5 max-md:mt-8 transition duration-300 transform group-hover:scale-105 group-hover:bg-blue-700"
        >
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8250d9eefae9b2ecf2f0f6780643200066ef7c25d353e7234f691aad66dec9e8?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
            class="object-contain w-12 aspect-square fill-zinc-100"
          />
          <div class="mt-4 text-3xl font-bold tracking-tighter leading-none text-orange-50">
            Startup
          </div>
          <div class="self-stretch mt-1 text-base leading-7 text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </div>
        </div>
      </a>

      <!-- Economy Category -->
      <a href="/economy" class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full group">
        <div
          class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-300 transform group-hover:scale-105 group-hover:bg-zinc-100"
        >
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/637773575d198fc5286fb0be6c342361f8e09c2c7af65a52633043571f3691f2?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
            class="object-contain w-12 aspect-[0.98] fill-orange-50"
          />
          <div class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800">
            Economy
          </div>
          <div class="self-stretch mt-1 text-base leading-7 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </div>
        </div>
      </a>

      <!-- Technology Category -->
      <a href="/technology" class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full group">
        <div
          class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-300 transform group-hover:scale-105 group-hover:bg-zinc-100"
        >
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ba52a322b7c5a457cb29fe4a75a6b17ffcf005e83c416286b8655f49dfd656f2?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
            class="object-contain w-12 aspect-[0.96] fill-orange-50"
          />
          <div class="mt-3.5 text-3xl font-bold tracking-tighter leading-none text-gray-800">
            Technology
          </div>
          <div class="self-stretch mt-1 text-base leading-7 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </div>
        </div>
      </a>
    </div>
  </div>
    <div
      class="mt-32 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-800 w-[414px] max-md:mt-10"
    >
      Join our team to be a part of our story
    </div>
    <div class="mt-4 text-base leading-7 text-center text-zinc-500 w-[405px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </div>
    <div
      class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5"
    >
      Join Now
    </div>
  </div>
  </MainLayout>
</template>

