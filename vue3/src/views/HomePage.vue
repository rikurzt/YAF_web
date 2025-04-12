<script lang="ts" setup>

import ContentBlock from "../components/ContentBlock.vue";
import ParallaxImage from '../components/ParallaxImage.vue'
</script>

<template>
  <div class="parallax-container" style="position: relative;">
    <!-- Parallax Images -->
    <div class="parallax-wrapper" >
      <ParallaxImage
          src="/img/HomePage_Main_art_rock.png"
          direction="right"
          alt="132"
          :offsetMultiplier="{ desktop: 0, tablet: 0, mobile: 0 }"
          :top="{ desktop: '2.9vw', tablet: '50%', mobile: '37vw' }"
          :left="{ desktop: '35.6vw', mobile: '9vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '32.5%', tablet: '150px', mobile: '102%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_Bush_L.png"
          direction="left"
          alt="132"
          :offsetMultiplier="{ desktop: 0.5, tablet: 0.35, mobile: 0.4 }"
          :top="{ desktop: '35vw', tablet: '50%', mobile: '180vw' }"
          :left="{ desktop: '-5vw', mobile: '-20vw' }"
          :right="{ desktop: '0', tablet: '0' }"
          :width="{ desktop: '50%', tablet: '150px', mobile: '70%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_Bush_R.png"
          direction="right"
          alt="132"
          :offsetMultiplier="{ desktop: 0.5, tablet: 0.35, mobile: 0.4 }"
          :top="{ desktop: '35vw', tablet: '50%', mobile: '180vw' }"
          :left="{ desktop: '65vw', mobile: '45vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '50%', tablet: '150px', mobile: '70%' }"
    />
    </div>
    <!-- 主圖 -->
    <img alt="" class="main-art img-fluid" src="/img/HomePage_Main_art.png"/>

    <div class="cover-container d-flex fixed-height w-100 h-100 p-5 m-5 mx-auto flex-column">
      <ContentBlock title="最新消息" content=" " />
      <iframe src="https://widgets.commoninja.com/iframe/318e8df6-9fd6-455a-a382-cbad8d4ed74a"  frameborder="0" scrolling="yes"></iframe>
    </div>
  </div>


</template>

<style scoped>


@media (max-width: 1050px) {

  .main-art {
    aspect-ratio: 16 / 9;
    height: auto;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

}

@media (max-width: 768px) {

  .main-art {
    aspect-ratio: 9 / 16;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

}

@media (max-width: 480px) {
  .main-art {
    aspect-ratio: 9 / 21;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

}

.main-art {
  width: 100%;
  height: auto;
  max-height: 100vh;
  object-fit: cover;
  object-position: center;
  display: block;
}

iframe {
  width: 85%; /* 預設寬度為 100% */
  height: 500px;

}
.parallax-container {
  position: relative;

}
.parallax-wrapper {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none; /* 防止蓋到互動元素 */
}

</style>