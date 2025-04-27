<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
</script>

<template>
  <ContentBlock title="表演報名" content="/markdown/表演報名.md" :isMarkdown="true" :force-visible="true"/>
  <ContentBlock title="隨機宅舞推薦" content=" "  />
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScT-nQ0Jus0W_HfFRQGlYb-ir6ut5cRBBCP8Y2E8mDd_zlaFg/viewform?embedded=true" width="640" height="766" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>
  <div class="my-5 pb-lg-5 "></div>
</template>

<style scoped>
iframe {
  width: 100%; /* 預設寬度為 100% */

}

@media only screen and (min-width: 1920px) {
  iframe {
    width: 1920px;

  }
}

@media only screen and (max-width: 400px) {
  iframe {
    width: 360px;
  }
}

@media only screen and (max-width: 300px) {
  iframe {
    width: 280px;
  }
}
</style>