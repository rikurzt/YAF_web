<template>
  <div class="container-fluid py-4">
    <div class="row g-3">
      <!-- 左側欄位：設定 -->
      <div class="col-lg-4 col-md-5 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title text-center mb-4">圖片內容設定</h5>
            <div class="mb-3">
              <label class="form-label">暱稱</label>
              <input type="text" class="form-control" v-model="title" placeholder="輸入標題" />
            </div>
            <div class="mb-3">
              <label class="form-label">留言內容</label>
              <input type="text" class="form-control" v-model="subtitle" placeholder="輸入副標題" />
            </div>
            <div class="mb-3">
              <label class="form-label">上傳圖片</label>
              <input type="file" class="form-control" @change="handleFileUpload" accept="image/*" />
            </div>
            <button class="btn btn-primary w-100 btn-lg" @click="capture">
              <i class="fas fa-download me-2"></i>下載圖片
            </button>
          </div>
        </div>
      </div>

      <!-- 右側欄位：圖片預覽 -->
      <div class="col-lg-8 col-md-7 ">
        <div class="card h-100 p-1">
          <div class="card-body text-center p-2">
            <h5 class="card-title mb-3">圖片預覽</h5>
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
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 平板和桌面 */
@media (min-width: 768px) {
  .preview-wrapper {
    min-height: 400px;
  }
}

/* 手機版本 */
@media (max-width: 767px) {
  .container-fluid {
    padding: 1rem;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .preview-wrapper {
    padding: 0.5rem;
  }
  
  .btn-lg {
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
  }
}

/* 超小螢幕 */
@media (max-width: 480px) {
  .container-fluid {
    padding: 0.5rem;
  }
  
  .card-title {
    font-size: 1.1rem;
  }
  
  .form-label {
    font-size: 0.9rem;
  }
  
  .form-control {
    font-size: 0.9rem;
  }
}
</style>
