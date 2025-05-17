<template>
  <div ref="captureArea" class="image-canvas">
    <img v-if="image" :src="image" class="bg-image" />
    <h1 class="overlay-title">{{ title }}</h1>
    <p class="overlay-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from 'vue';
import html2canvas from 'html2canvas';

const props = defineProps<{
  title: string;
  subtitle: string;
  image: string | null;
}>();

const captureArea = ref<HTMLElement | null>(null);

// 提供父層調用的 capture 方法
const capture = async () => {
  if (!captureArea.value) return;
  const canvas = await html2canvas(captureArea.value, {
    backgroundColor: null,
    scale: 1,
    useCORS: true
  });
  const link = document.createElement('a');
  link.download = 'downloaded-image.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
};

defineExpose({ capture });
</script>

<style scoped>
.image-canvas {
  position: relative;
  width: 800px;
  height: 600px;
  background: #f0f0f0;
  overflow: hidden;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-title {
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 32px;
  color: white;
  text-shadow: 2px 2px 4px black;
}

.overlay-subtitle {
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 4px black;
}
</style>
