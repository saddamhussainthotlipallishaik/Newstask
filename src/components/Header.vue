<template>
  <div class="header-section">
    <b-row class="bg-warning">
      <b-col class="p-0" v-if="showNav">
        <div>
          <b-navbar toggleable="lg" type="dark" variant="warning">
            <b-icon
              icon="justify"
              font-scale="2"
              variant="light"
              @click="sidebar = !sidebar"
            ></b-icon>
            <img src="@/assets/new.jpg" class="img-logo" />
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <h2 class="header ml-2">Orbit News</h2>
            <b-collapse id="nav-collapse" is-nav>
  
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
  
                  <template #button-content>
                    <span
                      ><b-icon icon="person-fill" variant="light"></b-icon
                      >Account</span
                    >
                  </template>
                  <b-dropdown-item href="#" @click="$router.push('/profile')"
                    >Profile</b-dropdown-item
                  >
                  <b-dropdown-item href="#" @click="$router.push('/favourites')"
                    >Favourites</b-dropdown-item
                  >
                  <b-dropdown-item href="#" @click="signout"
                    >Sign Out</b-dropdown-item
                  >
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </b-col>

    </b-row>
    <Sidebar v-if="sidebar" />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: "Header",
  props: ["sidebarshow"],
  components: {
    Sidebar
  },
  data() {
    return {
      sidebar: false
    };
  },
  computed: {
    showNav() {
      return !this.$route.meta.showNav;
    }
  },
  methods: {
    signout() {
      localStorage.clear()
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.header-section {
  position: fixed;
  width: 100%;
  z-index: 100;
}
.img-logo {
  height: 8vh;
  width: 4vw;
}
.header {
  color: white;
  cursor: pointer;
}
</style>







      <b-col cols="1" class="text-right">
        <b-icon
          icon="justify"
          font-scale="2"
          variant="dark"
          @click="sidebar = !sidebar"
        ></b-icon>
        
      </b-col>
      <b-col cols="1">
        <img src="@/assets/new.jpg" class="img-logo" />
      </b-col>
      <b-col cols="6"></b-col>
      <b-col cols="1">
        <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Search"
        ></b-form-input>
      </b-col>
      <b-col cols="1">
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-col>
      <b-col cols="2">
        <b-dropdown right variant="dark">
          // <template #button-content>
            <span
              ><b-icon icon="person-fill" variant="light"></b-icon>Account</span
            >
          <!-- </template> -->
          <b-dropdown-item href="#" @click="$router.push('/profile')"
            >Profile</b-dropdown-item
          >
          <b-dropdown-item href="#" @click="$router.push('/favourites')"
            >Favourites</b-dropdown-item
          >
          <b-dropdown-item href="#" @click="signout">Sign Out</b-dropdown-item>
        </b-dropdown>
      </b-col>