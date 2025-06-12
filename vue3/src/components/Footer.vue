<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const images_cooperate = ref([
  "/img/合作圖_創設系會.jpg",
  "/img/合作圖_數媒系會.jpg",
  "/img/合作圖_跨域系會.jpg",
  "/img/D-27國立雲林科技大學.png",
]);

const images_thanks = ref([
  "/img/CadnaLogo.png",
  "/img/logo1.jpg",
]);

const footerRef = ref<HTMLElement | null>(null);

function updateBackgroundPosition() {
  if (footerRef.value) {
    const footerHeight = footerRef.value.offsetHeight-1;
    document.body.style.backgroundPosition = `top center, bottom ${footerHeight}px center`;
  }
}

onMounted(async () => {
  // 加上 base url
  const baseUrl = import.meta.env.BASE_URL;
  images_cooperate.value = images_cooperate.value.map(img => baseUrl + img);
  images_thanks.value = images_thanks.value.map(img => baseUrl + img);

  await nextTick();
  updateBackgroundPosition();
  window.addEventListener('resize', updateBackgroundPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateBackgroundPosition);
});
</script>


<template>

  <footer  ref="footerRef" class=" text-center text-lg-start  " >
    <!-- container -->
    <div class="container text-center justify-content-center">
      <!-- Section: Social media -->
      <section class="m-4 mt-4">
        <div class="container">
          <div class="row justify-content-center">
            <!-- Facebook -->
            <a
                class="btn text-white btn-floating m-3 d-flex align-items-center justify-content-center"
                style="background-color: #3b5998; width: 40px; height: 40px;"
                href="https://www.facebook.com/YunlinAnimeFestival"
                role="button"
                target="_blank"
            >
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
              </svg>
            </a>

            <!-- Youtube -->
            <a
                class="btn text-white btn-floating m-3 d-flex align-items-center justify-content-center"
                style="background-color: #bf3939; width: 40px; height: 40px;"
                href="https://www.youtube.com/@%E9%9B%B2%E7%B7%A3%E8%B5%B7"
                role="button"
                target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
            </a>


            <!-- Instagram -->
            <a
                class="btn text-white btn-floating m-3 d-flex align-items-center justify-content-center"
                style="background-color: #ac2bac; width: 40px; height: 40px;"
                href="https://www.instagram.com/yunlinanimefestival/"
                role="button"
                target="_blank"
            >
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
              </svg>

            </a>

          </div>
        </div>
      </section>
      <!-- Section: Social media -->


      <!-- Section: LOGO -->

      <div class="container mt-4 mb-5 pb-3">
        <div class="row">
          <!-- Section: 贊助商LOGO -->
          <div class="col-md-6">
            <section class="ftcon">
              <div class="row justify-content-center mb-4">
                <h1 class="text-center">特別感謝</h1>
              </div>
              <div class="row justify-content-center">
                <div
                    class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4"
                    v-for="(image, index) in images_thanks"
                    :key="index"
                >
                  <div class="bg-image hover-overlay shadow-1-strong rounded">
                    <img v-bind:src="image" class="img-fluid w-75" alt="image" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Section: 合作單位LOGO -->
          <div class="col-md-6">
            <section class="ftcon">
              <div class="row justify-content-center mb-4">
                <h1 class="text-center">合作單位</h1>
              </div>
              <div class="row justify-content-center">
                <div
                    class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4"
                    v-for="(image, index) in images_cooperate"
                    :key="index"
                >
                  <div class="bg-image hover-overlay shadow-1-strong rounded">
                    <img v-bind:src="image" class="img-fluid w-75" alt="image" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <!-- Section: 贊助商LOGO -->


      <!-- Section: under parts -->
      <section class="container">
        <div class="row align-items-center  border-top">
          <div class="col-4 text-start">
            <p class="mb-0 text-body-secondary">© 2025 雲緣起執行委員會</p>
          </div>

          <div class="col-4 text-center">
            <router-link  to="/">
              <svg width="96" height="96">
                <image class=" " xlink:href="/svg/YF05_雲緣起LOGO-01.svg" width="96" height="96" />
              </svg>
            </router-link>
          </div>

          <div class="col-4 text-end ">
            <ul class="nav d-flex flex-wrap flex-sm-nowrap align-item-end justify-content-end ">
              <li class="nav-item"><router-link to="/#" class="nav-link px-2 text-body-secondary text-nowrap">回到首頁</router-link></li>
              <li class="nav-item"><router-link to="/PrivacyPolicy" class="nav-link px-2 text-body-secondary text-nowrap">隱私權政策</router-link></li>
              <li class="nav-item"><a href="https://www.facebook.com/YunlinAnimeFestival/" target="_blank" class="nav-link px-2 text-body-secondary text-nowrap">聯絡我們</a></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Section: under parts -->
    </div>
  </footer>
</template>

<style scoped>
footer{
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  width: 100vw;
  height: auto;
  background-color: #c7dad4;;
}

@media (min-width: 1400px) {
  .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    max-width: 1920px;
  }
}

</style>