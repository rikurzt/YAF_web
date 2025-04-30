<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
import Google_Sheet from "../components/Google_Sheet.vue";
</script>

<template>
  <ContentBlock title="表演報名" content="/markdown/表演報名.md" :isMarkdown="true" :force-visible="true"/>

  <ContentBlock
      title="隨機宅舞推薦"
      :content="Google_Sheet"
      :isComponent="true"
      :componentProps="{
      src: 'https://docs.google.com/forms/d/e/1FAIpQLScT-nQ0Jus0W_HfFRQGlYb-ir6ut5cRBBCP8Y2E8mDd_zlaFg/viewform?embedded=true'
    }"
  />

</template>

<style scoped>

</style>