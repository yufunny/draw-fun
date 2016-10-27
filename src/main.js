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
    roomId: -1,
    messages:[
    ],
    userList:[
      {
        id: 1,
        name: "大雄",
        avatar: "/statics/images/avatar.png",
        status: "ready",
      },
      {
        id: 2,
        name: "静香",
        avatar: "/statics/images/avatar.png",
        status: "ready",
      },
      {
        id: 3,
        name: "小叮当",
        avatar: "/statics/images/avatar.png",
        status: "wait",
      },
      {
        id: 3,
        name: "小夫",
        avatar: "/statics/images/avatar.png",
        status: "wait",
      },
    ],
  },
  mutations:{
    showHome(state){
      state.currentShow = 'home'
    },
    showWait(state,roomId){
      state.roomId = roomId
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
