<script setup lang="ts">
import ContentBlock from "../components/ContentBlock.vue";
import Gallary from '../components/Gallary.vue'
import { ref, onMounted } from 'vue'
import { useLoading } from "vue-loading-overlay";

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
  const lines = csvText.split('\n');
  const headers = lines[0].split(',');
  const rows: string[] = [];
  let currentRow = '';

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    currentRow += (currentRow ? '\n' : '') + lines[i];
    const values = currentRow.split(',');
    if (values.length === headers.length) {
      rows.push(currentRow);
      currentRow = '';
    }
  }

  return rows.map(line => {
    const values = line.split(',');
    const row: any = {};
    headers.forEach((header, index) => {
      row[header.trim()] = values[index]?.trim() || '';
    });
    

    
    return {
      title: row['攤位名稱'],
      src: row['正式位置'] ? `img/club/${row['正式位置'].trim()}.png` : `img/logo.png`,
      name: row['攤位名稱'],
      description: row['攤位簡介'],
      tag: row['Hashtag'] ? row['Hashtag'].split(' ').filter((tag: string) => tag.trim()).map((tag: string) => tag.trim().startsWith('#') ? tag.trim() : '#' + tag.trim()).join(' ') : '',
      number: row['正式位置'],
      url: row['相關社群連結 (只能填一個連結)'] || '',
    };
  });
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
    console.log('社團資料載入完成')
  } catch (error) {
    console.error('Error loading CSV:', error)
  } finally {
    // 確保載入動畫被隱藏
    loader.hide()
  }
})
</script>

<template>
  <ContentBlock title="參展社團" :content="Gallary" :isComponent="true" :component-props="{cards: cardData}"  :force-visible="true"/>

</template>

<style scoped>

</style>
