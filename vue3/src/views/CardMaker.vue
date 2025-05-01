<template>

  <div>
    <ImageCapture ref="ImageCaptureRef">
      <ContentBlock title=""  :force-visible="true"/>
      <h1>預定卡片下載</h1>
      <p>Image Download</p>
    </ImageCapture>
    <button @click="capture">Capture</button>
  </div>
</template>

<script lang="ts" setup>
//引入ImageCapture组件
import ImageCapture from '../components/ImageCapture.vue'
import {ref} from "vue";
import ContentBlock from "../components/ContentBlock.vue";
import type { ComponentPublicInstance } from 'vue';

const ImageCaptureRef = ref<ComponentPublicInstance<{ capture: () => void }> | null>(null);
//捕获图片
const capture = () => {
  if (ImageCaptureRef.value) {
    ImageCaptureRef.value.capture();
  } else {
    console.warn('ImageCaptureRef is not ready.');
  }
};

</script>


<style scoped>

</style>
