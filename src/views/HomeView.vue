<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <article data-layername="homeHero" class="flex flex-col text-base font-bold text-white">
    <section class="flex relative flex-col w-full min-h-[720px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebd6e688cd9cb7393db315b136df4921bbb1100ddb71d1791b74073fba2bad83?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2" alt="Hero background image" class="object-cover absolute inset-0 w-full h-full" />
        <div data-layername="overlay" class="flex relative flex-col items-start px-20 py-60 w-full max-md:px-5 max-md:py-24 bg-black bg-opacity-60">
            <header data-layername="postedOnStartup" class="font-semibold leading-none uppercase tracking-[3px] font-inter">
                <span class="font-medium">Posted on</span>
                <strong class="font-black"> startup</strong>
            </header>
            <h1 data-layername="stepByStepGuideToChoosingGreatFontPairs" class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:w-full max-md:text-4xl max-md:leading-[51px] font-sen">
                Step-by-step guide to choosing great font pairs
            </h1>
            <p data-layername="byJamesWestMay232022" class="mt-6 leading-7 text-white font-inter">
                By <a href="#author" class="text-blue-600">James West</a> | <time datetime="2022-05-23">May 23, 2022</time>
            </p>
            <p data-layername="description" class="mt-4 leading-7 w-[599px] max-md:w-full font-inter">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <RouterLink
  to="/post"
  data-layername="button"
  class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 max-md:px-5 max-md:mt-10 max-md:mb-2.5 font-inter"
  aria-label="Read more about font pairs guide"
>
  Read More &gt;
</RouterLink>

        </div>
    </section>
</article>


  <main class="flex flex-col w-full px-5 sm:px-20 max-w-full my-20">
    <header
      class="flex justify-between items-center text-4xl font-bold text-gray-800 mb-6"
    >
      <h1 class="flex-1 text-center tracking-tighter">Featured Post</h1>
      <h2 class="flex-1 text-center tracking-tighter">All Posts</h2>
      <RouterLink
  to="/blog"
  class="my-auto text-base text-yellow-300"
  tabindex="0"
>
  View All
</RouterLink>

    </header>

    <section class="mt-9 max-w-full">
      <div class="flex flex-col gap-20 md:flex-row">
        <article class="w-full md:w-1/2 border border-gray-300 rounded-lg">
          <div class="p-20 font-bold">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/be3591a6d975ba91e7e8607e8b756becfeb5ea66cabdcabe3f7a441f131042f6?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
              alt="Featured blog post"
              class="w-full h-auto max-h-[250px] object-contain"
            />
            <p class="mt-4 text-sm font-medium text-black">
              By <a href="#author" class="text-yellow-300">John Doe</a> | May
              23, 2022
            </p>
            <h3 class="mt-4 text-3xl font-bold text-gray-800 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h3>
            <p class="mt-4 text-base text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <a
              href="#read-more"
              class="inline-block mt-8 px-12 py-4 bg-blue-600 text-lg text-white"
              tabindex="0"
              >Read More &gt;</a
            >
          </div>
        </article>

        <aside class="w-full md:w-2/5 space-y-5">
  <article class="py-7 px-5 bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <p class="text-sm text-gray-800">
      By <a href="#author" class="text-yellow-300">John Deo</a> | Aug 23, 2021
    </p>
    <h3 class="mt-2 text-2xl font-bold text-gray-800 leading-8">
      8 Figma design systems that you can download for free today.
    </h3>
  </article>
  <article class="py-7 px-5 bg-yellow-50 hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <p class="text-sm text-gray-800">
      By <a href="#author" class="text-yellow-300">John Doe</a> | Aug 23, 2021
    </p>
    <h3 class="mt-2 text-2xl font-bold text-gray-800 leading-8">
      8 Figma design systems that you can download for free today.
    </h3>
  </article>
  <article class="py-7 px-5 bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <p class="text-sm text-gray-800">
      By <a href="#author" class="text-yellow-300">John Doe</a> | Aug 23, 2021
    </p>
    <h3 class="mt-2 text-2xl font-bold text-gray-800 leading-8">
      8 Figma design systems that you can download for free today.
    </h3>
  </article>
  <article class="py-7 px-5 bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <p class="text-sm text-gray-800">
      By <a href="#author" class="text-yellow-300">John Doe</a> | Aug 23, 2021
    </p>
    <h3 class="mt-2 text-2xl font-bold text-gray-800 leading-8">
      8 Figma design systems that you can download for free today.
    </h3>
  </article>
</aside>
      </div>
    </section>

    <section class="mt-20 max-md:max-w-full">
      <div class="flex gap-9 max-md:flex-col">
        <section data-layername="aboutUsOurMission" class="flex flex-col">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70f7be6c65e1aeb76cee8cd48a5a2cb205679fe0a4c6afe3ea9f80564c9ec4e?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
            alt=""
            class="object-contain self-end aspect-[45.45] max-w-[1061px] w-full max-md:max-w-full"
          />

          <section
            data-layername="background"
            class="px-10 py-24 w-full bg-gray-100 max-md:px-5"
          >
            <div class="flex gap-10 max-md:flex-col">
              <article class="flex flex-col w-6/12 max-md:w-full max-md:mb-10">
                <div
                  class="flex flex-col grow text-base font-bold text-gray-800"
                >
                  <h2
                    data-layername="aboutUs"
                    class="self-start font-semibold leading-none uppercase tracking-wider"
                  >
                    ABOUT US
                  </h2>
                  <h3
                    data-layername="weAreACommunityOfContentWritersWhoShareTheirLearnings"
                    class="mt-4 text-4xl tracking-tighter leading-tight"
                  >
                    We are a community of content writers who share their
                    learnings
                  </h3>
                  <p
                    data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua"
                    class="mt-4 leading-7 text-gray-600"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href="#"
                    data-layername="readMore"
                    class="self-start mt-7 text-lg leading-8 text-yellow-600 hover:text-yellow-400 transition-colors duration-200"
                    tabindex="0"
                  >
                    Read More &gt;
                  </a>
                </div>
              </article>

              <article class="flex flex-col w-6/12 max-md:w-full">
                <div class="flex flex-col items-start text-base text-gray-800">
                  <h2
                    data-layername="ourMision"
                    class="font-semibold leading-none uppercase tracking-wider"
                  >
                    Our Mission
                  </h2>
                  <h3
                    data-layername="creatingValuableContentForCreativesAllAroundTheWorld"
                    class="mt-4 text-3xl font-bold tracking-tight leading-snug"
                  >
                    Creating valuable content for creatives all around the world
                  </h3>
                  <p
                    data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequat"
                    class="mt-4 leading-7 text-gray-600"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </section>
      </div>
    </section>

    <section class="mt-20 w-full">
      <div class="flex flex-col md:flex-row gap-10">

        <section class="flex flex-col">
          <h2
            class="self-start text-4xl font-bold tracking-tighter leading-none text-center text-gray-800 max-md:max-w-full mx-auto"
          >
            Choose A Category
          </h2>
          <div class="mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
              <article class="flex flex-col w-1/4 max-md:w-full max-md:mb-6">
                <div
                  class="flex flex-col grow items-start p-6 bg-white border border-gray-300 rounded-lg transition-transform transform hover:scale-105 max-md:px-4"
                >
                  <div
                    class="flex overflow-hidden relative flex-col w-12 aspect-square"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce335824448cbad56f38896330200d6bf9ede337a7a65aedb9c940df72afce49?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
                      alt="Business category icon"
                      class="object-contain w-full aspect-square"
                    />
                  </div>
                  <h3 class="mt-4 text-2xl font-bold text-gray-800">
                    Business
                  </h3>
                  <p class="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
              </article>

              <article class="flex flex-col w-1/4 max-md:w-full max-md:mb-6">
                <div
                  class="flex flex-col grow items-start p-6 bg-blue-600 border border-gray-300 rounded-lg transition-transform transform hover:scale-105 max-md:px-4"
                >
                <a href="/category">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/576cba0d27ba2190bd6bbd54daa12782abddcdfeedf9d5523524e38534114f60?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
    alt="Startup category icon"
    class="object-contain w-12 aspect-square fill-orange-50"
  />
  <h3 class="mt-4 text-2xl font-bold text-white">Startup</h3>
  <p class="mt-2 text-sm text-white">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  </p>
</a>
                </div>
              </article>
              <article class="flex flex-col w-1/4 max-md:w-full max-md:mb-6">
                <div
                  class="flex flex-col grow items-start p-6 bg-white border border-gray-300 rounded-lg transition-transform transform hover:scale-105 max-md:px-4"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/637773575d198fc5286fb0be6c342361f8e09c2c7af65a52633043571f3691f2?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
                    alt="Economy category icon"
                    class="object-contain w-12 aspect-square"
                  />
                  <h3 class="mt-4 text-2xl font-bold text-gray-800">Economy</h3>
                  <p class="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
              </article>
              <article class="flex flex-col w-1/4 max-md:w-full max-md:mb-6">
                <div
                  class="flex flex-col grow items-start p-6 bg-white border border-gray-300 rounded-lg transition-transform transform hover:scale-105 max-md:px-4"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba52a322b7c5a457cb29fe4a75a6b17ffcf005e83c416286b8655f49dfd656f2?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
                    alt="Technology category icon"
                    class="object-contain w-12 aspect-square"
                  />
                  <h3 class="mt-4 text-2xl font-bold text-gray-800">
                    Technology
                  </h3>
                  <p class="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="py-16">
  <div class="flex w-[1280px] h-[705px] relative flex-col ml-[120px] mt-[100px] items-start text-base font-bold">
    <div class="flex relative flex-col items-end px-20 pt-32 max-w-full min-h-[705px] w-[949px]">
      <img
        loading="lazy"
        src="https://s3-alpha-sig.figma.com/img/9b1a/e821/ce4666853a588ecefa1d1add86d0a4da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QqIuCmBgKhfcOeh94HIPoDJrbEXX-XHKP3nSi7ZrU5i-mTaqF1v108I4E7EFxh7wTX6H3okz4wa~pwmjWHPKVlR2~itKXqmW2p8As3zSXXUwdVyTrq9bGf1JW7ie4Na5~R7mZdZryPL4tZ3muOOgMuc5QZ-f~hMCab5rv1U6Cy6EFuFgfG1Ykf5AkEviGUuYUbBXxijsA7qwH5BvhW8NyGlSbphyO8lnfdXudyDPchAvLW6W8kmYIh1WUOXYpMW583HCJIlnqPjPbpbnFo5mPfUduEW9dFYufIVR371N-XPlXaRLyFogMtZsMZZaSMUkS4ggn8Dx0w3~oP8RSIKGPg__"
        class="object-cover absolute inset-0 w-full h-full"
      />
      <div class="flex flex-col p-20 bg-white w-[706px] h-[584px] left-[574px] top-[121px] absolute">
        <div class="font-semibold leading-tight text-gray-800 uppercase tracking-[3px]">
          Why we started
        </div>
        <div class="mt-6 text-[48px] tracking-tighter w-[520px] text-gray-800 leading-[64px]">
          It started out as a simple idea and evolved into our passion
        </div>
        <div class="mt-4 leading-7 text-base font-normal text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </div>
        <router-link
          to="/"
          class="gap-3 self-start px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-x-yellow transition duration-150 ease-in-out">
          Discover our story &gt;
        </router-link>
      </div>
    </div>
  </div>
</section>


<section class="mt-20 flex flex-col items-center px-0 w-full">
  <div class="w-full flex flex-col">
    <div class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">
      List of Authors
    </div>
    <div class="mt-12 w-full max-w-full">
      <div class="flex gap-5 flex-wrap justify-between max-md:flex-col w-full">

        <!-- Author 1 -->
        <div class="flex flex-col w-full md:w-[24%]">
          <div class="flex flex-col items-center px-14 py-10 leading-none bg-zinc-100">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/094d39a0fb6fd4c78b277e99f5b8cced1213f2081aba68e2be99b15d0af7db97?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/094d39a0fb6fd4c78b277e99f5b8cced1213f2081aba68e2be99b15d0af7db97?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/094d39a0fb6fd4c78b277e99f5b8cced1213f2081aba68e2be99b15d0af7db97?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/094d39a0fb6fd4c78b277e99f5b8cced1213f2081aba68e2be99b15d0af7db97?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=800 800w"
              class="object-contain w-32 max-w-full rounded-full aspect-square"
            />
            <div class="mt-5 text-3xl font-bold tracking-tighter text-gray-800 text-center">
              Floyd Miles
            </div>
            <div class="self-stretch text-sm text-center text-zinc-500">
              Content Writer @Company
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5cc4cfcc3bcb6e4c897b0833e2122329047b57695f908bf177ebe2b60e235b3?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              class="object-contain mt-5 w-28 max-w-full aspect-[6.58]"
            />
          </div>
        </div>

        <!-- Author 2 -->
        <div class="flex flex-col w-full md:w-[24%]">
          <div class="flex flex-col items-center px-14 py-10 leading-none bg-orange-50">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c4b195e3409ae2d869b5afba23e15e0925221a1305277931957c58b69b3c6aa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c4b195e3409ae2d869b5afba23e15e0925221a1305277931957c58b69b3c6aa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c4b195e3409ae2d869b5afba23e15e0925221a1305277931957c58b69b3c6aa?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=400 400w"
              class="object-contain w-32 max-w-full rounded-full aspect-square"
            />
            <div class="mt-5 text-3xl font-bold tracking-tighter text-gray-800 text-center">
              Dianne Russell
            </div>
            <div class="self-stretch text-sm text-center text-zinc-500">
              Content Writer @Company
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8775f3a085501a9281d9a5bf55dea0e7e2f320e2662ec8d22b65894fced518c1?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              class="object-contain mt-5 w-28 max-w-full aspect-[6.58]"
            />
          </div>
        </div>

        <!-- Author 3 -->
        <div class="flex flex-col w-full md:w-[24%]">
          <div class="flex flex-col items-center px-14 py-10 leading-none bg-zinc-100">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a3a0da50e34bbdb69687de32739de1278c67e778a99654562f581148bee468?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8a3a0da50e34bbdb69687de32739de1278c67e778a99654562f581148bee468?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8a3a0da50e34bbdb69687de32739de1278c67e778a99654562f581148bee468?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=400 400w"
              class="object-contain w-32 max-w-full rounded-full aspect-square"
            />
            <div class="mt-5 text-3xl font-bold tracking-tighter text-gray-800 text-center">
              Jenny Wilson
            </div>
            <div class="self-stretch text-sm text-center text-zinc-500">
              Content Writer @Company
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/572e086e4084edd1f6e7f695a17a39dee6e3a41cb913eb114a25bb50bca8d98c?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              class="object-contain mt-5 w-28 max-w-full aspect-[6.58]"
            />
          </div>
        </div>

        <!-- Author 4 -->
        <div class="flex flex-col w-full md:w-[24%]">
          <div class="flex flex-col items-center px-14 py-10 leading-none bg-zinc-100">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/54d3f7ddccbe68495e8eb4e094d3be6ca1098fc5100fa4f626206f477da5cb8f?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/54d3f7ddccbe68495e8eb4e094d3be6ca1098fc5100fa4f626206f477da5cb8f?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54d3f7ddccbe68495e8eb4e094d3be6ca1098fc5100fa4f626206f477da5cb8f?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2&width=400 400w"
              class="object-contain w-32 max-w-full rounded-full aspect-square"
            />
            <div class="mt-5 text-3xl font-bold tracking-tighter text-gray-800 text-center">
              Marvin McKinney
            </div>
            <div class="self-stretch text-sm text-center text-zinc-500">
              Content Writer @Company
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/572e086e4084edd1f6e7f695a17a39dee6e3a41cb913eb114a25bb50bca8d98c?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
              class="object-contain mt-5 w-28 max-w-full aspect-[6.58]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section data-layername="logoComponent" class="flex flex-wrap gap-10 items-start text-zinc-500 pt-20" aria-labelledby="featured-section-title">
    <header class="flex flex-col self-start mt-0">
      <h2 id="featured-section-title">
        <span class="self-start text-sm leading-none opacity-60">We are</span>
        <span class="block text-2xl font-bold leading-none">Featured in</span>
      </h2>
    </header>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/189e665adaffe7c8d7c80c03a6c7c04b7d5f4e277d657bed1f42a0e7d14b1127?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e"
      alt="Featured publications and partners logos"
      class="object-contain grow shrink-0 my-auto aspect-[31.25] basis-0 w-fit max-md:max-w-full"
    />
  </section>
  <section data-layername="testimonials" class="w-full bg-orange-50 px-4 py-20 mt-20">
  <div class="max-w-6xl mx-auto grid grid-cols-2 gap-8 p-16 rounded-lg max-md:grid-cols-1">
    <!-- Left Column -->
    <article class="flex flex-col items-start text-base text-gray-800">
      <h2 data-layername="testimonials" class="font-semibold leading-none uppercase tracking-[3px] text-gray-600">
        TESTIMONIALS
      </h2>
      <h3 data-layername="whatPeopleSayAboutOurBlog" class="mt-2 text-4xl font-bold tracking-tight leading-10 text-gray-900">
        What People Say About Our Blog
      </h3>
      <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTempor" class="mt-4 leading-7 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
    </article>

    <!-- Right Column -->
    <article class="flex flex-col">
      <blockquote data-layername="testimonialText" class="text-2xl font-bold leading-8 text-gray-800 mb-6 border-l-4 border-gray-400 pl-4 italic">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      </blockquote>
      <footer class="flex justify-between items-center">
        <!-- Profile Info -->
        <div class="flex items-center gap-4">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8502709d3a0af87123ad5aa332ef32df31662e93ef6da6341b4c78d1f4451ea6?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Jonathan Vallem profile picture" class="w-12 h-12 rounded-full shadow-md" />
          <div>
            <cite data-layername="jonathanVallem" class="text-lg font-semibold text-gray-800 not-italic">
              Jonathan Vallem
            </cite>
            <p data-layername="location" class="text-base leading-7 text-gray-500">
              New York, USA
            </p>
          </div>
        </div>
        <!-- Navigation Buttons -->
        <div class="flex gap-6" role="group" aria-label="Navigation controls">
            <button class="focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Previous testimonial">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f5ae0b05f88175949425804e6e1196fc776b109748d2aa18fea9d1861879d4?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2" alt="" class="object-contain shrink-0 my-auto w-10 aspect-square" />
            </button>
            <button class="focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Next testimonial">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b676eb085c0c013528d5ff088726665c65f255584b47cb51e5c4e4b02268d0?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2" alt="" class="object-contain shrink-0 my-auto w-10 aspect-square" />
            </button>
        </div>
      </footer>
    </article>
  </div>
</section>


    <section
      class="mt-20 flex flex-col items-center font-bold max-w-md mx-auto mt-10 p-6 bg-white rounded-lg"
    >
      <!-- Title -->
      <h2
        class="self-stretch w-full text-3xl md:text-4xl tracking-tight leading-snug text-center text-gray-800"
      >
        Join our team to be a part of our story
      </h2>

      <!-- Subtitle -->
      <p
        class="mt-4 text-base md:text-lg leading-relaxed text-center text-gray-600"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>

      <!-- Button -->
      <a
  href="/join"
  class="mt-8 px-10 py-3 text-lg leading-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition"
  aria-label="Join our team"
>
  Join Now
</a>
    </section>
  </main>
  </MainLayout>
</template>
