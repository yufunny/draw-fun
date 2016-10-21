<template id="home">
  <div>
    <h1>你画我猜</h1>
    <div class="entry-group">
      <input placeholder="输入昵称" v-model="name" :class="{ require:needName }" @keyup="inputName" maxlength="6">
      <input placeholder="输入房间号" v-model="roomid" :class="{ require:needRoom }" @keyup="inputRoom" maxlength="6">
      <button @click="entryRoom">进入</button> 
    </div>        
  </div>
</template>

<script>
  export default{
    data(){
      return {
        name:'',
        roomid: '',
        needName: false,
        needRoom: false,
      }
    },
    methods:{
      entryRoom: function(){
        if (this.roomid == ''){
          this.needRoom = true
        }
        if(this.name == ''){
          this.needName = true
        }
        if(this.needRoom || this.needName){
          return
        }
        this.$store.commit('showWait')
      },
      inputName:function(){
        this.needName = false
      },
      inputRoom:function(){
        this.needRoom = false
      }
    },
  }

</script>

<style>
  h1{
    text-align: center;
    margin-top: 100px;
  }

  .entry-group .require{
    border: 1px solid red;
  }

  .entry-group{
    width: 100%;
    text-align: center;
    margin-top: 60px;
    margin-left: 10%;
  }

  .entry-group input,.entry-group input:focus{
    height: 32px;
    width: 80%;
    display: block;
    text-align: center;
    box-sizing: border-box;
    border-radius: 4px;
    border:1px solid #09f;
    outline: none;
    margin-top: 8px;
  }
  .entry-group button{
    height: 32px;
    width: 80%;
    display: block;
    text-align: center;
    background: #09f;
    border:2px solid #09f;
    box-sizing: border-box;
    color: white;
    border-radius: 4px;
    margin-top: 12px;
    outline: none;
  }

</style>