<template>
  <div>
    <NewsCard v-for="item in news" :news="item" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import NewsCard from './NewsCard.vue';

const news = reactive([
  {
    image:  new URL('../images/main-card-1.jfif', import.meta.url),
    title: 'Autumn is a second spring when every leaf is a flower',
    text: 'She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise almost every body and every thing I had hitherto seen; predicted my marrying into some family of the',
    btn: 'Nature',
    btnColor: '#fd94ff'
  },
  {
    image:  new URL('../images/main-card-2.jfif', import.meta.url),
    title: 'Never let your memories be greater than your dreams',
    text: 'Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time backed to the east, and there was a shudder amongst the watchers on',
    btn: 'Travel',
    btnColor: '#E10689'
  },
  {
    image:  new URL('../images/main-card-3.jfif', import.meta.url),
    title: 'Dramatically improve your cooking using just your imagination',
    text: 'You cannot too assiduously attend to Madame Duval herself; but I would wish you to mix as little as possible with her associates, who are not likely to be among those whose acquaintance would reflect credit upon you.',
    btn: 'Food',
    btnColor: '#B43ADF'
  },
  {
    image:  new URL('../images/slider-img.jfif', import.meta.url),
    title: 'Self-observation is the first step of inner unfolding',
    text: "Mr. Branghton's house is small and inconvenient; though his shop, which takes in all the ground floor, is large and commodious. I believe I told you before, that he is a silver-smith.",
    btn: 'Lifestyle',
    btnColor: '#4d61ff'
  },
  {
    image:  new URL('../images/main-card-4.jfif', import.meta.url),
    title: 'It is during our darkest moments that we must focus to see the light',
    text: "Mina took a growing interest in everything and I was rejoiced to see that the exigency of affairs was helping her to forget for a time the terrible experience of the night. She was very, very pale",
    btn: 'Inspiration',
    btnColor: '#04baf6'
  },
  
])
</script>

<style lang="scss" scoped></style>
