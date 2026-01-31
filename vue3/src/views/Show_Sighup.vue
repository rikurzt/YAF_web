<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
import Google_Sheet from "../components/Google_Sheet.vue";
</script>

<template>
  <ContentBlock
      title="表演報名表單"
      :content="Google_Sheet"
      :isComponent="true"
      :componentProps="{
      src: 'https://docs.google.com/forms/d/e/1FAIpQLScGAx4iUulWK_EysKvuzy06zKpOP5kdd-YiN0Wsm_TRMsESng/viewform?embedded=true',
      height: 800

    }"
  />
  <ContentBlock title="表演報名相關資訊" content="/markdown/表演報名.md" :isMarkdown="true" :force-visible="true"/>

  <ContentBlock
      title="隨機宅舞推薦"
      :content="Google_Sheet"
      :isComponent="true"
      :componentProps="{
      src: 'https://docs.google.com/forms/d/e/1FAIpQLScSiyEpAzI3BV3Dqnb9eL8r1jlU_W33_1f_HcL2UVlMHbREgw/viewform?embedded=true',
      height: 800

    }"
  />
 </template>

<style scoped>

</style>