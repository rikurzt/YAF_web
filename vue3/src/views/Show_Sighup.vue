<script setup lang="ts">
import { onMounted, ref } from "vue";

import ContentBlock from "../components/ContentBlock.vue";
import Google_Sheet from "../components/Google_Sheet.vue";

const defaultShowFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScGAx4iUulWK_EysKvuzy06zKpOP5kdd-YiN0Wsm_TRMsESng/viewform?embedded=true";
const defaultRandomDanceFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScSiyEpAzI3BV3Dqnb9eL8r1jlU_W33_1f_HcL2UVlMHbREgw/viewform?embedded=true";

const showFormUrl = ref(defaultShowFormUrl);
const randomDanceFormUrl = ref(defaultRandomDanceFormUrl);

const loadFormUrl = async (path: string, fallback: string) => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      return fallback;
    }
    const text = (await response.text()).trim();
    return text || fallback;
  } catch {
    return fallback;
  }
};

onMounted(async () => {
  showFormUrl.value = await loadFormUrl(
    import.meta.env.BASE_URL + "/txt/show_sign_up_form_url.txt",
    defaultShowFormUrl
  );
  randomDanceFormUrl.value = await loadFormUrl(
    import.meta.env.BASE_URL + "/txt/random_dance_form_url.txt",
    defaultRandomDanceFormUrl
  );
});
</script>

<template>
  <ContentBlock
      title="表演報名表單"
      :content="Google_Sheet"
      :isComponent="true"
      :componentProps="{
      src: showFormUrl,
      height: 800

    }"
  />
  <ContentBlock title="表演報名相關資訊" content="/markdown/表演報名.md" :isMarkdown="true" :force-visible="true"/>

  <ContentBlock
      title="隨機宅舞推薦"
      :content="Google_Sheet"
      :isComponent="true"
      :componentProps="{
      src: randomDanceFormUrl,
      height: 800

    }"
  />
 </template>

<style scoped>

</style>