<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  mounted: function(){
    document.ontouchmove = function(e){ e.preventDefault(); };
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  padding: 0;
  margin: 0;
}
.view{
  max-width: 480px;
  min-width: 320px;
  min-height: 480px;
}
@media (min-width: 480px){
    .view{
      position: absolute;
      left: 50%;
      margin-left: -240px;
      /*border:1px solid gray;*/
    }
}
</style>
