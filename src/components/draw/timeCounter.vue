<template id="timeCounter">
  <div>
    <p>{{ remainTime }} 秒</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    props:['remainTime'],
    mounted:function(){
      var self = this
      console.log(this.remainTime)
      var timeHandler = setInterval(function(){
        if(self.remainTime>0){
          self.remainTime--
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