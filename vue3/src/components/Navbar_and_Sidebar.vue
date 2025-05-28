<template>
  <div>
    <!-- Navbar for desktop -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top d-none d-lg-flex nav-bg">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <svg width="96" height="48" >
            <image class="change-my-color" xlink:href="/svg/YF05_雲緣起LOGO-01.svg" width="96" height="48"  />
          </svg>
        </router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav me-auto ">
            <li
                v-for="(menu, index) in menus"
                :key="'navbar-' + index"
                class="nav-item"
                :class="{ dropdown: menu.children.length > 0, 'active-link': isActive(menu) }"
            >
              <!-- 主選項 -->
              <router-link
                  v-if="menu.children.length === 0"
                  class="nav-link"
                  :to="menu.link"
              >
                {{ menu.name }}
              </router-link>
              <a
                  v-else
                  class="nav-link dropdown-toggle "
                  href="#"
                  :id="'navbarDropdown' + index"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                {{ menu.name }}
              </a>
              <!-- 子選項 -->
              <ul
                  v-if="menu.children.length > 0"
                  class="dropdown-menu "
                  :aria-labelledby="'navbarDropdown' + index"
              >
                <li
                    v-for="(child, cIndex) in menu.children"
                    :key="'navbar-child-' + cIndex"
                >
                  <router-link class="dropdown-item " :to="child.link">
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Sidebar for mobile -->
    <nav class="navbar fixed-top justify-content-end d-lg-none d-md-flex nav-bg ">
      <button
          class="btn btn-dark my-3 mx-5"
          style="opacity: 40%;  z-index: 9999; position: sticky"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="sidebar"

      >
        ☰
      </button>
    </nav>

    <div class="d-lg-none fixed-top  d-flex ">
      <div class="offcanvas offcanvas-start sidebar-bg offcanvas-fullscreen" tabindex="-1" id="sidebar">
        <div class="offcanvas-header sidebar-bg ">
          <svg width="96" height="40" class="mx-3">
            <a href="/#">
              <image class="change-my-color" xlink:href="/svg/YF05_雲緣起LOGO-01.svg" width="96" height="50"  />
            </a>

          </svg>
          <button type="button" class="btn-close btn-close-white justify-content-end px-4" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body sidebar-bg">
          <ul class="list-group sidebar-bg"
              data-bs-dismiss="offcanvas">
            <li
                v-for="(menu, index) in menus"
                :key="'sidebar-' + index"
                class="list-group-item sidebar-bg"
            >
              <router-link
                  v-if="menu.children.length === 0"
                  :to="menu.link"
                  class="text-decoration-none sidebar-link "

              >
                {{ menu.name }}
              </router-link>
              <a
                  v-else
                  class="d-flex justify-content-between align-items-center sidebar-link "
                  data-bs-toggle="collapse"
                  :href="'#sidebarSubmenu' + index"
                  role="button"
                  aria-expanded="false"
                  :aria-controls="'sidebarSubmenu' + index"
                  data-bs-dismiss="offcanvas"

              >
                {{ menu.name }}
                <span class="dropdown-toggle "></span>
              </a>
              <ul
                  v-if="menu.children.length > 0"
                  class="collapse list-group "
                  :id="'sidebarSubmenu' + index"
              >
                <li
                    v-for="(child, cIndex) in menu.children"
                    :key="'sidebar-child-' + cIndex"
                    class="list-group-item sidebar-bg"
                    @click="closeSidebar"
                >
                  <router-link
                      :to="child.link"
                      class="text-decoration-none sidebar-link  "
                      @click="closeSidebar"
                  >
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import {defineComponent} from "vue";

export default  defineComponent({
  name: "NavbarSidebar",
  data() {
    return {
      menus: [
        {
          name: "最新消息",
          link: "/News",
          children: [],
        },
        {
          name: "活動情報",
          link: "#",
          children: [
            { name: "Cosplay規則", link: "/FestivalInfo/Cosplay" },
            { name: "活動規範", link: "/FestivalInfo/Rule" },
          ],
        },
        {
          name: "社團相關",
          link: "#",
          children: [
            { name: "報名參展", link: "/ClubInfo/Signup" },
            { name: "社團規範", link: "/ClubInfo/Rule" },
            { name: "參展社團名單", link: "/ClubInfo/list_and_map" },
          ],
        },
        {
          name: "舞台展演",
          link: "#",
          children: [
            { name: "表演報名", link: "/Show/Signup" },
            { name: "舞台時間表", link: "/Show/List" },
            { name: "表演資訊公告", link: "/Show/GroupInfo" },
          ],
        },
        {
          name: "場地資訊",
          link: "#",
          children: [
            { name: "攤位位置圖", link: "/SiteInfo/Map" },
            { name: "平面圖與交通方式", link: "/SiteInfo/traffic" },
          ],
        },
        {
          name: "關於我們",
          link: "/aboutus",
          children: [],
        },
        {
          name: "預定圖製作器",
          link: "/CardMaker",
          children: [],
        },
      ],
    };
  },
  methods: {
    isActive(menu:any) {
      // 檢查當前路由是否匹配主選項或其子選項
      if (menu.link && this.$route.path === menu.link) {
        return true;
      }
      if (menu.children) {
        return menu.children.some((child:any) => this.$route.path === child.link);
      }
      return false;
    },
    closeSidebar() {
      const win:any = window
      const offcanvasElement = document.getElementById("sidebar");
      if (win.bootstrap) {
        const bsOffcanvas = win.bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (bsOffcanvas) {
          bsOffcanvas.hide();

        }
      }
    },
  },
})
</script>

<style>
/* Custom styles if needed */
/* Ensure Navbar and Sidebar are at the top */
body {
  padding-top: 56px; /* Adjust for fixed navbar height */
}
.nav-bg{
  background-color: rgba(100, 142, 129, 0.75);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.35) 0 3px 7px 0;
  z-index: 9998;
  max-width: 100vw;
}
.nav-item{
  margin-right: 16px;
  margin-left: 16px;

  display: flex;
  flex-wrap: wrap;

}
.navbar-brand{
  padding: 32px;
  padding-right: 64px;
}

.navbar-nav .dropdown:hover > .dropdown-menu {
  display: block;
  margin-top: 40px; /* Prevent dropdown from being offset */

}

.dropdown-menu {
  transition: all 0.2s ease-in-out ;

}
.active-link {
  font-weight: bold;
  color: #007bff !important; /* 使顏色更醒目 */
}

.active-link > .nav-link {
  font-weight: bold;
  color: #ffffff !important;
  transition: 0.7s;
  text-shadow: 0 0 10px rgba(0, 196, 255, 0.4),0 0 20px rgba(0, 196, 255, 0.4),0 0 30px rgba(0, 196, 255, 0.4),0 0 40px rgba(0, 196, 255, 0.4);

}
.active-link > .nav-link:hover {
  font-weight: bold;
  color: #ffffff !important;
  transition: 0.5s;
  text-shadow: 0 0 10px rgba(0, 196, 255, 0.4),0 0 20px rgba(0, 196, 255, 0.4),0 0 30px rgba(0, 196, 255, 0.4),0 0 40px rgba(0, 196, 255, 0.4),#ffffff 20px 5px 3px;
}
.nav-link{
  --bs-nav-link-color: rgba(255, 255, 255, 0.8);
}

.nav-link:hover {
  color: rgb(255, 255, 255) !important;
  font-weight: bold;
  transition: 0.5s;
  text-shadow: #ffffff 20px 5px 3px; ;
}
.sidebar-link{
  color: rgb(255, 255, 255);
  font-size: 18px !important;
}
.sidebar-bg{
  --bs-offcanvas-bg: rgba(18, 28, 24, 0.4) !important;
  --bs-list-group-bg: rgba(18, 28, 24, 0.4) !important;
  background-color: rgba(18, 28, 24, 0.4) !important;
  backdrop-filter: blur(7px);
}
.offcanvas-fullscreen{
  width: 100vw!important;
  height: 100vh;
}
.change-my-color {
  filter: brightness(0) saturate(100%) invert(100%)   ;
}
</style>
