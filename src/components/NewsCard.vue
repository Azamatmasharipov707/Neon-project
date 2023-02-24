<template>
  <div>
    <div class="bg-zinc-900 max-w-4xl flex items-center p-8 gap-x-6 mt-9 rounded-3xl" >
      <img :src="props.news.image" alt="" class="w-72 h-72 object-cover rounded-3xl" />
      <div>
        <div>
          <a href="#!" class="bg-zinc-600 rounded-full w-max py-1 px-3 flex items-center text-white gap-x-1" >
            <span :style="{ background: props.news.btnColor }" class="w-2 h-2 rounded-full mr-1 block"></span>
            <span>{{ props.news.btn }}</span>
          </a>
          <h2 class="text-white text-4xl font-bold my-4">
            {{ props.news.title }}
          </h2>
          <p class="text-zinc-400">{{ props.news.text }}</p>
          <div class="flex items-center gap-x-3 text-zinc-500 text-sm font-semibold mt-5">
            <div class="flex items-center gap-x-1">
              <font-awesome-icon icon="fa-solid fa-calendar" />
              <span>May 2, 2022</span>
            </div>
            <div class="flex items-center gap-x-1">
              <font-awesome-icon icon="fa-solid fa-clock" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    news: Object
})
</script>

<style lang="scss" scoped></style>
