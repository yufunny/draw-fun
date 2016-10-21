<template id="draw">
  <div id="drawPage">
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
      <draw-board :color="color" :line="line" :clear="clear"></draw-board>
      <button class="tool-btn" @click.stop="showPannel" @mousemove.stop=""  @mousedown.stop="">工具箱</button>
    <div class="message-box">
      <message-box></message-box>
    </div>
    <div>
      <input-box class="input-box"></input-box>
    </div>
    <tool-box @changeColor="changeColor" @clearCanvas="clearCanvas" @changeLineWidth="changeLineWidth"></tool-box>
  </div>
</template>

<script>
  import timeCounter from './timeCounter.vue'
  import drawBoard from './drawBoard.vue'
  import messageBox from '../common/messageBox.vue'
  import inputBox from '../common/inputBox.vue'
  import toolBox from './toolBox.vue'
  export default{
    data(){
      return{
        preUser:'大雄',
        currentUser: '静香',
        nextUser: '小叮当',
        drawTips: '一个字',
        color:"#000",
        clear: 1,
        line: 1,
      }
    },
    components:{
      timeCounter,drawBoard,messageBox,inputBox,toolBox
    },
    methods:{
      goHome:function(){
        this.$store.commit('showHome')
      },
      showPannel:function(){
        this.$store.state.showPannel=true
      },
      changeColor:function(color){
        this.color = color
      },
      clearCanvas:function(){
        this.clear++
      },
      changeLineWidth:function(line){
        this.line = line
      },
    }
  }
</script>

<style>
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

  #drawPage .backbtn{
    left: 24px;
    top: 20px;
  }

  .draw-info p{
    margin: 0;
    text-align: center;
    margin-right: 1.5em;
  }

  .time-counter{
    position: absolute;
    right: 1em;
    top:48px;
    margin: 0;
  }
  .time-counter p{
    margin: 0;
  }

  #drawPage .message-box >div{
    top: 400px;
  }

  canvas{
    width: 100%;
    height: 320px;
    border: none;
    background-color: white;
  }

  .tool-btn{
    margin-top: -32px;
    position: fixed;
    z-index: 9;
    height: 30px;
    border: 1px solid #39f;
    border-radius: 2px;
    color:#39f;
    background: transparent;
    right: 0;
    outline: none;
  }

</style>

<style>
@media (max-height: 500px){
  #drawPage .message-box >div{
    top: 315px;
  }
  canvas{
    height: 240px;
  }
}
@media (min-height: 640px){
  #drawPage .message-box >div{
    top: 435px;
  }
  canvas{
    height: 360px;
  }
}

@media(min-width: 480px){
  .tool-btn{
    width:64px;
    margin-left:410px;
    right:auto;
  }
}
</style>
