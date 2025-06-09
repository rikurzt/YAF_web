<template>
  <div class="col">
    <div 
      class="card shadow-sm" 
      :class="{ 'clickable': card.url }"
      @click="handleCardClick"
    >
      <div class="image-wrapper position-relative">
        <!-- 倒三角標籤 -->
        <div v-if="card.number" class="label-triangle">
          <span class="label-text">{{ card.number }}</span>
        </div>
        
      <!-- 圖片區 -->
        <div class="image-container">
      <img
          v-if="card.src && !imageError"
          :src="base_url+card.src"
          alt="Card image"
          class="card-img-top"
          @error="handleImageError"
      />
      <!-- 預設 SVG 占位圖 -->
      <svg v-else class="bd-placeholder-img card-img-top"
           width="100%" height="225"
           xmlns="http://www.w3.org/2000/svg"
           role="img" preserveAspectRatio="xMidYMid slice">
        <title>{{ card.title }}</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">{{ card.number || 'No Image' }}</text>
      </svg>
        </div>
      </div>

      <!-- 卡片內容 -->
      <div class="card-body">
        <h4 class=" py-2">{{ card.name }}</h4>
        <p class="card-text description">{{ card.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted">{{ card.tag }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
import { ref } from 'vue'

const { card } = defineProps({
  card: {
    type: Object,
    required: true
  }
})

const base_url = import.meta.env.BASE_URL
const imageError = ref(false)

const handleCardClick = () => {
  if (card.url && card.url.trim()) {
    window.open(card.url.trim(), '_blank')
  }
}

const handleImageError = () => {
  imageError.value = true
}
</script>

<style scoped>
.image-wrapper {
  position: relative;
}

.image-container {
  width: 100%;
  height: 225px; /* 固定高度 */
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa; /* 背景色防止空白 */
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 改為 contain 確保圖片完整顯示 */
  position: absolute;
  top: 0;
  left: 0;
}

.label-triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.6);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  display: flex;
  align-items: start;
  justify-content: center;
  padding-top: 4px;
  z-index: 2;
}

.label-text {
  color: white;
  font-size: 0.85rem;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding-top: 0.4rem;
  padding-right: 1rem;
}

.card-text{
  font-size: 0.75rem;
}

.description {
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* Hover 效果 */
.card {
  transition: all 0.3s ease;
}

.card.clickable {
  cursor: pointer;
}

.card.clickable:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.card.clickable:active {
  transform: translateY(-2px);
}
</style>