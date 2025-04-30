<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
import Group_Sign from "../components/Group_Sign.vue";
import Google_Sheet from "../components/Google_Sheet.vue";
</script>

<template>
  <ContentBlock title="攤位報名重要日程" :content="Group_Sign" :isComponent="true" :force-visible="true"/>

  <ContentBlock title="報名相關資訊" content="/markdown/社團報名方式.md" :isMarkdown="true" />
  <ContentBlock
      title="報名表單"
      :content="Google_Sheet"
      :isComponent="true"
      :componentProps="{
      src: 'https://docs.google.com/forms/d/e/1FAIpQLScOGIws1M4o059aFfa75q6lCPPhjGVHYM0O9LKmVImhiqWLCg/viewform?embedded=true',
      height: 2066
    }"

  />
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