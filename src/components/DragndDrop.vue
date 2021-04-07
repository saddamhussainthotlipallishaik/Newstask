<template>
    <div class="main-section">
        <div class="drag-section" @dragover.prevent  @drop="Dropped">
            <h1 class="text-center text-dark">Drag-Section</h1>
            <h3 class="drag-element text-center" id="item-1" @dragover.prevent @dragstart="DragStart" draggable="true">Tiger</h3>
            <h3 class="drag-element text-center" id="item-2" @dragover.prevent @dragstart="DragStart" draggable="true">BMW</h3>
            <h3 class="drag-element text-center" id="item-3" @dragover.prevent @dragstart="DragStart" draggable="true">Dominar</h3>
             <h3 class="drag-element text-center" id="item-4" @dragover.prevent @dragstart="DragStart" draggable="true">MT-15</h3>
        </div>
        <div class="drop-section" @dragover.prevent  @drop="Dropped">
            <h1 class="text-center text-light">Drop-Section</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name:"dragndrop",
        methods :{
            DragStart(e) {
                e.dataTransfer.setData("text",e.target.id)
                setTimeout(()=>{
                    e.target.style.display = 'none'
                },0)
            },
            Dropped(e) {
                const id = e.dataTransfer.getData("text")
                const dragElement = document.getElementById(id)
                dragElement.style.display = 'block'
                e.target.appendChild(dragElement)
            }
        }
    }
</script>

<style scoped>
.main-section {
    border: 2px solid chocolate;
    display: flex;
    height: 50vh;
}
.drag-section {
    background-color: yellow;
    width: 50%;
}
.drop-section {
    background-color: green;
    width: 50%;
}
.drag-element {
    background-color: darkcyan;
    border-radius: 3px;
    width: 98%;
    color: white;
}

</style>