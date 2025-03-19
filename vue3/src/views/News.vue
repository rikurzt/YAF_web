<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
</script>

<template>
  <ContentBlock title="最新消息" content=" " />
  <div class="my-5 pb-lg-5 "></div>

  <!-- 使用 https://www.commoninja.com/facebook-feed/ 製作-->

  <iframe src="https://widgets.commoninja.com/iframe/318e8df6-9fd6-455a-a382-cbad8d4ed74a"  frameborder="1" scrolling="no"></iframe>
  <div class="my-5 pb-lg-5 "></div>


</template>

<style scoped>

iframe {
  width: 100%; /* 預設寬度為 100% */
  height: 7500px;

}

@media only screen and (min-width: 1920px) {
  iframe {
    width: 1920px;

  }
}

@media only screen and (max-width: 400px) {
  iframe {
    width: 400px;
  }
}

</style>