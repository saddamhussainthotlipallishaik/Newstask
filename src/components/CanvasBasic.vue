<template>
    <div>
        <canvas ref="canvas" width="900" height="600">

        </canvas>
    </div>
</template>

<script>
    export default {
        name:"CanvasBasic",
        data(){
            return {
                // ctx:null
            }
        },
        mounted(){
            this.ctx = this.$refs.canvas.getContext('2d')
            
            //fillRect()
            // this.ctx.fillStyle = 'red'
            // this.ctx.fillRect(100,100,100,100)
            // this.ctx.fillStyle = 'green';
            // this.ctx.fillRect(220,100,100,100)

            // // strokeRect()
            // this.ctx.strokeStyle = 'blue';
            // this.ctx.strokeRect(90,210,100,100)
            // this.ctx.strokeStyle = 'purple'
            // this.ctx.strokeRect(140,210,100,100)
            // this.ctx.strokeStyle = 'yellow'
            // this.ctx.strokeRect(190,210,100,100)

            // //clearRect()
            // this.ctx.clearRect(110,110,80,80)
            // this.ctx.strokeRect(120,120,60,60)

            // //fillText()
            // this.ctx.font = '30px Arial'
            // this.ctx.fillStyle = 'blue'
            // this.ctx.fillText('Hello World',400,50)

            // //strokeText()
            // this.ctx.font = '40px arial'
            // this.ctx.strokeStyle = 'red'
            // this.ctx.strokeText('Hello World',400,100)

            // this.ctx.beginPath()
            // this.ctx.moveTo(50,50)
            // this.ctx.lineTo(150,50)
            // this.ctx.lineTo(100,200)
            // this.ctx.lineTo(50,50)
            // this.ctx.stroke()
            // this.ctx.fillStyle = 'coral'
            // this.ctx.fill()

            // this.ctx.beginPath()
            // this.ctx.moveTo(150,200)
            // this.ctx.lineTo(300,200)
            // this.ctx.lineTo(150,400)
            // this.ctx.closePath()
            // this.ctx.stroke()
            // this.ctx.beginPath()
            // this.ctx.moveTo(80,100)
            // this.ctx.lineTo(280,100)
            // this.ctx.lineTo(140,300)
            // this.ctx.closePath()
            // this.ctx.stroke()

            // this.ctx.beginPath()
            // this.ctx.rect(150,200,200,150)
            // this.ctx.fillStyle = 'red'
            // this.ctx.fill()


            // this.ctx.beginPath()
            // this.ctx.moveTo(200,40)
            // this.ctx.lineTo(600,40)
            // this.ctx.lineTo(400,500)
            // this.ctx.lineTo(200,40)
            // this.ctx.stroke()

            // this.ctx.beginPath()
            // this.ctx.moveTo(350,500)
            // this.ctx.lineTo(600,500)
            // this.ctx.lineTo(480,300)
            // this.ctx.lineTo(350,500)
            // this.ctx.stroke()

            // this.ctx.beginPath()
            // this.ctx.rect(100,100,100,50)
            // this.ctx.rect(220,100,100,50)
            // this.ctx.fillStyle = 'yellow'
            // this.ctx.fill()
            // this.ctx.beginPath()
            // this.ctx.rect(160,180,100,50)
            // this.ctx.rect(160,30,100,50)
            // this.ctx.fillStyle = 'red'
            // this.ctx.fill()

            // this.ctx.beginPath()
            // this.ctx.rect(350,100,100,50)
            // this.ctx.rect(470,100,100,50)
            // this.ctx.fillStyle = 'yellow'
            // this.ctx.fill()
            // this.ctx.beginPath()
            // this.ctx.rect(410,180,100,50)
            // this.ctx.rect(410,30,100,50)
            // this.ctx.fillStyle = 'red'
            // this.ctx.fill()
           
           
            this.ctx.beginPath()
            this.ctx.arc(300,300,100,0,Math.PI*2)
            this.ctx.stroke()

        }
    }
</script>

<style scoped>
canvas {
    border: 2px solid rgb(199, 197, 197);
    border-radius: 6px;
}
</style>