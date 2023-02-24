<template>
    <div class="mb-12">
        <h2 class="font-bold text-white text-xl mb-10">Tags</h2>
        <div class="flex flex-wrap gap-2">
            <a href="#!" v-for="btn in btns" class="bg-zinc-600 rounded-full w-max py-1 px-3 flex items-center text-white gap-x-1" >
                <span class="w-2 h-2 rounded-full mr-1" :style="{background: btn.btnColor}" ></span>
                <span>{{ btn.btn }}</span>
            </a>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const btns = reactive([
    {btn: 'Food', btnColor: '#B43ADF'},
    {btn: 'Health', btnColor: '#1dbf2f'},
    {btn: 'Ispiration', btnColor: '#04baf6'},
    {btn: 'Lifestyle', btnColor: '#4d61ff'},
    {btn: 'Nature', btnColor: '#fd94ff'},
    {btn: 'Technology', btnColor: '#f18509'},
    {btn: 'Travel', btnColor: '#E10689'}
])
</script>

<style lang="scss" scoped>

</style>