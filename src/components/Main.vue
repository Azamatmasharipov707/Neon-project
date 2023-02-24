<template>
    <div class="container flex gap-x-7 w-full">
        <div class="w-8/12 h-[104rem] overflow-hidden overflow-y-auto main__card">
            <MainCard />
        </div>
        <div class="w-4/12">
            <Posts />
        </div>

    </div>
</template>

<script setup>
import MainCard from './MainCard.vue';
import Posts from './Posts.vue';


</script>

<style scoped>
.main__card::-webkit-scrollbar {
    height: 0;
}
</style>