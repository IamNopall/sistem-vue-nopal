<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav class="px-6 md:px-12 w-full h-[80px] bg-x-black flex items-center justify-between relative">
    <img src="@/assets/images/logo/logo-join-sistem.png" alt="Join Sistem Logo" class="h-10 md:h-auto">
    <div class="md:hidden">
      <button @click="toggleMobileMenu" class="text-white focus:outline-none">
        <!-- Hamburger Icon -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <ul :class="['absolute md:static bg-x-black md:flex md:gap-4', { 'hidden': !isMobileMenuOpen, 'block': isMobileMenuOpen }]"
        class="top-16 left-0 w-full md:w-auto md:flex-row flex-col z-10">
      <li>
        <a href="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</a>
      </li>
      <li>
        <a href="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</a>
      </li>
      <li>
        <a href="/aboutus" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</a>
      </li>
      <li>
        <a href="/contact" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</a>
      </li>
    </ul>
    <a href="/contact" class="hidden md:block bg-x-blue px-4 py-2 rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out">Contact Us</a>
  </nav>
</template>

<style scoped>
/* Optional: Add some styling for the mobile menu */
@media (max-width: 640px) {
  .mobile-menu {
    background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent background */
  }
}
</style>
