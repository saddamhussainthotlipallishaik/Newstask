<template>
  <div id="app">
   <!-- <Header /> -->
   <!-- <Sidebar /> -->
   <!-- <Card /> -->
   <!-- <Login />
   <Register class="mt-5" /> -->
   <!-- <PreviewImg /> -->
   <!-- <Canvas /> -->
   <!-- <About /> -->
   <!-- <NewsDashboard /> -->
   <!-- <Profile /> -->
   <!-- <Dragndrop /> -->
   <!-- <Dragndrop2 /> -->
   <!-- <Draganddrop3 /> -->
   <!-- <PracticePDF /> -->
   <!-- <CanvasBasic /> -->
   <!-- <LandingNavbar />
   <Landingmiddle /> -->
   <router-view :fav="favourite" @fav="addFav" @remfav="unlike"></router-view>
  </div>
</template>

<script>
// import Profile from '@/components/Profile'
// import NewsDashboard from '@/components/NewsDashboard'
// import Register from '@/components/Register'
// import Login from '@/components/Login'
// import About from '@/components/About'
// import Canvas from '@/components/Canvas'
// import Header from '@/components/Header'
// import CanvasBasic from './components/CanvasBasic'
// import Card from '@/components/Card'
// import PreviewImg from '@/components/PreviewImg',
// import Dragndrop from './components/DragndDrop'
// import Dragndrop2 from './components/DragandDrop2'
// import Draganddrop3 from './components/DragandDrop3'
// import PracticePDF from './components/PracticePdf2'
// import LandingNavbar from '@/components/LandingNavbar'
// import Landingmiddle from '@/components/Landingmiddle'
export default {
  name: 'App',
  components: {
    // About,
    // Canvas,
    // Header,
    // Card,
    // Login,
    // Register
    // PreviewImg,
    // NewsDashboard,
    // Profile,
    // Dragndrop,
    // Dragndrop2,
    // Draganddrop3,
    // PracticePDF,
    // CanvasBasic,
    // LandingNavbar,
    // Landingmiddle
  },
  data(){
    return {
      favourite:[],

    }
  },
  methods:{
    addFav(e){
      this.favourite.push(e)
      console.log(e,"App")
    },
    unlike(i){
      this.favourite.splice(i,1)
      console.log("remove")
    }
  },
}
</script>

<style>
/* #app {
  background: #d3d3d3;
} */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
