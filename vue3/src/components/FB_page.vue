<template>
  <div class="iframe-wrapper">
    <iframe class="my-lg-5"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYunlinAnimeFestival%3Flocale%3Dzh_TW&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="350" height="500" style="border:none;overflow:hidden"
            scrolling="no" frameborder="0" allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
    </iframe>
  </div>
</template>

<style scoped>
.iframe-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

@media only screen and (min-width: 1080px) {
  iframe {
    width: 54%;
    scale: 1.3;

  }
}

@media (max-width: 480px) {
  iframe {
    width: 130%;
    scale: 1;
  }
}
</style>
