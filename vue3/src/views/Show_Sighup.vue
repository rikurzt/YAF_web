<script setup lang="ts">
import { onMounted, ref } from "vue";

import ContentBlock from "../components/ContentBlock.vue";
import Google_Sheet from "../components/Google_Sheet.vue";


const showFormUrl = ref("");
const randomDanceFormUrl = ref("");

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
  showFormUrl.value = await loadFormUrl(import.meta.env.BASE_URL +"/txt/show_sign_up_form_url.txt"
  );
  randomDanceFormUrl.value = await loadFormUrl(import.meta.env.BASE_URL +"/txt/random_dance_form_url.txt"
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