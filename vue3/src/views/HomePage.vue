<script setup lang="ts">
import ParallaxSection from '../components/ParallaxSection.vue';
</script>

<template>
    <ParallaxSection image="https://raw.githubusercontent.com/rikurzt/YAF_web/refs/heads/master/vue3/src/assets/HomePage_Main_art.png?token=GHSAT0AAAAAAC5CJK3NIA65VND2AHNVEHVAZ4RHSAQ" :layer="1">
      <h1>第一層圖片</h1>
    </ParallaxSection>
    <ParallaxSection image="https://raw.githubusercontent.com/rikurzt/YAF_web/refs/heads/master/vue3/src/assets/HomePage_Main_art.png?token=GHSAT0AAAAAAC5CJK3NIA65VND2AHNVEHVAZ4RHSAQ" :layer="2">
      <h1>第二層圖片</h1>
    </ParallaxSection>
    <ParallaxSection image="https://raw.githubusercontent.com/rikurzt/YAF_web/refs/heads/master/vue3/src/assets/HomePage_Main_art.png?token=GHSAT0AAAAAAC5CJK3NIA65VND2AHNVEHVAZ4RHSAQ" :layer="3">
      <h1>第三層圖片</h1>
    </ParallaxSection>

</template>

<style scoped>

</style>