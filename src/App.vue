<template>
  <div id="app">
   <Header />
   <!-- <Sidebar /> -->
   <!-- <Card /> -->
   <!-- <Login />
   <Register class="mt-5" /> -->
   <!-- <PreviewImg /> -->
   <!-- <Canvas /> -->
   <!-- <About /> -->
   <!-- <NewsDashboard /> -->
   <!-- <Profile /> -->
   <router-view :fav="favourite" @fav="addFav"></router-view>
  </div>
</template>

<script>
// import Profile from '@/components/Profile'
// import NewsDashboard from '@/components/NewsDashboard'
// import Register from '@/components/Register'
// import Login from '@/components/Login'
// import About from '@/components/About'
// import Canvas from '@/components/Canvas'
import Header from '@/components/Header'

// import Card from '@/components/Card'
// import PreviewImg from '@/components/PreviewImg'
export default {
  name: 'App',
  components: {
    // About,
    // Canvas,
    Header,
    // Card,
    // Login,
    // Register
    // PreviewImg,
    // NewsDashboard,
    // Profile
  },
  data(){
    return {
      favourite:[],

    }
  },
  methods:{
    addFav(e){
      this.favourite.push(e)
      console.log(e)
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
