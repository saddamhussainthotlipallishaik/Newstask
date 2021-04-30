<template>
  <div class="main-section w-100">
    <div class="w-100 position-fixed">
      <b-navbar type="dark" class="w-75 m-auto">
        <b-navbar-brand>
          <img src="@/assets/news.png" alt="" width="50" height="50" />
          <span class="header p-2">THE ORBIT NEWS</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="px-3 items">Home</b-nav-item>
          <b-nav-item href="#" class="px-3 items">About Us</b-nav-item>
          <b-nav-item href="#" class="px-3 items">Contact Us</b-nav-item>
          <b-nav-item href="#" class="px-3 items">Login</b-nav-item>
          <b-nav-item href="#" class="px-3 items">Sign Up</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "LandingNavbar"
};
</script>

<style scoped>
.header {
    font-weight: bolder;
}
.items {
    font-weight: 600;
}
.items:hover {
    background-color: blue;
    background-image: linear-gradient(to bottom right, rgb(255, 136, 0), rgb(255, 0, 128));
    border-radius: 20px 2px;
}
.main-section {
    background-image: url(../assets/newsback.jpg);
    height: 100vh;
}
.quote-section {
    color: white;
    position: absolute;
    top: 35%;
    left: 42%;
    transform: translate(-50%, -50%);
}
.quote-section h2 {
    width: 75%;
}
button {
    border: none;
    background: none;
    color: white;
}
</style>