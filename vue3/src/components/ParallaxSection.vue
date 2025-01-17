<template>
  <section :class="['parallax-section', `layer-${layer}`]" :style="backgroundStyle">
    <slot />
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// 使用 defineProps 定義屬性
const props = defineProps({
  image: String,
  layer: {
    type: Number,
    default: 1,
  },
});

// 使用 props 直接計算背景樣式
const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}));
</script>

<style scoped>
.parallax-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.layer-1 {
  transform: translateZ(-1px) scale(2);
}

.layer-2 {
  transform: translateZ(-0.5px) scale(1.5);
}

.layer-3 {
  transform: translateZ(0);
}
</style>
