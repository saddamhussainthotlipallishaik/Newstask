<template>
    <div>
        <canvas id="canvas" width="600px" height="500" @mousedown="startPainting" @mouseup="finishPainting" @mousemove="draw"></canvas>
    </div>
</template>

<script>
    export default {
        name:"Canvas",
        data(){
            return {
                vuecanvas:false,
                painting:false,
                // c:null,
                // ctx:null
            }
        },
        mounted() {
            let c = document.getElementById('canvas')
            let ctx = c.getContext('2d')
            this.vuecanvas = ctx
        },
        methods:{
            startPainting(e){
                this.painting = true
                this.draw(e)
            },
            finishPainting(){
                this.painting = false
                this.ctx.beginPath()
            },
            draw(e){
                if(!this.painting) return
                this.ctx.strokeStyle = 'black';
                this.ctx.lineWidth =10,
                this.ctx.lineCap='rounded',
                this.ctx.lineTo(e.clientX,e.clientY)
                this.ctx.stroke()
                this.ctx.beginPath()
                this.ctx.moveTo(e.clientX,e.clientY)
                console.log("draw")
            }
        }
    }
</script>

<style scoped>
#canvas {
    border: 2px solid black;
}
</style>