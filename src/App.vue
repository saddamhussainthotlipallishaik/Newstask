<template>
  <div id="app">
    <!-- <Header /> -->
    <!-- <Sidebar /> -->
    <!-- <Card /> -->
    <!-- <Login />
   <Register class="mt-5" /> -->
    <!-- <NewsDashboard /> -->
    <!-- <Profile /> -->
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
// import Header from '@/components/Header'
// import Card from '@/components/Card'
// import LandingNavbar from '@/components/LandingNavbar'
// import Landingmiddle from '@/components/Landingmiddle'
export default {
  name: "App",
  components: {
    // Header,
    // Card,
    // Login,
    // Register
    // NewsDashboard,
    // Profile,
    // LandingNavbar,
    // Landingmiddle
  },
  data() {
    return {
      favourite: []
    };
  },
  methods: {
    addFav(e) {
      this.favourite.push(e);
  
    },
    unlike(i) {
      this.favourite.splice(i, 1);
    
    }
  }
};
</script>

<style>
/* #app {
  background: #d3d3d3;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
