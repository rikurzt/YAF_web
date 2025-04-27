<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
import traffic_page from "../components/traffic_page.vue"
</script>

<template>
  <ContentBlock title="交通方式" :content="traffic_page" :isComponent="true" :force-visible="true"/>

  <div class="my-5 pb-lg-5 "></div>

</template>

<style scoped>

</style>