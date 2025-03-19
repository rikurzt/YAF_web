<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
</script>

<template>
  <ContentBlock title="最新消息" content=" " />
  <div class="my-5 pb-lg-5 "></div>
  <div class="my-5 pb-lg-5 "></div>
  <iframe class="my-lg-5 pb-lg-5 ps-lg-5 ps-3  embed-responsive-item " src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYunlinAnimeFestival&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="400"  height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="" allow="autoplay;  clipboard-write; encrypted-media; picture-in-picture; "></iframe>
  <div class="my-5 pb-lg-5 "></div>
  <div class="my-5 pb-5 "></div>
</template>

<style scoped>

@media (min-width: 1080px) {
  iframe  {
    transform: scale(2);
  }
}

</style>