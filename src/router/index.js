import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/tabbar/Home.vue'
import Search from '../components/tabbar/Search.vue'
import Shopcar from '../components/tabbar/Shopcar.vue'
import Member from '../components/tabbar/Member.vue'
import Newslist from '../components/news/Newslist.vue'
import Newsinfo from '../components/news/Newsinfo.vue'
import Photolist from '../components/photo/Photolist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect: '/home'},
    {path:'/home',component:Home},
    {path:'/search',component:Search},
    {path:'/shopcar',component:Shopcar},
    {path:'/member',component:Member},
    {path:'/home/Newslist',component:Newslist},
    {path:'/home/Newsinfo/:id',component:Newsinfo},
    {path:'/home/photolist',component:Photolist}
  ],
  linkActiveClass:'mui-active'
})
