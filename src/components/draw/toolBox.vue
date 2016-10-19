<template id="toolBox">
  <div class="tool-pannel" v-show="isShow"  @mousemove.stop=""  @mousedown.stop="">
    <div class="tool-box">      
      <div class="actions">
        <button class="action-item" @click="clearCanvas">清空</button>
      </div>
        <hr>
      <div class="pencil">
        <p>画笔</p>
        <div class="line-item" v-for="line in lineWidths" @click="changeLineWidth(line)" :class="'line-width-'+line"><div></div></div>
      </div>
        <hr>
      <div class="colors">
        <p>颜色</p>
        <div class="color-item" v-for="color in colors" :style="{backgroundColor: color}" @click="changeColor(color)"></div>
      </div>
      <div class="close-box">
        <button class="close-btn" @click="closePannel">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        selectedTool: '',
        colors:[
          "#f00","#ffa500","#ff0","#0f0","#00f","#60c","#000"
        ],
        lineWidths:[
          0,1,5,10
        ],
      }
    },
    props:["show"],
    computed:{
      isShow(){
        return this.$store.state.showPannel
      }
    },
    methods:{
      clearCanvas:function(){
        this.$emit("clearCanvas")
      },
      changeColor:function(color){
        this.$emit("changeColor",color)
      },
      changeLineWidth:function(line){
        this.$emit("changeLineWidth",line)
      },
      closePannel:function(){
        this.$store.state.showPannel=false
      }
    }
  }
</script>

<style>
  .tool-pannel{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99;
    top:0;
    left: 0;
    background: hsla(0,0%,100%,.9);
    overflow: hidden;
  }

  .tool-box{
    position: absolute;
    top:50%;
    margin-top: -140px;
    width: 100%;
  }

  .color-item{
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-left: 10px;
  }
  .action-item{
    background: transparent;
    border: 1px solid #39f;
    color:#39f;
    border-radius: 2px;
    outline:none;
  }
  .pencil-item{
    width: 24px;
    height: 24px;
    border: 1px solid #39f;
    color:#39f;
    text-align: center;
    margin-left: 10px;
    display: inline-block;
    margin-left: 10px;
    font-size: 24px;
  }
  .line-item{
    width: 24px;
    height: 24px;
    border: 1px solid #39f;
    color:#39f;
    text-align: center;
    margin-left: 10px;
    display: inline-block;
    margin-left: 10px;
    font-size: 24px;
  }
  .line-item > div{
    background-color: #000;
    border-radius: 50%;
    margin:auto;
  }
  .line-width-0 > div{
    width: 0;
    height: 0;
    margin-top: 10px;
  }
  .line-width-1 > div{
    width: 4px;
    height: 4px;
    margin-top: 10px;
  }
  .line-width-5 > div{
    width: 8px;
    height: 8px;
    margin-top: 8px;
  }
  .line-width-10 > div{
    width: 12px;
    height: 12px;
    margin-top: 6px;
  }
  .close-box{
    width: 100%;
    text-align: center;
  }
  .close-btn{
    text-align: center;
    background: transparent;
    border: 1px solid #39f;
    border-radius: 2px;
    color:#39f;
    width: 48px;
    height: 24px;
    margin-top: 24px;
    outline:none;
  }
  hr{
    margin-top: 1em;
  }
</style>