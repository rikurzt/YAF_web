<script setup lang="ts">
import { ref, onMounted } from 'vue'

  import Navbar_and_Sidebar from "./components/Navbar_and_Sidebar.vue";
  import Footer from "./components/Footer.vue";
  import {useLoading} from "vue-loading-overlay";


  const fullPage:any = ref(true)
  const onCancel:any = ref(false)
  const formContainer:any = ref(null)
  const $loading =  useLoading({})

  const loader=$loading.show({
    container: fullPage.value ? null : formContainer.value,
    canCancel: false,
    onCancel: onCancel.value,
    color: '#000000',
    backgroundColor:'#ffffff',
    opacity:1,
    loader: 'dots',
  });

onMounted(() => {
  window.onload = () => {
    // 設定一個延遲時間，確保動畫至少顯示 3 秒
    setTimeout(() => {
      loader.hide()
      console.log("所有圖片與資源都已載入完成，loading 關閉")
    }, 0)  // 保證最少顯示 3 秒
  }
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
}


</style>
