<template id="round-img">
  <div>
    <img :src="src" class="round-img">
    <div class="user-status" :class="status"></div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    props:['src','status']
  }
</script>

<style>
  .round-img{
    border-radius: 50%;
    width: 100%;
    transition:border linear .2s,box-shadow linear .5s;
    -moz-transition:border linear .2s,-moz-box-shadow linear .5s;
    -webkit-transition:border linear .2s,-webkit-box-shadow linear .5s;
    -o-transition:border linear .2s,-webkit-box-shadow linear .5s;
    outline:none;border-color:rgba(255, 255, 204, .75);
    box-shadow:0 0 8px rgba(255, 255, 204,.5);
    -moz-box-shadow:0 0 8px rgba(255, 255, 204,.5);
    -webkit-box-shadow:0 0 8px rgba(255, 255, 204,3);
    -o-box-shadow:0 0 8px rgba(255, 255, 204,.5);
  }

  .user-status{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: relative;
    left: 100%;
    margin-left: -24%;
    margin-top: -26%;
    margin-bottom: 10%;
  }
   .user-status.ready{
    background-color: lime;
  }
  .user-status.wait{
    background-color: #f93;
  }
</style>