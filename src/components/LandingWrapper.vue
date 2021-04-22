<template>
    <div class="position-relative">
        <LandingNavbar />
        <Landingmiddle class="landing-middle"></Landingmiddle >
    </div>
</template>

<script>
import LandingNavbar from '@/components/LandingNavbar'
import Landingmiddle from '@/components/Landingmiddle'
    export default {
        name:"LandingWrapper",
        components:{
            LandingNavbar,
            Landingmiddle
        }
    }
</script>

<style scoped>

</style>