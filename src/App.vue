<template>
  <div id="app" class="view">
    <home v-if="showPage == 'home'"></home>
    <wait v-if="showPage == 'wait'"></wait>
    <draw v-if="showPage == 'draw'"></draw>
  </div>
</template>

<script>

import home from './components/home/main.vue'
import wait from './components/wait/main.vue'
import draw from './components/draw/main.vue'

export default {
  data () {
    return {
    }
  },
  components:{
    home,wait,draw
  },
  computed:{
    showPage(){
      return this.$store.state.currentShow
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
  position: relative;
}
* {
  -moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select:none;
  -khtml-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  user-select:none;
  outline:none; 
  -webkit-touch-callout:none;
  -webkit-appearance:none;
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
