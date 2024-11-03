<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <header class="flex flex-col items-center px-20 pt-32 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
    <main class="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
      <article class="max-w-full w-[952px]">
        <section class="flex gap-5 max-md:flex-col">
          <figure class="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/620ff041f074146a40a17d4ed05a7b479d1ea11f21ba20bdd8802d9140460ab6?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              alt="Andrew Johnson profile"
              class="object-contain grow w-full aspect-[0.85] max-md:mt-8"
            />
          </figure>
          <div class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
              <h1 class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                Hey there, I'm Andrew Jonhson and welcome to my Blog
              </h1>
              <p class="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
              </p>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b749555d58d9855e0384a1c037337954674a252d3f2c45f168353c801c696060?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
                alt="Blog decoration"
                class="object-contain max-w-full aspect-[1.81] w-[82px]"
              />
            </div>
          </div>
        </section>
      </article>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c6adf65d2b2182cdb25b4a072861eb1ed209bb0f828b6136c6697d20e482490?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
        alt="Blog footer decoration"
        class="object-contain mt-28 w-full aspect-[43.48] max-md:mt-10 max-md:max-w-full"
      />
    </main>
  </header>
  <div class="flex flex-col items-center px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
  <div class="text-center text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl">
    All posts
  </div>

  <!-- Post 1 -->
  <article data-layername="item" class="max-w-[985px] mt-10">
    <div class="flex gap-5 max-md:flex-col">
      <section class="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a0cfd0b5f4bac1070110b31f5611e8edaf3d046aecde01dc829c8565e0f4e88?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
          alt="UI Design Font Sizes Guide Preview"
          class="object-contain grow w-full aspect-[1.29] max-md:mt-8"
        />
      </section>
      <section class="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
        <div class="flex z-10 flex-col items-start self-stretch my-auto mr-0 text-base max-md:mt-10 max-md:max-w-full">
          <span data-layername="business" class="font-semibold leading-none text-amber-300 uppercase tracking-[3px]" role="text">
            BUSINESS
          </span>
          <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
            Font sizes in UI design: The complete guide to follow
          </h2>
          <p class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </div>
  </article>

  <!-- Post 2 -->
  <article data-layername="item" class="max-w-[985px] mt-10">
    <div class="flex gap-5 max-md:flex-col">
      <section class="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca902affa6ca9d3191f1c419b95251b420de6faa3e6ebeeb56b702de796f1699?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
          alt="Post 2 Preview"
          class="object-contain grow w-full aspect-[1.29] max-md:mt-8"
        />
      </section>
      <section class="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
        <div class="flex z-10 flex-col items-start self-stretch my-auto mr-0 text-base max-md:mt-10 max-md:max-w-full">
          <span data-layername="economy" class="font-semibold leading-none text-amber-300 uppercase tracking-[3px]" role="text">
            ECONOMY
          </span>
          <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
            How to build rapport with your web design clients
          </h2>
          <p class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </div>
  </article>
  </div>

  </MainLayout>
</template>
