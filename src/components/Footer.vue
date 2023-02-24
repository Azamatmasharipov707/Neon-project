<template>
    <div class="bg-zinc-900 mt-14">
        <div class="container py-14 flex gap-x-10">
            <div>
                <h3 class="capitalize text-white text-2xl font-bold mb-8">newslatter</h3>
                <p class="text-white text-lg">Get the latest posts delivered straight to your inbox.</p>
                <div class="border border-gray-600  rounded-full w-96 flex items-center overflow-hidden mt-6 mb-10">
                    <input type="text" placeholder="Your email address" class="outline-none text-white py-2 w-full h-full px-5 bg-transparent ">
                    <button class="capitalize w-max bg-pink-600 border-none text-white h-full py-2 px-4 hover:bg-pink-700">subcribe</button>
                </div>
                <Socials />
                <p class="text-white mt-24">&copy; 2023 Neon - All right Reserved. Proudly Published with Ghost</p>
            </div>
            <div>
                <LatestPosts />
            </div>
            <div class="flex flex-col">
                <Tags />
                <ul class="flex gap-x-4 mt-14">
                    <li class="text-white">
                        <a href="#!" class="hover:underline text-lg">Privacy policy</a>
                    </li>
                    <li class="text-white">
                        <a href="#!" class="hover:underline text-lg">Terms and conditions</a>
                    </li>
                    <li class="text-white">
                        <a href="#!" class="hover:underline text-lg">Contact</a>
                    </li>
                </ul>
                <div class="flex-grow flex items-end justify-end">
                    <a href="#navbar" class="text-white hover:text-pink-500 transition duration-300">
                        Back to top
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Socials from './Socials.vue';
import LatestPosts from './LatestPosts.vue';
import Tags from './Tags.vue';

</script>

<style lang="scss" scoped>

</style>