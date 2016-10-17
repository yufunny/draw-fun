<template id="draw">
  <div>
    <div class="backbtn" @click="goHome"></div>
    <div class="head-info">
      <div class="user-queue">
        <span>{{ preUser }}</span>
        <span>{{ currentUser }}</span>
        <span>{{ nextUser }}</span> 
      </div>
      <div class="draw-info">
        <p>提示：{{ drawTips }}</p>
        <time-counter :remainTime="60" class="time-counter"></time-counter>
      </div>
    </div>
      <draw-board></draw-board>

    <div class="message-box" id="messageBox">
      <message-box :messages="messages"></message-box>
    </div>
    <div>
      <input-box class="input-box"></input-box>
    </div>
  </div>
</template>

<script>
  import timeCounter from './timeCounter.vue'
  import drawBoard from './drawBoard.vue'
  import messageBox from '../common/messageBox.vue'
  import inputBox from '../common/inputBox.vue'
  export default{
    data(){
      return{
        preUser:'大雄',
        currentUser: '静香',
        nextUser: '小叮当',
        drawTips: '一个字',
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
      }
    },
    components:{
      timeCounter,drawBoard,messageBox,inputBox
    },
    methods:{
      goHome:function(){
        this.$store.commit('showHome')
      }
    },
    mounted: function(){
      var msgBox = document.getElementById("messageBox")
      msgBox.ontouchmove=function(e){
        e.stopPropagation();
      }
    }
  }
</script>

<style scoped>
  .head-info {
    background: #39f;
    color: white;
    height: 72px;
  }

  .user-queue {
    height: 48px;
  }
  .user-queue span{
    margin-top: 1em;
    display: inline-block;
    width: 20%;
    margin-left: 10%;
    text-align: center;
  }

  .backbtn{
    left: 24px;
    top: 20px;
  }

  .draw-info p{
    margin: 0;
    text-align: center;
    margin-right: 1.5em;
  }

  .time-counter{
    position: fixed;
    right: 1em;
    top:48px;
    margin: 0;
  }
  .time-counter p{
    margin: 0;
  }

  .message-box >div{
    top: 400px;
  }
@media (max-width: 400px){
  .message-box >div{
    top: 400px;
  }
}
@media (max-width: 360px){
  .message-box >div{
    top: 400px;
  }
}
@media (max-width: 320px){
  .message-box >div{
    top: 400px;
  }
}
</style>