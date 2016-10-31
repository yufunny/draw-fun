<template id="wait">
  <div>
    <div class="backbtn" @click="goHome"></div>
    <div class="user-list">
      <p class="room-id">房间号 ：{{ roomId }}</p>
      <div v-for="user in users" class="user-box">        
        <round-img :src="user.avatar" width="80px" :status="user.status"></round-img>
        <p>{{ user.name }}</p>
      </div>
      <button class="ready-btn" @click="changeStat">{{ readyStat ? "取消" : "准备"}}</button>
    </div>
    <div class="message-box">
      <message-box></message-box>
    </div>
    <div>
      <input-box class="input-box"></input-box>
    </div>
  </div>
</template>

<script>
  import roundImg from '../common/roundImg.vue'
  import messageBox from '../common/messageBox.vue'
  import inputBox from '../common/inputBox.vue'

  export default{
    data(){
      return {
        // readyStat:false
      }
    },
    computed:{
      roomId(){
        return this.$store.state.roomId
      },
      users(){
        var allReady = true
        var userList = this.$store.state.userList
        for(var user in userList){
          if(userList[user].status == 0){
            allReady = false
          }
        }

        if(allReady){
          this.$store.commit('showDraw')
        }
        return this.$store.state.userList
      },
      readyStat(){
        return this.$store.state.userList[this.$store.state.uid].status
      }
    },
    methods:{
      changeStat: function(){
        this.$store.commit('changeState')
      },
      goHome: function(){
        this.$store.commit('showHome')
      }
    },
    components:{
      roundImg,messageBox,inputBox
    }
  }
</script>

<style>
  .user-box{
    width: 20%;
    display: inline-block;
    margin-left: 10%;
    text-align: center;
    margin-top: 1em;
  }
  .user-box p{
    color: white;
    margin: 0;
    margin-top: 4px;
  }
  .room-id{
    color: white;
    margin: 0;
    padding-top: 20px;
  }
  .room-id{
    text-align: center;
  }

  .user-list{
    background: #39f;
    height: 370px;
  }

  .backbtn{
    height: 14px;
    width: 14px;
    position: absolute;
    left: 24px;
    top: 24px;
    background: transparent;
    box-sizing: border-box;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
  
    outline: none;
    -webkit-appearance: none;
    transform:rotate(45deg); 
    -moz-transform:rotate(45deg); 
    -webkit-transform:rotate(45deg);
  }

  .ready-btn{
    display: block;
    box-sizing: border-box;
    background: transparent;
    width: 30%;
    height: 32px;
    margin-left: 35%;
    margin-top: 8px;
    color: white;
    font-size: 16px;
    border:1px solid white;
    border-radius: 2px;
    outline: none;
  }

  .message-box >div{
    position: fixed;
    bottom: 33px;
    overflow-y: auto;
    max-width: 480px;
    background-color: #f6f6f6;
    font-size: 14px;
  }
  .message-box p{
    margin:4px 16px;
  }

  .input-box{
    position: fixed;
    z-index: 99;
    bottom: 0;
    max-width: 480px;
  }

@media (min-width: 480px){
  .user-list{
    height: 400px;
  }
  .user-box{
    margin-top: 1.5em;
  }
  .message-box >div{
    top: 400px;
  }
}
@media (max-width: 400px){
  .user-list{
    height: 370px;
  }
  .user-box{
    margin-top: 1.5em;
  }
  .message-box >div{
    top: 370px;
  }
}
@media (max-width: 360px){
  .user-list{
    height: 340px;
  }
  .user-box{
    margin-top: 1.5em;
  }
  .message-box >div{
    top: 340px;
  }
}
@media (max-width: 320px){
  .user-list{
    height: 310px;
  }
  .user-box{
    margin-top: 1.5em;
  }
  .message-box >div{
    top: 310px;
  }
}
</style>
