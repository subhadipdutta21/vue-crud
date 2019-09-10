import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from "@/components/About";
import Profile from "@/components/Profile";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path:'/about',
      name:'about',
      component: About
    },
    {
      path : '/profile/:id',
      name:'profile',
      component: Profile
    }
  ]
})
