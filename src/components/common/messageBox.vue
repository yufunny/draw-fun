<template id="messageBox">
  <div>
      <p v-for="msg in messages">{{ msg.name }}：{{ msg.content }}</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    computed:{
      messages(){
        return this.$store.state.messages
      }
    }
  }
</script>

<style>

</style>