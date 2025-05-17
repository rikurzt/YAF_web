<script setup lang="ts">
import { ref, onMounted } from 'vue'

  import Navbar_and_Sidebar from "./components/Navbar_and_Sidebar.vue";
  import Footer from "./components/Footer.vue";
  import {useLoading} from "vue-loading-overlay";


  const fullPage:any = ref(true)
  const formContainer:any = ref(null)
  const $loading =  useLoading({})

  // onCancel 處理函數
  const onCancelHandler = () => {
    console.log('Loading cancelled')
  }

  const loader=$loading.show({
    container: fullPage.value ? null : formContainer.value,
    canCancel: false,
    onCancel: onCancelHandler,
    color: '#000000',
    backgroundColor:'#ffffff',
    opacity:1,
    loader: 'dots',
  });

onMounted(() => {
  // 直接設定 3 秒延遲，不依賴 window.onload
  setTimeout(() => {
    loader.hide()
    console.log("3 秒延遲後，loading 關閉")
  }, 3000)  // 3000 毫秒 = 3 秒
  
  // 如果需要等待資源載入完成，可以額外監聽 window.onload
  window.addEventListener('load', () => {
    console.log("所有資源已載入完成")
  })
})
</script>

<template>

  <Navbar_and_Sidebar/>
  <div class="container-fluid justify-content-center p-0">
    <router-view class="router-view "></router-view>
  </div>

  <Footer/>
</template>

<style scoped>

.container-fluid{
  width: 100vw;
  height: max-content;
  background-color: rgba(255, 0, 0, 0);
}


</style>
