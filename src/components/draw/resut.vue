<template id="resutBox">
  <div class="result-pannel" v-show="isShow"  @mousemove.stop=""  @mousedown.stop="">
    <div class="tool-box">      
      <p>答案：{{ answer }}</p>
      <p>
        <span v-for="user in rightUser">{{ user }}</span>
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
        return this.$store.state.showResut
      },
      answer(){
        return '苹果'
      },
      rightUser(){
        return {
          '大雄','静香',
        }
      }
    },
    methods:{
    }
  }
</script>

<style>
</style>
