import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "../views/HomePage.vue";
import Cosplay from "../views/FestivalInfo_Cosplay.vue";
const routes = [
    {
        path: '/',
        name: './HomePage.vue',
        component:HomePage,
        props: true
    },
    {
        path: '/News',
        name: './News.vue',
        component: ()=>
            import("../views/News.vue"),
        props: true
    },
    {
        path: '/aboutus',
        name: './aboutus.vue',
        component: ()=>
        import("../views/AboutUs.vue"),
        props: true
    },
    {
        path: '/FestivalInfo/Cosplay',
        name: './FestivalInfo_Cosplay.vue',
        component: Cosplay,
        props: true
    },
    {
        path: '/FestivalInfo/Rule',
        name: './FestivalInfo_Rule.vue',
        component: ()=>
            import("../views/FestivalInfo_Rule.vue"),
        props: true
    },
    {
        path: '/ClubInfo/Signup',
        name: './ClubInfo_Signup.vue',
        component: ()=>
            import("../views/ClubInfo_ Signup.vue"),
        props: true
    },
    {
        path: '/ClubInfo/Rule',
        name: './ClubInfo_Rule.vue',
        component: ()=>
            import("../views/ClubInfo_Rule.vue"),
        props: true
    },
    {
        path: '/ClubInfo/list_and_map',
        name: './ClubInfo_list_and_map.vue',
        component: ()=>
            import("../views/ClubInfo_list_and_map.vue"),
        props: true
    },
    {
        path: '/Show/Sighup',
        name: './Show_Sighup.vue',
        component: ()=>
            import("../views/Show_Sighup.vue"),
        props: true
    },
    {
        path: '/Show/List',
        name: './Show_List.vue',
        component: ()=>
            import("../views/Show_List.vue"),
        props: true
    },
    {
        path: '/Show/GroupInfo',
        name: './Show_GroupInfo.vue',
        component: ()=>
            import("../views/Show_GroupInfo.vue"),
        props: true
    },
    {
        path: '/SiteInfo/Map',
        name: './SiteInfo_Map.vue',
        component: ()=>
            import("../views/SiteInfo_Map.vue"),
        props: true
    },
    {
        path: '/SiteInfo/traffic',
        name: './SiteInfo_traffic.vue',
        component: ()=>
            import("../views/SiteInfo_traffic.vue"),
        props: true
    },
    {
        path: '/PrivacyPolicy',
        name: './PrivacyPolicy.vue',
        component: ()=>
            import("../views/PrivacyPolicy.vue"),
        props: true
    },
];

const router = createRouter({
    history: createWebHistory('/YAF_web/'),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    }
});

export default router;
