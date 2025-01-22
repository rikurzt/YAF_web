<script setup lang="ts">
import ParallaxSection from '../components/ParallaxSection.vue';
</script>

<template>
    <ParallaxSection image="../assets/HomePage_Main_art.png" :layer="1">
      <h1>第一層圖片</h1>
    </ParallaxSection>
    <ParallaxSection image="../assets/HomePage_Main_art.png" :layer="2">
      <h1>第二層圖片</h1>
    </ParallaxSection>
    <ParallaxSection image="../assets/HomePage_Main_art.png" :layer="3">
      <h1>第三層圖片</h1>
    </ParallaxSection>

</template>

<style scoped>

</style>