<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
</script>

<template>
  <ContentBlock title="最新消息" content=" " />
  <div class="my-5 pb-lg-5 "></div>
  <!-- 使用 https://www.commoninja.com/facebook-feed/ 製作-->
  <div class="container">
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYunlinAnimeFestival%3Flocale%3Dzh_TW&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
  </div>
  <div class="my-5 pb-lg-5 "></div>


</template>

<style scoped>

iframe {
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 1;
}

@media only screen and (min-width: 1080px) {
  iframe {
    scale: 1.35;
    padding-left: 20vw;
  }
  img{
    width: 50%
  }
}

@media only screen and (max-width: 486px) {
  iframe {
    width: 100%;
    scale: 1;
    padding-left: 5vw;
  }
}

</style>