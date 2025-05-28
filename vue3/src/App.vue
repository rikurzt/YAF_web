<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import Navbar_and_Sidebar from "./components/Navbar_and_Sidebar.vue";
import Footer from "./components/Footer.vue";
import LoadingScreen from "./components/LoadingScreen.vue";

const router = useRouter()
const loadingProgress = ref(0)
const loadingText = ref('初始化中...')
const isLoading = ref(true)
const isFadingOut = ref(false)

// 更新載入狀態
const updateLoadingStatus = (progress: number, text: string) => {
  loadingProgress.value = Math.min(progress, 100);
  loadingText.value = text;
  console.log(`${loadingProgress.value}% - ${text}`);
};

// 預載入重要圖片的函數
const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  const promises = imageUrls.map((url) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); // 即使載入失敗也要繼續
      img.src = url;
    });
  });
  return Promise.all(promises);
};

// 檢查頁面中所有圖片是否載入完成的函數
const checkImagesLoaded = (): Promise<void> => {
  return new Promise((resolve) => {
    // 使用 requestAnimationFrame 確保 DOM 已更新
    requestAnimationFrame(() => {
      const images = document.querySelectorAll('img');
      let loadedCount = 0;
      const totalImages = images.length;

      console.log(`找到 ${totalImages} 張圖片需要載入`);

      if (totalImages === 0) {
        resolve();
        return;
      }

      const checkComplete = () => {
        loadedCount++;
        console.log(`圖片載入進度: ${loadedCount}/${totalImages}`);
        if (loadedCount === totalImages) {
          resolve();
        }
      };

      images.forEach((img, index) => {
        if (img.complete && img.naturalHeight !== 0) {
          console.log(`圖片 ${index + 1} 已快取，立即完成`);
          checkComplete();
        } else {
          img.addEventListener('load', () => {
            console.log(`圖片 ${index + 1} 載入完成`);
            checkComplete();
          });
          img.addEventListener('error', () => {
            console.log(`圖片 ${index + 1} 載入失敗`);
            checkComplete();
          });
        }
      });
    });
  });
};

// 等待路由元件載入完成
const waitForRouteLoaded = (): Promise<void> => {
  return new Promise((resolve) => {
    // 使用 nextTick 確保路由元件已渲染
    router.isReady().then(() => {
      // 再等一個 tick 確保組件完全載入
      setTimeout(() => resolve(), 100);
    });
  });
};

// 等待所有資源載入完成的函數
const waitForResourcesLoaded = async (): Promise<void> => {
  return new Promise((resolve) => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', () => resolve());
    }
  });
};

// 主要載入流程
const performLoading = async () => {
  try {
    updateLoadingStatus(5, "正在初始化...");
    
    // 1. 等待基本的 DOM 和初始資源載入
    await waitForResourcesLoaded();
    updateLoadingStatus(20, "基礎資源載入完成");
    
    // 2. 等待路由準備就緒
    await waitForRouteLoaded();
    updateLoadingStatus(35, "路由載入完成");
    
    // 3. 預載入關鍵圖片
    const criticalImages = [
      '/svg/YF06_雲緣起LOGO.svg',
      '/img/HomePage_Main_art_bg.png',
      '/img/HomePage_Main_art_rock.png',
      '/img/HomePage_Main_art_Bush_R.png',
      '/img/HomePage_Main_art_Bush_L.png',
      '/img/HomePage_Main_art_Fog.png',
      '/img/HomePage_Main_art_Vignettes.png',
      '/img/background_top.png',
      '/img/background_buttom.png',
      '/img/not_open.png',
    ];
    
    updateLoadingStatus(40, "開始載入關鍵圖片...");
    
    try {
      await preloadImages(criticalImages);
      updateLoadingStatus(65, "關鍵圖片載入完成");
    } catch (error) {
      updateLoadingStatus(65, "部分圖片載入失敗，繼續執行");
    }
    
    // 4. 給一點時間讓動態載入的圖片出現在 DOM 中
    await new Promise(resolve => setTimeout(resolve, 600));
    updateLoadingStatus(75, "檢查頁面圖片...");
    
    // 5. 檢查所有圖片是否載入完成
    await checkImagesLoaded();
    updateLoadingStatus(90, "所有圖片載入完成");
    
    // 6. 最少顯示 2 秒的載入動畫，確保使用者能看到完整的載入效果
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 1000));
    await minLoadTime;
    updateLoadingStatus(100, "載入完成，準備進入...");
    
    // 7. 等待一下讓用戶看到 100% 完成
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // 8. 隱藏載入動畫
    hideLoading();
    console.log("所有資源載入完成，loading 關閉");
    
  } catch (error) {
    console.error("載入過程中發生錯誤:", error);
    updateLoadingStatus(0, "載入失敗，即將強制進入...");
    // 如果出現錯誤，最多等待 8 秒後強制關閉載入動畫
    setTimeout(() => {
      hideLoading();
      console.log("強制關閉 loading");
    }, 8000);
  }
};

// 隱藏載入畫面
const hideLoading = () => {
  isFadingOut.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 800); // 等待淡出動畫完成
};

onMounted(() => {
  performLoading();
})

</script>

<template>
  <!-- 自定義載入畫面 -->
  <LoadingScreen 
    :isVisible="isLoading"
    :progress="loadingProgress"
    :text="loadingText"
    :class="{ 'fade-out': isFadingOut }"
  />

  <!-- 主要內容 -->
  <div v-if="!isLoading">
    <Navbar_and_Sidebar/>
    <div class="container-fluid justify-content-center p-0">
      <router-view class="router-view"></router-view>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
.container-fluid{
  width: 100vw;
  height: max-content;
  background-color: rgba(255, 0, 0, 0);
}
</style>
