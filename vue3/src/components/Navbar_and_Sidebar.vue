<template>
  <div>
    <!-- Navbar for desktop -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top d-none d-lg-flex">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">雲緣起2025</router-link>
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
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
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
                  class="nav-link dropdown-toggle"
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
                  class="dropdown-menu"
                  :aria-labelledby="'navbarDropdown' + index"
              >
                <li
                    v-for="(child, cIndex) in menu.children"
                    :key="'navbar-child-' + cIndex"
                >
                  <router-link class="dropdown-item" :to="child.link">
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
    <div class="d-lg-none fixed-top">
      <button
          class="btn btn-primary m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="sidebar"
      >
        ☰ Menu
      </button>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">雲緣起2025</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group"
              data-bs-dismiss="offcanvas">
            <li
                v-for="(menu, index) in menus"
                :key="'sidebar-' + index"
                class="list-group-item"
            >
              <router-link
                  v-if="menu.children.length === 0"
                  :to="menu.link"
                  class="text-decoration-none"

              >
                {{ menu.name }}
              </router-link>
              <a
                  v-else
                  class="d-flex justify-content-between align-items-center"
                  data-bs-toggle="collapse"
                  :href="'#sidebarSubmenu' + index"
                  role="button"
                  aria-expanded="false"
                  :aria-controls="'sidebarSubmenu' + index"
                  data-bs-dismiss="offcanvas"

              >
                {{ menu.name }}
                <span class="dropdown-toggle"></span>
              </a>
              <ul
                  v-if="menu.children.length > 0"
                  class="collapse list-group"
                  :id="'sidebarSubmenu' + index"
                  data-bs-dismiss="offcanvas"
              >
                <li
                    v-for="(child, cIndex) in menu.children"
                    :key="'sidebar-child-' + cIndex"
                    class="list-group-item"
                    @click="closeSidebar"
                >
                  <router-link
                      :to="child.link"
                      class="text-decoration-none"
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

<script>
export default {
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
            { name: "Cosplay", link: "/FestivalInfo/Cosplay" },
            { name: "活動規範", link: "/FestivalInfo/Rule" },
          ],
        },
        {
          name: "社團相關",
          link: "#",
          children: [
            { name: "報名參展", link: "/ClubInfo/Signup" },
            { name: "社團規範", link: "/ClubInfo/Rule" },
            { name: "社團名單與攤位圖", link: "/ClubInfo/list_and_map" },
          ],
        },
        {
          name: "舞台展演",
          link: "#",
          children: [
            { name: "報名表演", link: "/Show/Sighup" },
            { name: "舞台時間表", link: "/Show/List" },
            { name: "表演團體資訊", link: "/Show/GroupInfo" },
          ],
        },
        {
          name: "場地資訊",
          link: "#",
          children: [
            { name: "場地平面圖", link: "/SiteInfo/Map" },
            { name: "交通方式", link: "/SiteInfo/traffic" },
          ],
        },
      ],
    };
  },
  methods: {
    isActive(menu) {
      // 檢查當前路由是否匹配主選項或其子選項
      if (menu.link && this.$route.path === menu.link) {
        return true;
      }
      if (menu.children) {
        return menu.children.some((child) => this.$route.path === child.link);
      }
      return false;
    },
    closeSidebar() {
      const offcanvasElement = document.getElementById("sidebar");
      if (window.bootstrap) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (bsOffcanvas) {
          bsOffcanvas.hide();

        }
      }
    },
  },
};
</script>

<style>
/* Custom styles if needed */
/* Ensure Navbar and Sidebar are at the top */
body {
  padding-top: 56px; /* Adjust for fixed navbar height */
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
  transition: all 0.2s ease-in-out;
}
.active-link {
  font-weight: bold;
  color: #007bff !important; /* 使顏色更醒目 */
  text-decoration: underline;
}

.active-link > .nav-link {
  font-weight: bold;
  color: #007bff !important; /* 醒目的藍色 */
  text-decoration: underline;
}
.nav-link:hover {
  color: #0056b3 !important;
  text-decoration: underline;
  font-weight: bold;
}

</style>
