<template id="timeCounter">
  <div>
    <p>{{ restTime }} 秒</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        restTime:0
      }
    },
    props:['remainTime'],
    mounted:function(){
      this.restTime = this.remainTime
      var self = this
      var timeHandler = setInterval(function(){
        if(self.restTime>0){
          self.restTime--
        }else{
          clearInterval(timeHandler)
          self.$emit('timeout')
        }
        
      },1000)
    }
  }
</script>

<style scoped>
  p{
    margin: 0;
  }
</style>