<script setup lang="ts">
  import {ref } from 'vue'

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
  setTimeout(() => {
    loader.hide();
  },3000)
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
