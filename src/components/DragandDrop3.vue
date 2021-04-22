<template>
  <div class="main-section">
      
    <div class="box"  @drop="Drop"  @dragover.prevent>
        <p v-for="item in listItems" :key="item.id"
            :id="item.id"
            draggable="true"
            @dragstart="Dragstart"
        >{{item.item}}</p>
    </div>
    <div class="box" @dragover.prevent @drop="Drop"></div>
    <div class="box" @dragover.prevent @drop="Drop"></div>
    <div class="box" @dragover.prevent @drop="Drop"></div>
    <div class="box" @dragover.prevent @drop="Drop"></div>
    <div class="box" @dragover.prevent @drop="Drop"></div>
  </div>
</template>

<script>
export default {
  name: "DragandDrop3",
    data(){
        return {
            listItems:[
                {id:0,item:"samsung"},
                {id:1,item:"LG"},
                {id:2,item:"Dell"},
                {id:3,item:"Asus"},
                {id:4,item:"HP"},
                {id:5,item:"Lenovo"}
            ]
        }
    },
    methods: {
        Dragstart(e) {
            e.dataTransfer.setData("text",e.target.id)
            setTimeout(()=>{
                e.target.style.display = "none"
            },0)
        },
        Drop(e) {
            const id = e.dataTransfer.getData("text")
            const dragElement = document.getElementById(id)
            dragElement.style.display = "block"
            dragElement.style.border = "2px dotted red"
            e.target.appendChild(dragElement)
        }
    }
};
</script>

<style scoped>
.main-section {
    width: 1000px;
    height: 360px;
    margin: 100px auto;
    display: flex;
    justify-content: space-around;
}
.box {
    width: 200px;
    height: 100%;
    padding: 20px;
    margin: 10px;
    background: #000;
    box-sizing: border-box;
    border-radius: 5px;
}
p {
    background: red;
    border-radius: 4px;
    padding: 8px;
    color: white;
    font-weight: 400;
}
</style>