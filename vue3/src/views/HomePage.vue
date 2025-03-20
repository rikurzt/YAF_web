<script lang="ts" setup>
import {onBeforeUnmount, onMounted} from 'vue';
import ContentBlock from "../components/ContentBlock.vue";


const handleScroll = () => {
  const leftImage = document.getElementById('parallax-left');
  const rightImage = document.getElementById('parallax-right');
  const offset = window.scrollY * 0.5;
  if (leftImage && rightImage) {
    leftImage.style.transform = `translateX(calc(-${offset}px + 50px))`;
    rightImage.style.transform = `translateX(calc(${offset}px - 50px))`;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="parallax-container" style="position: relative;">
    <img id="parallax-left" alt="Left Image" class="parallax-image left" src="/img/logo.jpg"/>
    <img alt="" class="main-art img-fluid" src="/img/HomePage_Main_art.png"/>
    <img id="parallax-right" alt="Right Image" class="parallax-image right" src="/img/logo.jpg"/>
    <div class="cover-container d-flex fixed-height w-100 h-100 p-5 m-5 mx-auto flex-column">
      <ContentBlock title="最新消息" content=" " />
      <iframe src="https://widgets.commoninja.com/iframe/318e8df6-9fd6-455a-a382-cbad8d4ed74a"  frameborder="0" scrolling="yes"></iframe>
    </div>
  </div>
</template>

<style scoped>


@media (max-width: 1050px) {
  .parallax-image {
    width: 150px;
    height: auto;
    top: 70%;
  }

}

@media (max-width: 768px) {
  .parallax-image {
    width: 150px;
    height: auto;
    top: 60%;
  }

  .left, .right {
    top: 20%;
  }
}

@media (max-width: 480px) {
  .parallax-image {
    width: 100px;
    height: auto;
    top: 40%;
  }

  .left, .right {
    top: 10%;
  }
}

iframe {
  width: 85%; /* 預設寬度為 100% */
  height: 500px;

}
.parallax-container {
  position: relative;

}

.parallax-image {
  position: absolute;
  top: 45vw;
  width: 300px;
  height: auto;

  transition: transform 0.1s ease-out;
}

.left {
  left: 0;
}

.right {
  right: 0;
}
</style>