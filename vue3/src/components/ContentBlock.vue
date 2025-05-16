<template>
  <div
      ref="containerRef"
      class="container my-5 fade-section"
      :class="{ 'visible': isVisible }"
  >
    <div class="w-75 mx-auto">
      <h1 class="fw-bold display-2 text-start mb-sm-5 mt-5 pb-5 pt-5">{{ title }}</h1>

      <div v-if="disable" class="text-center">
        <img src="/img/not_open.png" alt="Not Available" class="img-fluid" style="height: 50vh;" />
      </div>
      <div v-else>
        <div v-if="isHtml" v-html="content" class="text-start ps-lg-5 mx-auto fs-6"></div>
        <div v-else-if="isMarkdown" v-html="parsedMarkdown" class="text-start ps-lg-5 mx-auto fs-6"></div>
        <div v-else-if="isComponent">
          <component :is="contentComponent" v-bind="componentProps"></component>
        </div>
        <p v-else-if="content" class="text-start ps-lg-5 mx-auto fs-6">{{ content }}</p>
        <div v-else class="text-center">
          <img src="/img/not_open.png" alt="Not Available" class="img-fluid" style="height: 50vh;" />
        </div>
      </div>
    </div>
  </div>
  <div class="my-lg-5 pb-lg-5"></div>
</template>

<script lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { marked } from "marked";

export default {
  props: {
    title: { type: String, default: "" },
    content: { type: [String, Object], default: "" },
    isHtml: { type: Boolean, default: false },
    isComponent: { type: Boolean, default: false },
    isMarkdown: { type: Boolean, default: false },
    componentProps: { type: Object, default: () => ({}) },
    disable: { type: Boolean, default: false },
    forceVisible: { type: Boolean, default: false }   // 新增！強制顯示用
  },
  setup(props) {
    const markdownContent = ref("# hello");
    const containerRef = ref<HTMLElement | null>(null);
    const isVisible = ref(false);

    const onScroll = () => {
      if (containerRef.value) {
        const rect = containerRef.value.getBoundingClientRect();
        if (rect.top <= 200 && !isVisible.value) {
          isVisible.value = true;
          window.removeEventListener('scroll', onScroll);
        }
      }
    };

    onMounted(async () => {
      if (props.isMarkdown && typeof props.content === "string") {
        try {
          const response = await fetch(import.meta.env.BASE_URL + props.content);
          markdownContent.value = await response.text();
        } catch (error) {
          console.error("讀取 Markdown 失敗：", error);
          markdownContent.value = "無法載入 Markdown 檔案。";
        }
      }

      if (props.forceVisible) {
        isVisible.value = true;
      } else {
        window.addEventListener('scroll', onScroll);
        onScroll(); // 頁面一進來也判斷一次
      }
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll);
    });

    const parsedMarkdown = computed(() => {
      return props.isMarkdown ? marked.parse(markdownContent.value) : "";
    });

    const contentComponent = computed(() => {
      return props.isComponent && typeof props.content === "object" ? props.content : null;
    });

    return { parsedMarkdown, contentComponent, containerRef, isVisible };
  }
};
</script>

<style scoped>
.fade-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-section.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
