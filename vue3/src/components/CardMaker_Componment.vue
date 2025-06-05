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
              <input type="text" class="form-control" v-model="message" placeholder="輸入副標題" />
            </div>
            
            <!-- 類別選擇 -->
            <div class="mb-3">
              <label class="form-label">類別</label>
              <div class="d-flex gap-3">
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="radio" 
                    name="category" 
                    id="coser" 
                    value="COSER" 
                    v-model="category"
                  />
                  <label class="form-check-label" for="coser">
                    COSER
                  </label>
                </div>
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="radio" 
                    name="category" 
                    id="photography" 
                    value="攝影" 
                    v-model="category"
                  />
                  <label class="form-check-label" for="photography">
                    攝影
                  </label>
                </div>
              </div>
            </div>
            
            <div class="mb-3">
              <label class="form-label">上傳圖片</label>
              <input type="file" class="form-control" @change="handleFileUpload" accept="image/*" />
            </div>
            
            <!-- 圖片位置調整滑條 -->
            <div v-if="imageDataUrl" class="mb-3">
              <label class="form-label">圖片左右位置調整</label>
              <div class="d-flex align-items-center gap-3">
                <input 
                  type="range" 
                  class="form-range flex-grow-1" 
                  min="-50" 
                  max="50" 
                  step="1" 
                  v-model.number="imageOffsetX"
                />
              </div>
              <small class="form-text text-muted">向左拖動向左移動圖片，向右拖動向右移動圖片</small>
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
              <ImageCapture 
                ref="ImageCaptureRef" 
                :title="title" 
                :subtitle="message" 
                :image="imageDataUrl" 
                :image-offset-x="imageOffsetX" 
                :category="category"
                @canvas-click="showPreview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 圖片放大預覽模態框 -->
    <div v-if="showModal" class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0, 0, 0, 0.8);">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <canvas ref="modalCanvas" class="img-fluid" @click="closeModal" style="cursor: pointer; max-width: 90vw; max-height: 90vh;"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue';
import ImageCapture from '../components/ImageCapture.vue'; // 你原本的元件
import type { ComponentPublicInstance } from 'vue';

const ImageCaptureRef = ref<ComponentPublicInstance<{ capture: () => void }> | null>(null);

const title = ref('雲緣起');
const imageDataUrl = ref<string | null>(null);
const imageOffsetX = ref(0);
const category = ref('COSER');
const message = ref('');
const showModal = ref(false);
const modalCanvas = ref<HTMLCanvasElement | null>(null);

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

const showPreview = async () => {
  showModal.value = true;
  
  // 等待模態框渲染完成
  await nextTick();
  
  if (modalCanvas.value && ImageCaptureRef.value) {
    // 獲取原始Canvas
    const originalCanvas = ImageCaptureRef.value.$refs?.previewCanvas as HTMLCanvasElement;
    
    if (originalCanvas) {
      // 設置模態框Canvas尺寸
      modalCanvas.value.width = 800;
      modalCanvas.value.height = 800;
      
      const modalCtx = modalCanvas.value.getContext('2d');
      if (modalCtx) {
        // 清空Canvas
        modalCtx.clearRect(0, 0, 800, 800);
        
        // 複製原始Canvas內容到模態框Canvas
        modalCtx.drawImage(originalCanvas, 0, 0, originalCanvas.width, originalCanvas.height, 0, 0, 800, 800);
      }
    }
  }
};

const closeModal = () => {
  showModal.value = false;
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
