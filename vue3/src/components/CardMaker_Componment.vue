<template>
  <div class="container py-4">
    <div class="row">
      <!-- 左側欄位：設定 -->
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center">圖片內容設定</h5>
            <div class="mb-3">
              <label class="form-label">標題</label>
              <input type="text" class="form-control" v-model="title" />
            </div>
            <div class="mb-3">
              <label class="form-label">副標題</label>
              <input type="text" class="form-control" v-model="subtitle" />
            </div>
            <div class="mb-3">
              <label class="form-label">上傳圖片</label>
              <input type="file" class="form-control" @change="handleFileUpload" />
            </div>
            <button class="btn btn-primary w-100" @click="capture">下載圖片</button>
          </div>
        </div>
      </div>

      <!-- 右側欄位：圖片預覽 -->
      <div class="col-md-8">
        <div class="card">
          <div class="card-body text-center p-0">
            <h5 class="card-title">圖片預覽</h5>
            <div class="preview-wrapper">
              <ImageCapture ref="ImageCaptureRef" :title="title" :subtitle="subtitle" :image="imageDataUrl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ImageCapture from '../components/ImageCapture.vue'; // 你原本的元件
import type { ComponentPublicInstance } from 'vue';

const ImageCaptureRef = ref<ComponentPublicInstance<{ capture: () => void }> | null>(null);

const title = ref('');
const subtitle = ref('');
const imageDataUrl = ref<string | null>(null);

const handleFileUpload = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageDataUrl.value = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const capture = () => {
  if (ImageCaptureRef.value) {
    ImageCaptureRef.value.capture();
  } else {
    console.warn('ImageCaptureRef not ready');
  }
};
</script>

<style scoped>
.preview-wrapper {
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
}

/* 在小螢幕上縮小比例 */
@media (max-width: 768px) {
  .preview-wrapper {
    transform: scale(0.6);
    transform-origin: top center;
  }
}
</style>
