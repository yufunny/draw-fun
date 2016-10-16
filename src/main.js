import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)

import home from './components/home/main.vue'
import wait from './components/wait/main.vue'
import draw from './components/draw/main.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/wait',
      component: wait
    },
    {
      path: '/draw',
      component: draw
    },
    
  ]

})


new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
