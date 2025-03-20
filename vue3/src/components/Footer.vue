<script  lang="ts">

export default {
  data() {
    return {
      images: [
        "/img/Logo_Fake.png",
        "/img/Logo_Fake.png",
        "/img/Logo_Fake.png",
        "/img/Logo_Fake.png",
        "/img/Logo_Fake.png",
        "/img/Logo_Fake.png"
      ]
    };
  },
  created() {
    for (let key in this.images) {
      this.images[key] = import.meta.env.BASE_URL+this.images[key];
    }
  }

};




</script>

<template>
  <footer class="bg-body-tertiary text-center text-lg-start  " >
    <!-- container -->
    <div class="container">
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

            <!-- Twitter -->
            <a
                class="btn text-white btn-floating m-3 d-flex align-items-center justify-content-center"
                style="background-color: #55acee; width: 40px; height: 40px;"
                href="#!"
                role="button"
                target="_blank"
            >
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
              </svg>
            </a>


            <!-- Instagram -->
            <a
                class="btn text-white btn-floating m-3 d-flex align-items-center justify-content-center"
                style="background-color: #ac2bac; width: 40px; height: 40px;"
                href="#!"
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


      <!-- Section: 贊助商LOGO -->
      <section class="ftcon container mt-5 mb-5 pb-3">
        <div class="row justify-content-center mb-4">
          <h1 class="text-center">特別感謝</h1>
        </div>
        <div class="row">
          <div
              class="col-lg-2 col-md-3 col-sm-4 col-4 mb-4"
              v-for="(image, index) in images"
              :key="index"
          >
            <div class="bg-image hover-overlay shadow-1-strong rounded">
              <img v-bind:src="image" class="img-fluid w-100" alt="image" />
            </div>
          </div>
        </div>
      </section>

      <!-- Section: 贊助商LOGO -->


      <!-- Section: under parts -->
      <section class="sss container">
        <div class="row align-items-center py-3 border-top">
          <div class="col-4 text-start">
            <p class="mb-0 text-body-secondary">© 2025 雲緣起執行委員會</p>
          </div>

          <div class="col-4 text-center">
            <a href="/" class="d-inline-block link-body-emphasis text-decoration-none">
              <svg width="96" height="96">
                <image class="change-my-color" xlink:href="/svg/YF05_雲緣起LOGO-01.svg" width="96" height="96" />
              </svg>
            </a>
          </div>

          <div class="col-4 text-end ">
            <ul class="nav d-flex flex-wrap flex-sm-nowrap align-item-end justify-content-end ">
              <li class="nav-item"><router-link to="/#" class="nav-link px-2 text-body-secondary text-nowrap">回到首頁</router-link></li>
              <li class="nav-item"><router-link to="/PrivacyPolicy" class="nav-link px-2 text-body-secondary text-nowrap">隱私權政策</router-link></li>
              <li class="nav-item"><router-link to="#" class="nav-link px-2 text-body-secondary text-nowrap">聯絡我們</router-link></li>
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
}

@media (min-width: 1400px) {
  .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    max-width: 1920px;
  }
}

</style>