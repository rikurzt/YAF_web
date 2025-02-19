<template>
  <div class="container my-5">
    <div class="w-75 mx-auto">
      <h1 class="fw-bold display-2 text-start mb-sm-5 mt-5 pb-5 pt-5">{{ title }}</h1>
      <div v-if="isHtml" v-html="content" class = "text-start fs-6 mx-auto ps-5"></div>
      <div v-else-if="isComponent">
        <component :is="contentComponent"></component>
      </div>
      <p v-else class = "text-start fs-6 mx-auto ps-5">{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: "STATEMENT"
    },
    content: {
      type: [String, Object],
      default: ""
    },
    isHtml: {
      type: Boolean,
      default: false
    },
    isComponent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    contentComponent() {
      return this.isComponent ? this.content : null;
    }
  },
};
</script>

<style scoped>
/* 這裡可以添加額外的自訂 CSS */
</style>
