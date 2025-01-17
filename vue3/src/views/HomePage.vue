<script setup lang="ts">
import ParallaxSection from '../components/ParallaxSection.vue';
</script>

<template>
    <ParallaxSection image="https://gj-events.gjs.tw/images/index-gj32n.png?20241110" :layer="1">
      <h1>第一層圖片</h1>
    </ParallaxSection>
    <ParallaxSection image="https://gj-events.gjs.tw/images/index-gj32n.png?20241110" :layer="2">
      <h1>第二層圖片</h1>
    </ParallaxSection>
    <ParallaxSection image="https://gj-events.gjs.tw/images/index-gj32n.png?20241110" :layer="3">
      <h1>第三層圖片</h1>
    </ParallaxSection>

</template>

<style scoped>

</style>