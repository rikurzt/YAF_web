<template>
  <div v-if="isVisible" class="loading-overlay">
    <div class="loading-content">
      <div class="loading-logo-container">
        <div class="logo-wrapper">
          <!-- 背景半透明 logo -->
          <img 
            class="logo-background" 
            :src="logoPath" 
            alt="雲緣起 Logo" 
          />
          <!-- 載入進度遮罩 -->
          <div class="logo-mask" :style="{ height: progress + '%' }">
            <img 
              class="logo-foreground" 
              :src="logoPath" 
              alt="雲緣起 Logo" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  isVisible: boolean;
  progress: number;
  text: string;
}

defineProps<Props>();

// 確保與 App.vue 使用相同的路徑
const logoPath = computed(() => {
  return `${import.meta.env.BASE_URL}svg/YF05_雲緣起LOGO-01.svg`
});
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
}

.loading-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-wrapper {
  position: relative;
  width: 280px;
  height: 280px;
}

.logo-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  filter: brightness(0);
}

.logo-mask {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-foreground {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 280px;
  filter: brightness(0);
  opacity: 1;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .logo-wrapper {
    width: 200px;
    height: 200px;
  }
  
  .logo-foreground {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .logo-wrapper {
    width: 160px;
    height: 160px;
  }
  
  .logo-foreground {
    height: 160px;
  }
}

/* 載入完成時的淡出效果 */
.loading-overlay.fade-out {
  animation: fadeOut 0.8s ease-out forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style> 