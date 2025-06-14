import { createRouter, createWebHistory } from "vue-router";

// 引入路由组建
import Home from "../components/pages/Home.vue";
import Working from "../components/pages/Working.vue";
import Games from "../components/pages/Games.vue";
import Video from "../components/pages/Video.vue";
import Creating from "../components/pages/Creating.vue";
import Observing from "../components/pages/Observing.vue";
import Updates from "../components/pages/Updates.vue";
import AppDetail from "../components/pages/AppDetail.vue";

// 创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            // 重定向至Home
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/working",
            component:Working
        },
        {
            path:"/games",
            component:Games
        },
        {
            path:"/video",
            component:Video
        },
        {
            path:"/creating",
            component:Creating
        },
        {
            path:"/observing",
            component:Observing
        },
        {
            path:"/updates",
            component:Updates
        },
        {
            path:"/detail",
            component:AppDetail
        }
    ]
})

export default router