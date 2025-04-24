<template>
  <div class="container my-5">
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
          <img src="/img/not_open.png" alt="Not Available" class="img-fluid" style="height: 50vh; " />
        </div>
      </div>
    </div>
  </div>
  <div class="my-5 pb-lg-5 "></div>
</template>



<script lang="ts">
import { ref, computed, onMounted } from "vue";
import { marked } from "marked";

export default {
  props: {
    title: {
      type: String,
      default: ""
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
    },
    isMarkdown: {
      type: Boolean,
      default: false
    },
    componentProps: {
      type: Object,
      default: () => ({})
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const markdownContent = ref("# hello");

    // 當 content 是 Markdown 檔案時，讀取內容
    onMounted(async () => {
      if (props.isMarkdown && typeof props.content === "string") {
        try {
          const response =await fetch(import.meta.env.BASE_URL+props.content);
          markdownContent.value = await response.text();
        } catch (error) {
          console.error("讀取 Markdown 失敗：", error);
          markdownContent.value = "無法載入 Markdown 檔案。";
        }
      }
    });

    // 解析 Markdown
    const parsedMarkdown = computed(() => {
      return props.isMarkdown ? marked(markdownContent.value) : "";
    });

    // 確保 Vue 組件被正確解析
    const contentComponent = computed(() => {
      return props.isComponent && typeof props.content === "object" ? props.content : null;
    });

    return { parsedMarkdown, contentComponent };
  },
  computed: {
    contentComponent():any {
      return this.isComponent ? this.content : null;
    }
  },

};
</script>

<style scoped>

</style>
