<template>
    <div class="posts mt-9 p-8 bg-zinc-900 rounded-3xl">
        <h2 class="font-bold text-white text-xl mb-10">Featured posts</h2>
        <div v-for="post in posts" class="flex gap-x-3 mb-5 items-center">
            <img :src="post.image" alt="" class="w-20 h-20 object-cover flex-shrink-0 rounded-md">
            <div>
                <h2 class="text-white text-lg mb-3">{{ post.title }}</h2>
                <p class="text-zinc-500 text-sm items-center flex gap-x-1"><font-awesome-icon icon="fa-solid fa-clock" />{{ post.time }}</p>
            </div>
        </div>
        <Tags />
        <LatestPosts />
        <Socials />
        <form action="" class="bg-pink-500 p-9 flex flex-col gap-y-5 text-center my-14 rounded-xl">
            <h1 class="text-3xl font-bold text-white">Newslatter</h1>
            <p class="text-white text-xl">
            Get the latest posts delivered straight to your inbox.
            </p>
            <input class="py-3 px-4 rounded-3xl" type="text" placeholder="Your name">
            <input class="py-3 px-4 rounded-3xl" type="email" placeholder="Your email address">
            <button class="py-3 px-4 rounded-3xl bg-white font-semibold hover:bg-slate-300 transition" type="submit">Subscribe</button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Tags from './Tags.vue';
import LatestPosts from './LatestPosts.vue';
import Socials from './Socials.vue';
const posts = reactive([
    {
        image: new URL('../images/main-card-2.jfif', import.meta.url),
        title: "Never let your memories be greater than your dreams",
        time: '4 min read',
    },
    {
        image: new URL('../images/slider-img.jfif', import.meta.url),
        title: "Never let your memories be greater than your dreams",
        time: '5 min read',
    },
    {
        image: new URL('../images/main-card-7.jfif', import.meta.url),
        title: "Never let your memories be greater than your dreams",
        time: '3 min read',
    }
])
</script>

<style scoped>
</style>