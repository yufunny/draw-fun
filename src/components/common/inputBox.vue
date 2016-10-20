<template id="inputBox">
  <div class="input-box">
    <input type="text" name="content" placeholder="请输入消息" v-model="message" @keyup.enter="addMessage">
    <span @click="addMessage">发送</span>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        message:''
      }
    },
    methods:{
      addMessage : function(){
        if(this.message == ""){
          return;
        }
        this.$store.state.messages.push({
          name: "我",
          content: this.message,
      })
        this.message = ''
      }
    },
    watch:{
      message(){
        if(this.message.length>48){
          this.message = this.message.substr(0,48)
        }
      }
    }
  }
</script>

<style>
  .input-box{
    width: 100%;
    border-top: 1px solid gray;
    border-bottom: 0;
    margin: 0;
    height: 32px;
  }
  .input-box input{
    width: 80%;
    float: left;
    text-align: center;
    border:none;
    font-size: 16px;
    padding: 8px 0;
    outline: none;
  }

  .input-box span{
    width: 18%;
    float: left;
    text-align: center;
    display: inline-block;
    border-left: 1px solid gray;
    color: gray;
    padding: 8px 0;
    font-size: 16px;
    background: white;
    margin: 0;
    vertical-align: middle;
  }
</style>
