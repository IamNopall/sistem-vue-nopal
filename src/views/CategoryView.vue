<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
const buttons = document.querySelectorAll('.category-button');
</script>

<template>
  <MainLayout>
    <main class="flex flex-col justify-center items-center p-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
      <article class="flex flex-col items-center max-w-full w-[472px]">
        <h1 class="text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">
          Business
        </h1>
        <p class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <nav class="mt-8 font-medium leading-none uppercase tracking-[3px]">
          <a href="/blog" class="hover:underline">Blog</a>
          <span aria-hidden="true"> &gt; </span>
          <a href="/blog/business" class="hover:underline">Business</a>
        </nav>
      </article>
    </main>

    <div class="mt-40 flex container mx-auto px-6">
      <!-- Artikel utama di sebelah kiri -->
      <div class="flex-1">
        <!-- Artikel pertama -->
        <article class="max-w-[827px] mt-8 ml-6">
          <div class="flex gap-5 max-md:flex-col">
            <section class="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/650e263b68a6d4724279543c1632a0bdfba26a2088f4d3350251f60ff218ebae?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
                alt="Website mockup tools illustration"
                class="object-contain grow w-full aspect-[0.94] max-md:mt-8"
              />
            </section>
            <section class="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div class="flex z-10 flex-col self-stretch my-auto text-base max-md:mt-10 max-md:mr-0 max-md:max-w-full">
                <span class="self-start font-semibold leading-none text-amber-300 uppercase tracking-[3px]">
                  Business
                </span>
                <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                  Top 6 free website mockup tools 2022
                </h2>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
              </div>
            </section>
          </div>
        </article>

        <!-- Artikel kedua -->
        <article class="max-w-[827px] mt-8 ml-6">
          <div class="flex gap-5 max-md:flex-col">
            <section class="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/650e263b68a6d4724279543c1632a0bdfba26a2088f4d3350251f60ff218ebae?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
                alt="Graphic design software illustration"
                class="object-contain grow w-full aspect-[0.94] max-md:mt-8"
              />
            </section>
            <section class="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div class="flex z-10 flex-col self-stretch my-auto text-base max-md:mt-10 max-md:mr-0 max-md:max-w-full">
                <span class="self-start font-semibold leading-none text-amber-300 uppercase tracking-[3px]">
                  Design
                </span>
                <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                  Step-by-step guide to choosing great font pairs
                </h2>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
              </div>
            </section>
          </div>
        </article>

        <!-- Artikel kedua -->
        <article class="max-w-[827px] mt-8 ml-6">
          <div class="flex gap-5 max-md:flex-col">
            <section class="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/650e263b68a6d4724279543c1632a0bdfba26a2088f4d3350251f60ff218ebae?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
                alt="Graphic design software illustration"
                class="object-contain grow w-full aspect-[0.94] max-md:mt-8"
              />
            </section>
            <section class="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div class="flex z-10 flex-col self-stretch my-auto text-base max-md:mt-10 max-md:mr-0 max-md:max-w-full">
                <span class="self-start font-semibold leading-none text-amber-300 uppercase tracking-[3px]">
                  Design
                </span>
                <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                  Ten free foogle fonts that you should use
                </h2>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
              </div>
            </section>
          </div>
        </article>

        <!-- Artikel kedua -->
        <article class="max-w-[827px] mt-8 ml-6">
          <div class="flex gap-5 max-md:flex-col">
            <section class="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/650e263b68a6d4724279543c1632a0bdfba26a2088f4d3350251f60ff218ebae?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
                alt="Graphic design software illustration"
                class="object-contain grow w-full aspect-[0.94] max-md:mt-8"
              />
            </section>
            <section class="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div class="flex z-10 flex-col self-stretch my-auto text-base max-md:mt-10 max-md:mr-0 max-md:max-w-full">
                <span class="self-start font-semibold leading-none text-amber-300 uppercase tracking-[3px]">
                  Design
                </span>
                <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                  What did I learn from doing 50+ design sprints?
                </h2>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>

      <!-- Bagian Kategori di sebelah kanan -->
      <section data-layername="categories" class="mt-10 flex flex-col text-3xl font-bold leading-none text-gray-800 rounded-none max-w-[298px] ml-6">
    <h2 data-layername="categories" class="self-start text-4xl tracking-tighter leading-none">
        Categories
    </h2>
    <nav class="flex flex-col gap-6 mt-10">
        <button data-layername="background" class="category-button flex gap-4 p-6 tracking-tighter text-white whitespace-nowrap bg-blue-600 transform transition-transform duration-300 hover:-translate-y-1" tabindex="0">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/557728134b3885a7ca01c4d50e659bc492173585fdc2b2a50c0dbea46af45dd2?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2" alt="" class="object-contain shrink-0 w-12 aspect-square" />
            <span data-layername="startup" class="grow shrink my-auto w-[174px]">Startup</span>
        </button>
        <button data-layername="border" class="category-button flex gap-4 p-6 tracking-tighter whitespace-nowrap border-2 border-solid border-stone-300 transform transition-transform duration-300 hover:-translate-y-1" tabindex="0">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e7c6023c00eac0752dfe78dda2bb6221948cddaaf3e281876bc23a8564e30a3?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2" alt="" class="object-contain shrink-0 w-12 aspect-square" />
            <span data-layername="business" class="grow shrink my-auto w-[174px]">Business</span>
        </button>
        <button data-layername="border" class="category-button flex gap-4 p-6 tracking-tighter whitespace-nowrap border-2 border-solid border-stone-300 transform transition-transform duration-300 hover:-translate-y-1" tabindex="0">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5751c1b122f66fe81fa1d9f89b98aac514892c935defb6a968973909ba9f6f3a?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2" alt="" class="object-contain shrink-0 w-12 aspect-square" />
            <span data-layername="economy" class="grow shrink my-auto w-[174px]">Economy</span>
        </button>
        <button data-layername="border" class="category-button flex gap-4 p-6 tracking-tighter whitespace-nowrap border-2 border-solid border-stone-300 transform transition-transform duration-300 hover:-translate-y-1" tabindex="0">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a8b0e0db155774da949c1dd984bc3305e0ad1a71f2b24f24c1186d9c10f1f8b?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2" alt="" class="object-contain shrink-0 w-12 aspect-square" />
            <span data-layername="technology" class="grow shrink my-auto w-[174px]">Technology</span>
        </button>
    </nav>

        <section class="mt-12">
    <h2 data-layername="allTags" class="self-start text-4xl tracking-tighter leading-none">
        All Tags
    </h2>
    <nav class="flex flex-wrap gap-4 mt-6 w-full text-sm leading-8 whitespace-nowrap">
        <button data-layername="button" class="tag-button" tabindex="0">Business</button>
        <button data-layername="button" class="tag-button" tabindex="0">Experience</button>
        <button data-layername="button" class="tag-button" tabindex="0">Screen</button>
        <button data-layername="button" class="tag-button" tabindex="0">Technology</button>
        <button data-layername="button" class="tag-button" tabindex="0">Marketing</button>
        <button data-layername="button" class="tag-button" tabindex="0">Life</button>
    </nav>
</section>


      </section>
    </div>
  </MainLayout>
</template>
<style>
    .tag-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;
        padding: 0.5rem 1.5rem;
        border-radius: 1.5rem;
        border: 2px solid #666; /* Using zinc-500 color equivalent */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        background-color: transparent; /* Optional: adjust background as needed */
    }

    .tag-button:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    /* Optional: Adjust styles for active/selected state */
    .tag-button:focus {
        outline: none;
        box-shadow: 0 0 0 2px #999; /* A focus outline for accessibility */
    }
</style>
