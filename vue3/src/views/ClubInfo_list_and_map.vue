<script setup lang="ts">
import ContentBlock from "../components/ContentBlock.vue";
import Gallary from '../components/Gallary.vue'
import { ref, onMounted } from 'vue'
import { useLoading } from "vue-loading-overlay";
import Club_map from "../components/club_map.vue";

// 定義卡片數據類型
interface CardData {
  title: string;
  src: string;
  name: string;
  description: string;
  tag: string;
  number: string;
  url: string;
}

const cardData = ref<CardData[]>([])
const $loading = useLoading({})

const parseCSV = (csvText: string): CardData[] => {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];
  
  const headers = lines[0].split(',').map(h => h.trim());
  const results: CardData[] = [];
  
  console.log('CSV Headers:', headers);
  
  let i = 1;
  while (i < lines.length) {
    let currentLine = lines[i].trim();
    if (!currentLine) {
      i++;
      continue;
    }
    
    // 解析當前行，可能需要合併多行
    const values: string[] = [];
    let currentValue = '';
    let inQuotes = false;
    let j = 0;
    
    while (j < currentLine.length) {
      const char = currentLine[j];
      
      if (char === '"') {
        if (inQuotes && j + 1 < currentLine.length && currentLine[j + 1] === '"') {
          // 處理雙引號轉義
          currentValue += '"';
          j += 2;
        } else {
          inQuotes = !inQuotes;
          j++;
        }
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
        j++;
      } else {
        currentValue += char;
        j++;
      }
      
      // 如果到了行尾但還在引號內，需要讀取下一行
      if (j >= currentLine.length && inQuotes && i + 1 < lines.length) {
        currentValue += '\n';
        i++;
        currentLine += '\n' + lines[i];
      }
    }
    
    // 添加最後一個值
    values.push(currentValue.trim());
    
    console.log(`Line ${i}:`, values);
    
    if (values.length < headers.length) {
      console.log(`Skipping line ${i}: insufficient columns (${values.length} < ${headers.length})`);
      i++;
      continue;
    }
    
    const row: any = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    console.log(`Parsed row ${i}:`, row);
    
    // 檢查是否有攤位名稱，如果沒有就跳過
    if (!row['攤位名稱'] || !row['攤位名稱'].trim()) {
      console.log(`Skipping line ${i}: no booth name`);
      i++;
      continue;
    }
    
    // 處理攤位編號，移除引號
    let position = row['正式位置'] || '';
    position = position.replace(/^"(.*)"$/, '$1').trim();
    
    console.log(`Processing position: "${row['正式位置']}" -> "${position}"`);
    
    const result: CardData = {
      title: row['攤位名稱'],
      src: position ? `img/club/${position}.png` : '',
      name: row['攤位名稱'],
      description: row['攤位簡介'] || '',
      tag: row['請幫你的攤位下Hashtag'] || '',
      number: position,
      url: row['相關社群連結 (只能填一個連結)'] || '',
    };
    
    console.log(`Adding result:`, result);
    results.push(result);
    i++;
  }
  
  return results;
};

onMounted(async () => {
  // 顯示載入動畫
  const loader = $loading.show({
    container: undefined, // 使用 undefined 而不是 null
    canCancel: false,
    onCancel: () => console.log('Loading cancelled'),
    color: '#000000',
    backgroundColor: '#ffffff',
    opacity: 0.8,
    loader: 'dots',
  });

  try {
    const response = await fetch(import.meta.env.BASE_URL + '/club_info.csv')
    const csvText = await response.text()
    cardData.value = parseCSV(csvText)
    console.log('社團資料載入完成', cardData.value)
    console.log('共載入', cardData.value.length, '筆資料')
  } catch (error) {
    console.error('Error loading CSV:', error)
  } finally {
    // 確保載入動畫被隱藏
    loader.hide()
  }
})
</script>

<template>
  <ContentBlock title="攤位位置圖" :content="Club_map" :is-component="true" />
  <ContentBlock title="參展社團" :content="Gallary" :isComponent="true" :component-props="{cards: cardData}"  :force-visible="true"/>

</template>

<style scoped>

</style>
