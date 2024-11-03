<template>
  <footer
    class="mt-44 flex flex-col overflow-hidden justify-center px-20 py-14 bg-gray-900 text-white max-md:px-6"
  >
    <!-- Footer Main Section -->
    <div
      class="flex flex-wrap gap-5 justify-between items-start w-full text-base leading-7 max-md:flex-col max-md:items-center"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d468087b4bf740b7bf02a878a48c57443cb6060d0e8542e791693268e3ef42?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
        alt="Company Logo"
        class="object-contain w-[140px] max-md:w-[100px] aspect-auto"
      />
      <nav class="flex flex-wrap gap-6 mt-4 max-md:justify-center">
        <a
          href="/"
          class="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Navigate to Home"
          >Home</a
        >
        <a
          href="/blog"
          class="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Navigate to Blog"
          >Blog</a
        >
        <a
          href="/aboutus"
          class="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Navigate to About us"
          >About us</a
        >
        <a
          href="/contact"
          class="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Navigate to Contact us"
          >Contact us</a
        >
        <a
          href="/policy"
          class="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Navigate to Privacy Policy"
          >Privacy Policy</a
        >
      </nav>
    </div>

    <!-- Newsletter Section -->
    <section
      class="px-16 py-12 mt-10 w-full bg-opacity-10 bg-white rounded-md max-md:px-6 max-md:mt-8"
    >
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-6/12 max-md:w-full">
          <h2 class="text-2xl md:text-3xl font-semibold text-white">
            Subscribe to our newsletter for the latest updates and news
          </h2>
        </div>
        <div class="flex flex-col w-6/12 max-md:w-full">
          <form
            @submit.prevent="handleSubmit"
            class="flex gap-4 mt-4 max-md:flex-col"
          >
            <label for="email" class="sr-only">Enter Your Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter Your Email"
              class="flex-grow px-4 py-3 text-base text-gray-800 border border-gray-500 placeholder-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="submit"
              class="px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact & Address Section -->
    <div
      class="flex flex-wrap gap-5 justify-between mt-12 text-base leading-7 max-md:mt-8 max-md:flex-col max-md:items-center"
    >
      <address class="opacity-80 not-italic text-center max-md:mb-4">
        Finstreet 118, 2561 Fintown
      </address>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8fff18c67e5db4b46467cf1116a434def5c4fb1b13fdeee4d15298a3a86b8c?placeholderIfAbsent=true&apiKey=832aedb5e1714ab3835c6bddb89280b2"
        alt="Social Media Icons"
        class="object-contain w-28 max-md:w-24"
      />
    </div>
    <div
      class="flex flex-wrap gap-5 justify-between mt-1 text-base leading-7 opacity-80 max-md:flex-col max-md:items-center"
    >
      <a
        href="mailto:Hello@finsweet.com"
        class="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Hello@finsweet.com 020 7993 2905
  </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  methods: {
    handleSubmit() {
      // Your form submission logic here
    },
  },
});
</script>
