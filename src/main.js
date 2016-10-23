import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.config.debug = true

Vue.use(VueResource)
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    currentShow : 'home',
    showPannel:false,
    messages:[
    ]
  },
  mutations:{
    showHome(state){
      state.currentShow = 'home'
    },
    showWait(state){
      state.currentShow = 'wait'
    },
    showDraw(state){
      state.currentShow = 'draw'
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
