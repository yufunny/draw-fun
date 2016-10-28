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
    uid:1,
    messages:[
    ],
    userList:{
      1:{
        name: "大雄",
        avatar: "/statics/images/avatar.png",
        status: 0,
      },
      2:{
        name: "静香",
        avatar: "/statics/images/avatar.png",
        status: 0,
      },
      3:{
        name: "小叮当",
        avatar: "/statics/images/avatar.png",
        status: 0,
      },
      4:{
        name: "小夫",
        avatar: "/statics/images/avatar.png",
        status: 0,
      },
    },
  },
  mutations:{
    showHome(state){
      state.currentShow = 'home'
    },
    showWait(state,roomId){
      state.roomId = roomId
      state.currentShow = 'wait'
    },
    setUid(state,uid){
      state.uid = uid
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
