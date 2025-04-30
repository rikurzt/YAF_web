<script setup lang="ts">

</script>

<template>
  <div class="iframe-wrapper">
    <iframe
        :src="src"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        allowfullscreen
    >
      載入中…
    </iframe>
  </div>
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