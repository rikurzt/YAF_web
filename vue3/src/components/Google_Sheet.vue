<template>
  <iframe
      :src="src"
      :height="height"
      width="100%"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
  >
    載入中…
  </iframe>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  height?: number
}>()
</script>

<style scoped>
iframe {
  width: 100%;
  border: none;
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
