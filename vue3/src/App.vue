<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import Navbar_and_Sidebar from "./components/Navbar_and_Sidebar.vue";
import Footer from "./components/Footer.vue";

const router = useRouter()

// 檢查是否有初始載入器
const hasInitialLoader = () => {
  return window.InitialLoader && window.InitialLoader.isVisible();
};

// 更新載入狀態（整合初始載入器）
const updateLoadingStatus = (progress: number, text: string) => {
  console.log(`${progress}% - ${text}`);
  
  if (hasInitialLoader() && window.InitialLoader) {
    window.InitialLoader.updateProgress(progress, text);
  }
};

// 隱藏載入畫面
const hideLoading = () => {
  if (hasInitialLoader() && window.InitialLoader) {
    window.InitialLoader.hide();
  }
  console.log("所有資源載入完成，loading 關閉");
};

// 創建 preload link 元素
const createPreloadLink = (href: string): HTMLLinkElement => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = href;
  return link;
};

// 檢查圖片是否已經被瀏覽器快取或預載入
const isImageCached = (url: string): boolean => {
  // 檢查是否已有相同的 preload link
  const existingLink = document.querySelector(`link[rel="preload"][href="${url}"]`);
  if (existingLink) {
    return true;
  }
  
  // 檢查圖片本身的快取狀態
  const img = new Image();
  img.src = url;
  return img.complete && img.naturalWidth > 0;
};

// 使用 link preload 預載入圖片（避免重複載入）
const preloadImagesWithLinkTag = (imageUrls: string[]): Promise<void[]> => {
  const promises = imageUrls.map((url, index) => {
    return new Promise<void>((resolve) => {
      // 檢查圖片是否已快取或預載入
      if (isImageCached(url)) {
        console.log(`✓ 圖片 ${index + 1} 已快取或預載入，跳過: ${url}`);
        resolve();
        return;
      }

      console.log(`⏳ 開始預載入圖片 ${index + 1}: ${url}`);
      
      // 創建 preload link
      const link = createPreloadLink(url);
      
      // 監聽載入完成
      link.onload = () => {
        console.log(`✓ 圖片 ${index + 1} 預載入完成: ${url}`);
        resolve();
      };
      
      link.onerror = () => {
        console.warn(`✗ 圖片 ${index + 1} 預載入失敗: ${url}`);
        resolve(); // 即使載入失敗也要繼續
      };
      
      // 添加到 head
      document.head.appendChild(link);
    });
  });
  
  return Promise.all(promises);
};

// 檢查頁面中所有圖片是否載入完成（利用預載入的快取）
const checkImagesLoaded = (): Promise<void> => {
  return new Promise((resolve) => {
    let checkCount = 0;
    const maxChecks = 3;
    
    const performCheck = () => {
      checkCount++;
      console.log(`第 ${checkCount} 次檢查頁面圖片載入狀態...`);
      
      requestAnimationFrame(() => {
        const images = document.querySelectorAll('img:not([class*="initial-"])') as NodeListOf<HTMLImageElement>;
        let loadedCount = 0;
        const totalImages = images.length;

        console.log(`找到 ${totalImages} 張頁面圖片`);

        if (totalImages === 0) {
          if (checkCount < maxChecks) {
            setTimeout(performCheck, 300);
            return;
          } else {
            resolve();
            return;
          }
        }

        const checkComplete = () => {
          loadedCount++;
          console.log(`頁面圖片載入進度: ${loadedCount}/${totalImages}`);
          if (loadedCount === totalImages) {
            resolve();
          }
        };

        images.forEach((img, index) => {
          // 由於圖片已被預載入，大多數應該立即載入完成
          if (img.complete && img.naturalHeight !== 0) {
            console.log(`圖片 ${index + 1} 已載入（來自快取）: ${img.src}`);
            checkComplete();
          } else {
            console.log(`等待頁面圖片 ${index + 1}: ${img.src}`);
            
            // 設置較短的超時，因為圖片應該已被預載入
            const timeoutId = setTimeout(() => {
              console.log(`圖片 ${index + 1} 載入超時，繼續執行`);
              checkComplete();
            }, 1000);
            
            img.addEventListener('load', () => {
              clearTimeout(timeoutId);
              console.log(`頁面圖片 ${index + 1} 載入完成: ${img.src}`);
              checkComplete();
            });
            
            img.addEventListener('error', () => {
              clearTimeout(timeoutId);
              console.log(`頁面圖片 ${index + 1} 載入失敗: ${img.src}`);
              checkComplete();
            });
          }
        });
      });
    };
    
    performCheck();
  });
};

// 等待路由元件載入完成
const waitForRouteLoaded = (): Promise<void> => {
  return new Promise((resolve) => {
    router.isReady().then(() => {
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
    // 從初始載入器接管進度（如果存在）
    const startProgress = hasInitialLoader() ? 50 : 5;
    updateLoadingStatus(startProgress, "Vue 應用程式初始化完成");
    
    console.log('BASE_URL:', import.meta.env.BASE_URL);
    
    // 1. 等待基本的 DOM 和初始資源載入
    await waitForResourcesLoaded();
    updateLoadingStatus(60, "基礎資源載入完成");
    
    // 2. 等待路由準備就緒
    await waitForRouteLoaded();
    updateLoadingStatus(65, "路由載入完成");
    
    // 3. 使用 link preload 預載入關鍵圖片
    const criticalImages = [
      `${import.meta.env.BASE_URL}svg/YF05_雲緣起LOGO-01.svg`,
      `${import.meta.env.BASE_URL}img/HomePage_Main_art_bg.png`,
      `${import.meta.env.BASE_URL}img/HomePage_Main_art_rock.png`,
      `${import.meta.env.BASE_URL}img/HomePage_Main_art_Bush_R.png`,
      `${import.meta.env.BASE_URL}img/HomePage_Main_art_Bush_L.png`,
      `${import.meta.env.BASE_URL}img/HomePage_Main_art_Bush_back.png`,
      `${import.meta.env.BASE_URL}img/HomePage_Main_art_Fog.png`,
      `${import.meta.env.BASE_URL}img/HomePage_Main_art_Fog_2.png`,
      `${import.meta.env.BASE_URL}img/background_top.png`,
      `${import.meta.env.BASE_URL}img/background_buttom.png`,
      `${import.meta.env.BASE_URL}img/HomePage_Main_art_rock_back.png`,
      `${import.meta.env.BASE_URL}img/HomePage_Main_art_rock_back_2.png`,
      `${import.meta.env.BASE_URL}img/not_open.png`,
    ];
    
    console.log('開始使用 link preload 預載入圖片...');
    updateLoadingStatus(70, "預載入關鍵圖片...");
    
    try {
      await preloadImagesWithLinkTag(criticalImages);
      updateLoadingStatus(85, "關鍵圖片預載入完成");
    } catch (error) {
      console.error('圖片預載入錯誤:', error);
      updateLoadingStatus(85, "部分圖片預載入失敗，繼續執行");
    }
    
    // 4. 給時間讓頁面中的圖片元素出現在 DOM 中
    await new Promise(resolve => setTimeout(resolve, 300));
    updateLoadingStatus(90, "檢查頁面圖片...");
    
    // 5. 檢查頁面中的圖片是否都已載入（應該直接從快取載入）
    await checkImagesLoaded();
    updateLoadingStatus(95, "所有圖片載入完成");
    
    // 6. 最少顯示載入動畫，確保使用者能看到完整的載入效果
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 400));
    await minLoadTime;
    updateLoadingStatus(100, "載入完成，準備進入...");
    
    // 7. 等待一下讓用戶看到 100% 完成
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // 8. 隱藏載入動畫
    hideLoading();
    
  } catch (error) {
    console.error("載入過程中發生錯誤:", error);
    updateLoadingStatus(0, "載入失敗，即將強制進入...");
    setTimeout(() => {
      hideLoading();
      console.log("強制關閉 loading");
    }, 3000);
  }
};

onMounted(() => {
  performLoading();
})

</script>

<template>
  <!-- 主要內容 -->
  <div>
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
