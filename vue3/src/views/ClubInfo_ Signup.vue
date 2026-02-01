<script setup lang="ts">
import { onMounted, ref } from "vue";

import ContentBlock from "../components/ContentBlock.vue";
import Group_Sign from "../components/Group_Sign.vue";
import Google_Sheet from "../components/Google_Sheet.vue";


const formUrl = ref("");

onMounted(async () => {
  try {
    const response = await fetch(import.meta.env.BASE_URL +"/txt/club_sign_up_form_url.txt");
    if (!response.ok) {
      return;
    }
    const text = (await response.text()).trim();
    if (text) {
      formUrl.value = text;
    }
  } catch {
    // Keep default URL on network or parse errors.
  }
});
</script>

<template>
  <ContentBlock title="攤位報名重要日程" :content="Group_Sign" :isComponent="true" :force-visible="true"/>
  <ContentBlock
      title="報名表單"
      :content="Google_Sheet"
      :isComponent="true"
      :componentProps="{
      src: formUrl,
      height: 2066
    }"
  />
  <ContentBlock title="報名相關資訊" content="/markdown/社團報名方式.md" :isMarkdown="true" />

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