<template>
    <div class="bg-warning sidebar-section">
        <b-row>
            <b-col>
                <header>Menu</header>
                <ul>
                    <li><a href="#"><b-icon icon="search" class="icons"></b-icon>Investigative</a></li>
                    <li><a href="#"><b-icon icon="command" class="icons"></b-icon>Political</a></li>
                    <li><a href="#"><b-icon icon="zoom-out" class="icons"></b-icon>Crime</a></li>
                    <li><a href="#"><b-icon icon="graph-up" class="icons"></b-icon>Business</a></li>
                    <li><a href="#"><b-icon icon="laptop-fill" class="icons"></b-icon>Education</a></li>
                    <li><a href="#"><b-icon icon="circle-fill" class="icons"></b-icon>Sports</a></li>
                    <li><a href="#"><b-icon icon="camera-reels-fill" class="icons"></b-icon>Movies</a></li>
                </ul>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name:"Sidebar"
    }
</script>

<style scoped>
.sidebar-section {
    width: 17vw;
    position: fixed;
    left: 0;
}
.sidebar-section header {
    font-size: 25px;
    color: white;
    font-weight: 500;
    text-align: center;
    line-height: 70px;
    font-family: sans-serif;
}
.sidebar-section li a {
    display: block;
    height: 100%;
    width: 100%;
    line-height: 65px;
    font-size: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    border-top: 1px solid #000;
    text-decoration: none;
    transition: .5s;
    color: white;
}
ul li:hover a {
    padding-left: 50px;
}
.icons {
    margin-right: 20px;
}
</style>