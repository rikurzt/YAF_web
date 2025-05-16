<script lang="ts" setup>

import ContentBlock from "../components/ContentBlock.vue";
import ParallaxImage from '../components/ParallaxImage.vue'
import HomePage_activity_info from "../components/HomePage_activity_info.vue";
</script>

<template>

  <div class="parallax-container" style="position: relative;">
    <div id="leaves">
      <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </div>

    <!-- Parallax Images -->
    <div class="parallax-wrapper" >
      <ParallaxImage
          src="/img/HomePage_Main_art_rock_back.png"
          direction="up"
          alt="132"
          :offsetMultiplier="{ desktop: 0.35, tablet: 0.35, mobile: 0.35 }"
          :top="{ desktop: '6vw', tablet: '50%', mobile: '60vw' }"
          :left="{ desktop: '0vw', mobile: '-100vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '110%', tablet: '150px', mobile: '320%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_rock_back_2.png"
          direction="down"
          alt="132"
          :offsetMultiplier="{ desktop: 0.2, tablet: 0.2, mobile: 0.2 }"
          :top="{ desktop: '6vw', tablet: '50%', mobile: '40vw' }"
          :left="{ desktop: '0.75vw', mobile: '-100vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '100%', tablet: '150px', mobile: '250%' }"
      />
      <ParallaxImage
          class="fog-image"
          src="/img/HomePage_Main_art_Fog.png"
          direction="right"
          alt="132"
          :offsetMultiplier="{ desktop: 0.3, tablet: 0.3, mobile: 0.3 }"
          :top="{ desktop: '2.9vw', tablet: '50%', mobile: '70vw' }"
          :left="{ desktop: '-5vw', mobile: '-100vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '100%', tablet: '150px', mobile: '300%' }"
      />
      <ParallaxImage
          src="/svg/YF05_雲緣起LOGO-01.svg"
          direction="right"
          alt="132"
          :offsetMultiplier="{ desktop: 0.6, tablet: 0.6, mobile: 0.6 }"
          :top="{ desktop: '15vw', tablet: '50%', mobile: '15vw' }"
          :left="{ desktop: '60vw', mobile: '-5vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '32.5%', tablet: '150px', mobile: '110%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_Bush_back.png"
          direction="left"
          alt="132"
          :offsetMultiplier="{ desktop: 0.0, tablet: 0.0, mobile: 0.0 }"
          :top="{ desktop: '20vw', tablet: '50%', mobile: '170vw' }"
          :left="{ desktop: '0vw', mobile: '-20vw' }"
          :right="{ desktop: '0', tablet: '0' }"
          :width="{ desktop: '100%', tablet: '150px', mobile: '70%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_rock.png"
          direction="down"
          alt="132"
          :offsetMultiplier="{ desktop: 0.2, tablet: 0.2, mobile: 0.15 }"
          :top="{ desktop: '4vw', tablet: '50%', mobile: '55vw' }"
          :left="{ desktop: '30vw', mobile: '9vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '32.5%', tablet: '150px', mobile: '90%' }"
      />

      <ParallaxImage
          src="/img/HomePage_Main_art_Bush_L.png"
          direction="left"
          alt="132"
          :offsetMultiplier="{ desktop: 0.6, tablet: 0.55, mobile: 0.5 }"
          :top="{ desktop: '35vw', tablet: '50%', mobile: '170vw' }"
          :left="{ desktop: '-5vw', mobile: '-20vw' }"
          :right="{ desktop: '0', tablet: '0' }"
          :width="{ desktop: '50%', tablet: '150px', mobile: '70%' }"
      />
      <ParallaxImage
          src="/img/HomePage_Main_art_Bush_R.png"
          direction="right"
          alt="132"
          :offsetMultiplier="{ desktop: 0.6, tablet: 0.55, mobile: 0.5 }"
          :top="{ desktop: '35vw', tablet: '50%', mobile: '170vw' }"
          :left="{ desktop: '65vw', mobile: '45vw' }"
          :right="{ desktop: '0', tablet: '0' ,mobile: '0'}"
          :width="{ desktop: '50%', tablet: '150px', mobile: '70%' }"
    />
    </div>
    <!-- 主圖 -->
    <img alt="" class="main-art img-fluid" src="/img/HomePage_Main_art_bg.png"/>

    <div class="cover-container d-flex fixed-height w-100 h-100 p-5 m-5 mx-auto flex-column">
      <ContentBlock title="活動簡介" :content="HomePage_activity_info" :is-component="true" />
      <ContentBlock title="最新消息" content=" " :force-visible="true"/>
      <!-- 使用 https://www.commoninja.com/facebook-feed/ 製作-->

      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYunlinAnimeFestival%3Flocale%3Dzh_TW&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      <div class="my-lg-5 pb-lg-5 "></div>
    </div>
  </div>


</template>

<style scoped>


.main-art {
  width: 100%;
  height: auto;
  max-height: 150vh;
  object-fit: cover;
  object-position: top center;
  display: block;

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

@media only screen and (min-width: 1080px) {

}
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

iframe {
  width: 50.8%;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 1;
}

@media only screen and (min-width: 1080px) {
  iframe {
    scale: 1.35;
    padding-left: 30vw;
  }

}

@media only screen and (max-width: 486px) {
  iframe {
    width: 100%;
    scale: 0.8;

  }
}

/* leaf animations */
/*待修:葉子動畫 hover 閃爍問題 */
#leaves {
  position: relative;
  top: -50px;
  width: 100%;
  text-align: right;
}


#leaves i {
  display: inline-block;
  width: 200px;
  height: 150px;
  background: linear-gradient(to bottom right, #309900, #005600);
  transform: skew(20deg);
  border-radius: 5% 40% 70%;
  box-shadow: inset 0px 0px 1px #222;
  border: 1px solid #333;
  -webkit-animation: falling 30s 0s infinite;

}

#leaves i:nth-of-type(2n) { -webkit-animation: falling2 3s 0s infinite; }
#leaves i:nth-of-type(3n) { -webkit-animation: falling3 7s 0s infinite; }

#leaves i:before {
  position: absolute;
  content: '';
  top: 117px;
  right: 9px;
  height: 27px;
  width: 32px;
  transform: rotate(49deg);
  border-radius: 0% 15% 15% 0%;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
  border-left: 0px solid #222;
  border-right: 1px solid #222;
  background: linear-gradient(to right, rgba(0,100,0,1), #005600);
  z-index: 9999;
}

#leaves i:after {
  content: '';
  height: 125px;
  width: 10px;
  background: linear-gradient(to right, rgba(0,0,0,.15), rgba(0,0,0,0));
  display: block;
  transform: rotate(125deg);
  position: absolute;
  left: 85px;
  border-radius:50%;
  z-index: 9999;
}

#leaves i:hover {
  animation-play-state: paused;  /* 暫停動畫 */
  transform: translate(-40px, -60px) rotate(360deg) scale(1.4) !important;
  z-index: 10;  /* 確保葉子位於最上層 */
  opacity: 1;  /* 不改變透明度，保持可見 */
}

/* 確保增加滑鼠範圍*/
#leaves i:hover {
  transform: translate(-40px, -60px) rotate(360deg) scale(1.4) !important;
  opacity: 1;  /* 不改變透明度，保持可見 */
}



#leaves i:nth-of-type(n)    { height:23px; width:30px; }
#leaves i:nth-of-type(n):before { width:7px; height:5px; top:17px; right:1px; }
#leaves i:nth-of-type(n):after { width:2px; height:17px; left: 12px; top:0px; }

#leaves i:nth-of-type(2n+1)    { height:11px; width:16px; }
#leaves i:nth-of-type(2n+1):before { width:4px; height:3px; top:7px; right:0px; }
#leaves i:nth-of-type(2n+1):after { width:2px; height:6px; left: 5px; top:1px; }

#leaves i:nth-of-type(3n+2)  { height:17px; width:23px; }
#leaves i:nth-of-type(3n+2):before  { height:4px; width:4px; top:12px; right:1px; }
#leaves i:nth-of-type(3n+2):after  { height:10px; width:2px; top:1px; left:8px; }

#leaves i:nth-of-type(n)   { -webkit-animation-delay: 1.9s;}
#leaves i:nth-of-type(2n)  { -webkit-animation-delay: 3.9s;}
#leaves i:nth-of-type(3n)  { -webkit-animation-delay: 2.3s;}
#leaves i:nth-of-type(4n)  { -webkit-animation-delay: 4.4s;}
#leaves i:nth-of-type(5n)  { -webkit-animation-delay: 5s;  }
#leaves i:nth-of-type(6n)  { -webkit-animation-delay: 3.5s;}
#leaves i:nth-of-type(7n)  { -webkit-animation-delay: 2.8s;}
#leaves i:nth-of-type(8n)  { -webkit-animation-delay: 1.5s;}
#leaves i:nth-of-type(9n)  { -webkit-animation-delay: 3.3s;}
#leaves i:nth-of-type(10n) { -webkit-animation-delay: 2.5s;}
#leaves i:nth-of-type(11n) { -webkit-animation-delay: 1.2s;}
#leaves i:nth-of-type(12n) { -webkit-animation-delay: 4.1s;}
#leaves i:nth-of-type(13n) { -webkit-animation-delay: 1s;  }
#leaves i:nth-of-type(14n) { -webkit-animation-delay: 4.7s;}
#leaves i:nth-of-type(15n) { -webkit-animation-delay: 3s;  }

#leaves i:nth-of-type(n)    { background: linear-gradient(to bottom right, #309900, #005600); }
#leaves i:nth-of-type(2n+2)  { background: linear-gradient(to bottom right, #5e9900, #2b5600); }
#leaves i:nth-of-type(4n+1)  { background: linear-gradient(to bottom right, #990, #564500); }

#leaves i:nth-of-type(n)    { opacity: .7;}
#leaves i:nth-of-type(3n+1)  { opacity: .5;}
#leaves i:nth-of-type(3n+2)  { opacity: .3;}

#leaves i:nth-of-type(n)    {transform: rotate(180deg);}


#leaves i:nth-of-type(n) { -webkit-animation-timing-function:ease-in-out;}

@-webkit-keyframes falling {

  0% {
    -webkit-transform:
        translate3d(0px,0px,0px)
        rotate(0deg);
  }

  100% {
    -webkit-transform:
        translate3d(-350px,1000px,0)
        rotate(90deg);
    opacity: 0;
  }
}

@-webkit-keyframes falling3 {
  0% {
    -webkit-transform:
        translate3d(0,0,0)
        rotate(-20deg);
  }


  100% {
    -webkit-transform:
        translate3d(-230px,640px,0)
        rotate(-70deg);
    opacity: 0;
  }
}

@-webkit-keyframes falling2 {
  0% {
    -webkit-transform:
        translate3d(0,0,0)
        rotate(90deg);
  }
  100% {
    -webkit-transform:
        translate3d(-400px,680px,0)
        rotate(0deg);
    opacity: 0;
  }
}
@keyframes float-left-right {
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(40px); /* 向右偏移 20px */
  }
  100% {
    transform: translateX(-10px);
  }
}

.fog-image {
  animation: float-left-right 12s ease-in-out infinite;
}


</style>