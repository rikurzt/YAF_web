<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
import Group_Sign from "../components/Group_Sign.vue";
</script>

<template>
  <ContentBlock title="攤位報名重要日程" :content="Group_Sign" :isComponent="true"/>

  <ContentBlock title="報名相關資訊" content="/markdown/社團報名方式.md" :isMarkdown="true" />
  <ContentBlock title="報名表單" content=""  />
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOGIws1M4o059aFfa75q6lCPPhjGVHYM0O9LKmVImhiqWLCg/viewform?embedded=true" width="640" height="2066" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>
  <div class="my-5 pb-lg-5 "></div>
</template>

<style scoped>

</style>