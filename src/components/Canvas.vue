<template>
    <div>
        <canvas id="canvas" ref="canvas" width="600px" height="500" @mousedown="startWriting" @mouseup="endWriting" @mousemove="write"></canvas>
        <button @click="writing=false">Clear</button>
    </div>
</template>

<script>
    export default {
        name:"Canvas",
        data(){
            return {
               writing:false,
               Vuecanvas:null
            }
        },
        mounted(){
            this.Vuecanvas = this.$refs.canvas.getContext('2d')
        },
        methods:{
           startWriting(){
               this.writing = true
               this.Vuecanvas.beginPath();
               this.Vuecanvas.moveTo()

           },
           write(e){
               if(!this.writing) return
               this.Vuecanvas.lineWidth = 6;
               this.Vuecanvas.lineCap = "round";
               this.Vuecanvas.lineTo(e.clientX,e.clientY)
               this.Vuecanvas.stroke()
           },
           endWriting(){
               this.writing = false
           }
        }
    }
</script>

<style scoped>
#canvas {
    border: 2px solid black;
}
</style>