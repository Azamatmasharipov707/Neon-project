<script setup>
import Navbar from './components/Navbar.vue';
import Slider from './components/Slider.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="bg-zinc-800">
    <Navbar />
    <Slider />
    <Main />
    <Footer />
  </div>
</template>

<style>
* {
  scroll-behavior: smooth;
}
</style>
