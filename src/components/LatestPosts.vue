<template>
    <div>
        <h2 class="font-bold text-white text-xl mb-10">Latest posts</h2>
        <div v-for="post in latestPosts" class="flex gap-x-3 mb-5 items-center">
            <img :src="post.image" alt="" class="w-20 h-20 object-cover flex-shrink-0 rounded-md">
            <div>
                <h2 class="text-white text-lg mb-3">{{ post.title }}</h2>
                <p class="text-zinc-500 text-sm items-center flex gap-x-1"><font-awesome-icon icon="fa-solid fa-clock" />{{ post.time }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const latestPosts = reactive([
    {
        image: new URL('../images/main-card-1.jfif', import.meta.url),
        title: "Autumn is a second spring when every leaf is a flower",
        time: '4 min read',
    },
    {
        image: new URL('../images/main-card-2.jfif', import.meta.url),
        title: "Never let your memories be greater than your dreams",
        time: '5 min read',
    },
    {
        image: new URL('../images/main-card-3.jfif', import.meta.url),
        title: "Dramatically improve your cooking using just your imagination",
        time: '3 min read',
    }
])
</script>

<style lang="scss" scoped>

</style>