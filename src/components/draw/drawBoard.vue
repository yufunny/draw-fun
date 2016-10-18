<template id="drawBorad">
  <div>
    <canvas id="canvas" width="720" height="480" @touchstart="drawBegin" @mousedown="drawBegin" @touchmove="drawing"></canvas>
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
          var points = this.transPoint(e.touches[0].clientX,e.touches[0].clientY)
        }else{
          var points = this.transPoint(e.clientX,e.clientY)
        }
        this.cxt.moveTo(
          points.x,points.y
        )

        this.path.beginX = points.x
        this.path.beginY = points.y

        document.onmousemove = () => {
            this.drawing(event)
        }
        // document.onmouseup = this.drawEnd
    }
    drawing(e) {
        if(e.type == 'touchmove'){
          var points = this.transPoint(e.touches[0].clientX,e.touches[0].clientY)
        }
        else{
          var points = this.transPoint(e.clientX,e.clientY)
        }
        this.cxt.lineTo(
          points.x,points.y
        )
        this.path.endX = points.x
        this.path.endY = points.y

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

    transPoint(x,y){
      var a = (x - this.stage_info.left) * this.canvas.width/this.canvas.offsetWidth
      var b = (y - this.stage_info.top) * this.canvas.height/this.canvas.offsetHeight
      return {
        x:a,
        y:b
      }
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
</style>