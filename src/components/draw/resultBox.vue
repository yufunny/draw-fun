<template id="resultBox">
  <div class="result-pannel" v-show="isShow"  @mousemove.stop=""  @mousedown.stop="">
    <div>      
      <p>答案：<span class="answer-text">{{ answer }} </span></p>
      <p>
        <span v-for="user in rightUser">{{ user }} </span>答对了
      </p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
      }
    },
    props:["show"],
    computed:{
      isShow(){
        return this.$store.state.showResult
      },
      answer(){
        return '苹果'
      },
      rightUser(){
        return ['大雄','静香']
      }
    },
    methods:{
    }
  }
</script>

<style>
  .result-pannel{
    position: fixed;
    z-index: 11;
    border: 1px solid #39f;
    width: 80%;
    height: 200px;
    left: 10%;
    top:50%;
    /*padding-top: 50%;*/
    margin-top: -150px;
    text-align: center;
    position: relative;
  }

  .answer-text{
    color: red;
  }
</style>
