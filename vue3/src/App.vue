<script setup lang="ts">

import {ref, inject } from 'vue'
import HomePage from "./views/HomePage.vue";
import Navbar_and_Sidebar from "./components/Navbar_and_Sidebar.vue";


const fullPage = ref(true)
const onCancel = ref(false)
const formContainer = ref(null)
const $loading =  inject('$loading')
let loader=$loading.show({
  container: fullPage.value ? null : formContainer.value,
  canCancel: true,
  onCancel: onCancel.value
});
setTimeout(() => {
  loader.hide();
},3000)
</script>

<template>
  <Navbar_and_Sidebar/>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
