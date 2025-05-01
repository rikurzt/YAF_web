<template>
  <div>
    <div ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import html2canvas from 'html2canvas';
const content = ref(null);
//捕获截图
const capture = () => {
  if (content.value) {
    html2canvas(content.value).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = '雲緣起預定.png';
      link.click();
    });
  }
};
//暴露给父组件调用
defineExpose({capture})
</script>