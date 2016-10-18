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
      {
        name: "大雄",
        content: "23333",
      },
      {
        name: "大雄",
        content: "hahahha",
      },
      {
        name: "我",
        content: "你在说什么？",
      },
      {
        name: "大雄",
        content: "好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦",
      },
      {
        name: "我",
        content: "MDZZ",
      },
      {
        name: "大雄",
        content: "23333",
      },
      {
        name: "大雄",
        content: "hahahha",
      },
      {
        name: "我",
        content: "你在说什么？",
      },
      {
        name: "大雄",
        content: "好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦",
      },
      {
        name: "我",
        content: "MDZZ",
      },
      {
        name: "大雄",
        content: "23333",
      },
      {
        name: "大雄",
        content: "hahahha",
      },
      {
        name: "我",
        content: "你在说什么？",
      },
      {
        name: "大雄",
        content: "好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦好好玩哦",
      },
      {
        name: "我",
        content: "MDZZ",
      },
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
