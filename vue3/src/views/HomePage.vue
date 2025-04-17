<script lang="ts" setup>

import ContentBlock from "../components/ContentBlock.vue";
import ParallaxImage from '../components/ParallaxImage.vue'
</script>

<template>
  <div class="parallax-container" style="position: relative;">
    <!-- Parallax Images -->
    <div class="parallax-wrapper" >
      <ParallaxImage
          src="/img/HomePage_Main_art_rock_back.png"
          direction="up"
          alt="132"
          :offsetMultiplier="{ desktop: 0.35, tablet: 0.35, mobile: 0.35 }"
          :top="{ desktop: '6vw', tablet: '50%', mobile: '37vw' }"
          :left="{ desktop: '0.75vw', mobile: '9vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '100%', tablet: '150px', mobile: '102%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_rock_back_2.png"
          direction="down"
          alt="132"
          :offsetMultiplier="{ desktop: 0.2, tablet: 0.2, mobile: 0.2 }"
          :top="{ desktop: '6vw', tablet: '50%', mobile: '37vw' }"
          :left="{ desktop: '0.75vw', mobile: '9vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '100%', tablet: '150px', mobile: '102%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_Fog.png"
          direction="right"
          alt="132"
          :offsetMultiplier="{ desktop: 0.3, tablet: 0.3, mobile: 0.3 }"
          :top="{ desktop: '2.9vw', tablet: '50%', mobile: '37vw' }"
          :left="{ desktop: '0vw', mobile: '9vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '100%', tablet: '150px', mobile: '102%' }"
      />
      <ParallaxImage
          src="/svg/YF05_雲緣起LOGO-01.svg"
          direction="right"
          alt="132"
          :offsetMultiplier="{ desktop: 0.6, tablet: 0.6, mobile: 0.6 }"
          :top="{ desktop: '15vw', tablet: '50%', mobile: '37.3vw' }"
          :left="{ desktop: '60vw', mobile: '9vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '32.5%', tablet: '150px', mobile: '102%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_rock.png"
          direction="down"
          alt="132"
          :offsetMultiplier="{ desktop: 0.2, tablet: 0.2, mobile: 0.2 }"
          :top="{ desktop: '4vw', tablet: '50%', mobile: '37.3vw' }"
          :left="{ desktop: '30vw', mobile: '9vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '32.5%', tablet: '150px', mobile: '102%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_Bush_L.png"
          direction="left"
          alt="132"
          :offsetMultiplier="{ desktop: 0.6, tablet: 0.55, mobile: 0.5 }"
          :top="{ desktop: '35vw', tablet: '50%', mobile: '180vw' }"
          :left="{ desktop: '-5vw', mobile: '-20vw' }"
          :right="{ desktop: '0', tablet: '0' }"
          :width="{ desktop: '50%', tablet: '150px', mobile: '70%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_Bush_R.png"
          direction="right"
          alt="132"
          :offsetMultiplier="{ desktop: 0.6, tablet: 0.55, mobile: 0.5 }"
          :top="{ desktop: '35vw', tablet: '50%', mobile: '180vw' }"
          :left="{ desktop: '65vw', mobile: '45vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '50%', tablet: '150px', mobile: '70%' }"
    />
    </div>
    <!-- 主圖 -->
    <img alt="" class="main-art img-fluid" src="/img/HomePage_Main_art_bg.png"/>

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
  max-height: 150vh;
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