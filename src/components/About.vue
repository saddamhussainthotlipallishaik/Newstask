<template>
  <div>
    <div>
      <span>{{x}} {{y}}</span>
    </div>
    <canvas id="c" @mousedown="start" @mouseup="finish" @mousemove="draw"></canvas>
  </div>
</template>

<script>

export default {
  name:"About",
  data() {
    return {
      vueCanvas: null,
      started: false
    }
  },
  methods: {
    start() {
      this.started = true;
    },
    drawLine(x, y) {
      let ctx = this.vueCanvas;
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;
      ctx.lineTo(x, y);
      ctx.stroke();
    },
    draw(e) {
      if(!this.started) return;
      this.drawLine(e.offsetX, e.offsetY);
    },
    finish() {
      this.started = false;
      this.vueCanvas.beginPath();
    }
  },
  mounted() {
  var c = document.getElementById("c");
  c.width = 600;
  c.height = 600;
  var ctx = c.getContext("2d");    
  this.vueCanvas = ctx;
},
}

</script>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>
