<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
</script>

<template>
  <ContentBlock title="交通方式" content="" :isHtml="true" />
  <div class="container">
    <div class="row align-items-start">
      <div class="col-lg col-md-6">
        <img class="img-fluid" src="/img/traffic_map.png" alt="">
      </div>
      <div class="col-lg col-md-6">
        <ContentBlock title="" content="/markdown/交通方式.md" :isMarkdown="true" />
      </div>
    </div>

  </div>
  <div class="my-5 pb-lg-5 "></div>

</template>

<style scoped>

</style>