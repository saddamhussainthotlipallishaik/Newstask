<template>
    <div>
        <ul>
            <li v-for="(items,index) in ListItems" :key="index"
                :id="index"
                @mousemove="dragging(index)"
                @mousedown="drag(index)"
                @mouseup="drop(index)"
            >{{items}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"DragandDrop2",
        data() {
            return {
                ListItems:["Tiger", "BMW", "Audi","Mustang"],
                pickedUp:false
            }
        },
        methods: {
            drag(index){
                let doc = document.getElementById(index)
                doc.style.position = "absolute";
                this.pickedUp = true
            },
            dragging(index){
                let doc = document.getElementById(index)
                if(this.pickedUp){
                    doc.style.left = event.clientX - 250 + "px";
                    doc.style.top = event.clientY - 20 + "px";
                }           
            },
            drop(){
                this.pickedUp = false
            }
        }
    }
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
li {
    background-color: rgb(95, 95, 247);
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
}
li:hover {
    background-color: rgb(34, 34, 255);
}
</style>