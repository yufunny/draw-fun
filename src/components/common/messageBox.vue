<template id="messageBox">
  <div id="messageDiv">
      <p v-for="msg in messages">{{ msg.name }}：{{ msg.content }}</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        el: '',
        stage_info:'',
      }
    },
    computed:{
      messages(){
        return this.$store.state.messages
      }
    },
    mounted:function(){
      this.el = document.getElementById("messageDiv")
      this.el.scrollTop = this.el.scrollHeight
      this.stage_info = this.el.getBoundingClientRect()
      var msgBox = this.el.parentNode
      msgBox.ontouchmove=function(e){
        console.log(2333) 
        e.stopPropagation();
        if(e.touches[0].clientY<this.stage_info.top || e.touches[0].clientY>(this.stage_info.top+msgBox.offsetHeight)){
          e.preventDefault();
        }
      }
    },
    watch:{
      messages(val){
        this.$nextTick(function () {
          this.el.scrollTop = this.el.scrollHeight
        })
      }
    }
  }
</script>

<style>

</style>
