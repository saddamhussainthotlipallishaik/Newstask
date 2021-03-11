<template>
  <div class="header-section">
    <b-col class="p-0">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-icon icon="justify" font-scale="2" variant="light" @click="sidebar = !sidebar"></b-icon>
          <img src="@/assets/new.jpg" class="img-logo"/>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <h2 class="header ml-2">Orbit News</h2>
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >Search</b-button
                >
              </b-nav-form>
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  
                  <span><b-icon icon="person-fill" variant="light"></b-icon>Account</span>
                </template>
                <b-dropdown-item href="#" @click="$router.push('/profile')">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Favourites</b-dropdown-item>
                <b-dropdown-item href="#" @click="signout">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-col>
     <Sidebar v-if="sidebar"/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: "Header",
  props:['sidebarshow'],
  components:{
    Sidebar
  },
  data(){
    return {
      sidebar:false
    }
  },
  methods :{
    signout(){
      this.$router.replace('/')
      // localStorage.clear()
    }
  }
};
</script>

<style scoped>
.img-logo {
  height: 8vh;
  width: 4vw;
}
.header {
  color: white;
  cursor: pointer;
}
</style>