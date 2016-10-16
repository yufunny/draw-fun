<template id="drawBorad">
  <div>
    <canvas id="canvas" width="480" height="480" @touchstart="drawBegin" @mousedown="drawBegin" @touchmove="drawing"></canvas>
  </div>
</template>

<script>
  
'use strict'

class Draw {
    constructor(el) {
        this.el = el
        this.canvas = document.getElementById(this.el)
        this.cxt = this.canvas.getContext('2d')
        this.stage_info = canvas.getBoundingClientRect()
        this.path = {
            beginX: 0,
            beginY: 0,
            endX: 0,
            endY: 0
        }
    }

    init() {
        // this.canvas.onmousedown = () => {
        //     this.drawBegin(event)
        // }
        // this.canvas.touchstart = () => {
        //     this.drawBegin(event)
        // }
        this.canvas.onmouseup = () => {
            this.drawEnd()
            // ws.send('stop')
        }
        this.clearCanvas()
    }
    drawBegin(e) {
        window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty()
        this.cxt.strokeStyle = "#000"

        this.cxt.beginPath()
        if(e.type == 'touchstart'){
          this.cxt.moveTo(
              e.touches[0].clientX - this.stage_info.left,
              e.touches[0].clientY - this.stage_info.top
          )
        }else{
          this.cxt.moveTo(
              e.clientX - this.stage_info.left,
              e.clientY - this.stage_info.top
          )
        }

        this.path.beginX = e.clientX - this.stage_info.left
        this.path.beginY = e.clientY - this.stage_info.top

        document.onmousemove = () => {
            this.drawing(event)
        }
        // document.onmouseup = this.drawEnd
    }
    drawing(e) {
        if(e.type == 'touchmove'){
          this.cxt.lineTo(
            e.touches[0].clientX - this.stage_info.left,
            e.touches[0].clientY - this.stage_info.top
          )
        }
        else{
          this.cxt.lineTo(
              e.clientX - this.stage_info.left,
              e.clientY - this.stage_info.top
          )
        }
        this.path.endX = e.clientX - this.stage_info.left
        this.path.endY = e.clientY - this.stage_info.top

        // ws.send(this.path.beginX + '.' + this.path.beginY + '.' + this.path.endX + '.' + this.path.endY)

        this.cxt.stroke()
    }
    drawEnd() {
        document.onmousemove = document.onmouseup = null
    }
    clearCanvas() {

            this.cxt.clearRect(0, 0, 500, 500)
        // btn.onclick = () => {
        //     this.cxt.clearRect(0, 0, 500, 500)
        //     // ws.send('clear')
        // }
    }
}

export default {
    data(){
      return {
        canvas : new Object()
      }
    },
    methods:{
      drawBegin: function(e){
        this.canvas.drawBegin(e)
      },
      drawing: function(e){
        this.canvas.drawing(e)
      }
    },
    mounted:function() {
        this.canvas = new Draw('canvas')
        // const ws = new WebSocket('ws://localhost:8090')
        // const ws = new Object()
        // let draw = new Draw('canvas')

        // let btn = document.getElementById('btn')
        this.canvas.init()
        // ws.onopen = () => {
        //     draw.init(ws, btn)
        // }
        // ws.onmessage = (msg) => {
        //     msg.data.split(':')[0] == 'keyword' ?
        //         document.getElementById('keyword').innerHTML = msg.data.split(':')[1] :
        //         false
        // }
    }
}
</script>

<style>
  canvas{
    width: 100%;
    height: 320px;
    border: none;
  }
</style>