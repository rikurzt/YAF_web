<template>
  <div class="canvas-container">
    <canvas 
      ref="previewCanvas" 
      class="preview-canvas"
    ></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose, computed, watch, onMounted, nextTick } from 'vue';

const props = defineProps<{
  title: string;
  subtitle: string;
  image: string | null;
  imageOffsetX: number;
  category: string;
}>();

const previewCanvas = ref<HTMLCanvasElement | null>(null);
const baseImageCache = ref<HTMLImageElement | null>(null);
const userImageCache = ref<HTMLImageElement | null>(null);
const canvasSize = ref({ width: 800, height: 800 });

// 底圖路徑
const baseImageUrl = computed(() => {
  return import.meta.env.BASE_URL + 'img/card_base.jpg';
});

// 載入圖片的 Promise 函數
const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.crossOrigin = 'anonymous';
    img.src = src;
  });
};

// 繪製文字的函數（支援裁切和自動換行）
const drawText = (
  ctx: CanvasRenderingContext2D, 
  text: string, 
  x: number, 
  y: number, 
  width: number,
  height: number,
  fontSize: number, 
  align: 'left' | 'right' | 'center' = 'left',
  baseline: 'top' | 'bottom' | 'middle' = 'top'
) => {
  // 設定裁切區域
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.clip();
  
  ctx.font = `bold ${fontSize}px "Microsoft JhengHei", "PingFang TC", "Helvetica Neue", Arial, sans-serif`;
  ctx.fillStyle = '#2c3e50';
  
  // 文字陰影效果
  ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  
  // 添加內邊距
  const padding = 8;
  const textAreaX = x + padding;
  const textAreaY = y + padding;
  const textAreaWidth = width - padding * 2;
  const textAreaHeight = height - padding * 2;
  
  // 文字換行處理
  const words = text.split('');
  const lines: string[] = [];
  let currentLine = '';
  
  for (let i = 0; i < words.length; i++) {
    const testLine = currentLine + words[i];
    const metrics = ctx.measureText(testLine);
    
    if (metrics.width > textAreaWidth && currentLine !== '') {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  // 計算行高
  const lineHeight = fontSize * 1.2;
  const totalTextHeight = lines.length * lineHeight;
  
  // 計算起始Y位置（根據對齊方式）
  let startY = textAreaY;
  if (baseline === 'middle') {
    startY = textAreaY + (textAreaHeight - totalTextHeight) / 2;
  } else if (baseline === 'bottom') {
    startY = textAreaY + textAreaHeight - totalTextHeight;
  }
  
  // 繪製每一行
  lines.forEach((line, index) => {
    let lineX = textAreaX;
    
    if (align === 'center') {
      const lineWidth = ctx.measureText(line).width;
      lineX = textAreaX + (textAreaWidth - lineWidth) / 2;
    } else if (align === 'right') {
      const lineWidth = ctx.measureText(line).width;
      lineX = textAreaX + textAreaWidth - lineWidth;
    }
    
    const lineY = startY + index * lineHeight + fontSize;
    ctx.fillText(line, lineX, lineY);
  });
  
  // 重置陰影
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  
  ctx.restore();
};

// 渲染 Canvas 內容
const renderCanvas = async (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  try {
    // 1. 載入並設定底圖尺寸
    if (!baseImageCache.value) {
      try {
        baseImageCache.value = await loadImage(baseImageUrl.value);
        console.log('底圖載入成功');
        
        // 根據底圖實際比例調整Canvas尺寸
        const imgWidth = baseImageCache.value.width;
        const imgHeight = baseImageCache.value.height;
        const maxSize = 2400; //實際下載的的最大寬度
        
        // 計算縮放比例，保持底圖比例
        const scale = Math.min(maxSize / imgWidth, maxSize / imgHeight);
        const newWidth = Math.round(imgWidth * scale);
        const newHeight = Math.round(imgHeight * scale);
        
        // 更新Canvas尺寸
        canvas.width = newWidth;
        canvas.height = newHeight;
        canvasSize.value = { width: newWidth, height: newHeight };
        
        console.log(`Canvas尺寸調整為: ${newWidth}x${newHeight}`);
      } catch (error) {
        console.warn('底圖載入失敗:', error);
      }
    }

    // 清空 Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (baseImageCache.value) {
      // 底圖完全填滿Canvas
      ctx.drawImage(baseImageCache.value, 0, 0, canvas.width, canvas.height);
    }

    // 2. 繪製用戶上傳的圖片
    if (props.image) {
      if (!userImageCache.value || userImageCache.value.src !== props.image) {
        try {
          userImageCache.value = await loadImage(props.image);
          console.log('用戶圖片載入成功');
        } catch (error) {
          console.warn('用戶圖片載入失敗:', error);
          userImageCache.value = null;
        }
      }

      if (userImageCache.value) {
        // 調整用戶圖片位置到中間大白框內
        const imgX = canvas.width * 0.447; // 中間白框 left
        const imgY = canvas.height * 0.076; // 中間白框 top
        const imgWidth = canvas.width * 0.342; // 中間白框 width
        const imgHeight = canvas.height * 0.763; // 中間白框 height
        
        // 設定裁切區域，確保圖片不超出白框
        ctx.save();
        ctx.beginPath();
        
        // 計算圓角半徑 (12mm ≈ 45.35px at 96 DPI)
        const cornerRadius = 34;
        
        // 繪製圓角矩形路徑
        ctx.moveTo(imgX + cornerRadius, imgY);
        ctx.lineTo(imgX + imgWidth - cornerRadius, imgY);
        ctx.quadraticCurveTo(imgX + imgWidth, imgY, imgX + imgWidth, imgY + cornerRadius);
        ctx.lineTo(imgX + imgWidth, imgY + imgHeight - cornerRadius);
        ctx.quadraticCurveTo(imgX + imgWidth, imgY + imgHeight, imgX + imgWidth - cornerRadius, imgY + imgHeight);
        ctx.lineTo(imgX + cornerRadius, imgY + imgHeight);
        ctx.quadraticCurveTo(imgX, imgY + imgHeight, imgX, imgY + imgHeight - cornerRadius);
        ctx.lineTo(imgX, imgY + cornerRadius);
        ctx.quadraticCurveTo(imgX, imgY, imgX + cornerRadius, imgY);
        ctx.closePath();
        ctx.clip();
        
        // 計算圖片的最佳填滿尺寸（保持比例並填滿容器）
        const imgAspect = userImageCache.value.width / userImageCache.value.height;
        const containerAspect = imgWidth / imgHeight;
        
        let drawWidth, drawHeight, drawX, drawY;
        
        if (imgAspect > containerAspect) {
          // 圖片較寬，以高度為準
          drawHeight = imgHeight;
          drawWidth = drawHeight * imgAspect;
          // 應用水平偏移量調整
          const offsetPercent = props.imageOffsetX / 100;
          const maxOffset = (drawWidth - imgWidth) / 2;
          drawX = imgX - maxOffset + (maxOffset * offsetPercent);
          drawY = imgY;
        } else {
          // 圖片較高，以寬度為準
          drawWidth = imgWidth;
          drawHeight = drawWidth / imgAspect;
          drawX = imgX;
          drawY = imgY - (drawHeight - imgHeight) / 2; // 居中
        }
        
        // 繪製用戶圖片，填滿容器
        ctx.drawImage(userImageCache.value, drawX, drawY, drawWidth, drawHeight);
        
        ctx.restore();
      }
    } else {
      // 清除用戶圖片緩存
      userImageCache.value = null;
    }

    // 3. 繪製標題到上方白框（稱呼）
    if (props.title) {
      // 上方白框位置（稱呼區域）
      const titleX = canvas.width * 0.025; // 左側白框 left
      const titleY = canvas.height * 0.52; // 稱呼白框 top
      const titleWidth = canvas.width * 0.35; // 左側白框 width
      const titleHeight = canvas.height * 0.08; // 稱呼白框 height
      
      const fontSize = Math.round(canvas.width * 0.03); // 動態字體大小
      drawText(ctx, props.title, titleX, titleY, titleWidth, titleHeight, fontSize, 'center', 'middle');
    }
    
    // 3.5 繪製類別到LOGO下面
    if (props.category) {
      // LOGO下方位置（類別區域）
      const categoryX = canvas.width * 0.025; // 左側對齊
      const categoryY = canvas.height * 0.325; // LOGO下方位置
      const categoryWidth = canvas.width * 0.35; // 左側區域寬度
      const categoryHeight = canvas.height * 0.06; // 類別區域高度
      
      const fontSize = Math.round(canvas.width * 0.04); // 較小的字體
      drawText(ctx, props.category, categoryX, categoryY, categoryWidth, categoryHeight, fontSize, 'center', 'middle');
    }
    
    // 4. 繪製副標題到下方白框（備註）
    if (props.subtitle) {
      // 下方白框位置（備註區域）
      const subtitleX = canvas.width * 0.025; // 左側白框 left
      const subtitleY = canvas.height * 0.70; // 備註白框 top
      const subtitleWidth = canvas.width * 0.35; // 左側白框 width
      const subtitleHeight = canvas.height * 0.22; // 備註白框 height
      
      const fontSize = Math.round(canvas.width * 0.025); // 動態字體大小
      drawText(ctx, props.subtitle, subtitleX, subtitleY, subtitleWidth, subtitleHeight, fontSize, 'left', 'top');
    }

  } catch (error) {
    console.error('Canvas 渲染失敗:', error);
  }
};

// 監聽 props 變化，重新渲染
watch([() => props.title, () => props.subtitle, () => props.image, () => props.imageOffsetX, () => props.category], async () => {
  await nextTick();
  if (previewCanvas.value) {
    await renderCanvas(previewCanvas.value);
  }
}, { immediate: false });

// 組件掛載後初始渲染
onMounted(async () => {
  await nextTick();
  if (previewCanvas.value) {
    await renderCanvas(previewCanvas.value);
  }
});

// 提供父層調用的 capture 方法
const capture = async () => {
  if (!previewCanvas.value) {
    console.error('previewCanvas 不存在');
    return;
  }
  
  try {
    console.log('開始下載圖片...');
    
    // 直接使用預覽 Canvas 的內容
    const dataURL = previewCanvas.value.toDataURL('image/png', 1.0);
    console.log('生成 dataURL 長度:', dataURL.length);
    
    if (dataURL.length < 1000) {
      throw new Error('生成的圖片數據太小');
    }
    
    const link = document.createElement('a');
    link.download = `card-image-${Date.now()}.png`;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('圖片下載完成！');
    
  } catch (error) {
    console.error('下載圖片失敗:', error);
    alert('圖片下載失敗，請檢查控制台錯誤信息');
  }
};

defineExpose({ capture });
</script>

<style scoped>
.canvas-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  background: transparent;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #e0e0e0; /* 添加淡色邊框以便預覽 */
  border-radius: 8px;
}

.preview-canvas {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
}

/* 移除不需要的樣式 */
.overlay-title,
.overlay-subtitle {
  display: none; /* 這些現在由 Canvas 渲染 */
}

/* 響應式調整 */
@media (max-width: 800px) {
  .canvas-container {
    max-width: 90vw;
  }
}

@media (max-width: 600px) {
  .canvas-container {
    max-width: 95vw;
  }
}

@media (max-width: 400px) {
  .canvas-container {
    max-width: 95vw;
  }
}
</style>
