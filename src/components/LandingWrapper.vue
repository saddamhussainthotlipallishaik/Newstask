<template>
    <div class="main-section">
       <div>
            <LandingNavbar />
       </div>

        <b-row align-h="center" class="mt-5" no-gutters>
            <b-col cols="8">
                <Landingmiddle />
            </b-col>
        </b-row>
        <!-- <b-row align-h="center" class="mt-5" no-gutters>
            <b-col cols="8">
                <ScrollCard />
            </b-col>
        </b-row> -->
    </div>
</template>

<script>
import LandingNavbar from './LandingNavbar'
import Landingmiddle from './Landingmiddle'
// import ScrollCard from './ScrollCard'
    export default {
        name:"LandingWrapper",
        components:{
            LandingNavbar,
            Landingmiddle,
            // ScrollCard
        }
    }
</script>

<style scoped>
.main-section {
    background-image: url(../assets/n1.jpg);
    height: 100vh;
}
</style>