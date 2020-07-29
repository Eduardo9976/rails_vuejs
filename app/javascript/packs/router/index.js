import Vue from "vue";
import Router from "vue-router";
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'



Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL ,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    }
  ],
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  } 
})