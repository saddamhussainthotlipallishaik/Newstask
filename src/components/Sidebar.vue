<template>
    <div class="bg-light sidebar-section">
        <b-row>
            <b-col>
                <header>Menu</header>
                <ul>
                    <li><a href="#"><b-icon icon="search"></b-icon>Investigative</a></li>
                    <li><a href="#"><b-icon icon="search"></b-icon>Political</a></li>
                    <li><a href="#"><b-icon icon="search"></b-icon>Crime</a></li>
                    <li><a href="#"><b-icon icon="search"></b-icon>Business</a></li>
                    <li><a href="#"><b-icon icon="search"></b-icon>Education</a></li>
                    <li><a href="#"><b-icon icon="search"></b-icon>Sports</a></li>
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
    /* padding: 10px; */
}
</style>