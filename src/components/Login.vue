<template>
    <div class="mt-5">
        <b-row>
            <b-col cols="10" offset="1" sm="8" offset-sm="2" md="4" offset-md="4" lg="2" offset-lg="5" xl="4"     offset-xl="4" class="text-center">
                <b-card  text-variant="white" header="Sign In" header-bg-variant="info" class="text-center card-section">
                    <div class="alert alert-danger" v-if="errMsg">{{errMsg}}</div>
                    <b-form>
                        <img src="@/assets/new.jpg" alt="logo" class="logo">
                        <h2 class="mt-3 header"></h2>
                        <input type="text" class="form-control mt-4" placeholder="Email" v-model="email">
                        <input type="password" class="form-control mt-4" placeholder="Password" v-model="password">
                        <b-button variant="success" class="mt-5 mx-2" @click="submit">Submit</b-button>
                        <b-button variant="primary" @click="$router.push('/register')" class="mt-5">Sign Up</b-button>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"Login",
        data(){
            return {
                errMsg: '',
                email:'',
                password:''
            }
        },
        mounted() {
            console.log(this.$route)
        },
        methods :{
            async submit(){
                try {
                   let data = await axios.post(`http://localhost:3000/login`,{
                    email:this.email,
                    password:this.password
                })

                if(data.status === 200){
                 this.$store.commit('setAuth', true);
                 this.$router.push('/dashboard')  
                }
                if(data.status === 401){
                   this.$store.commit('setAuth', false);
                }
                }
                catch(err) {
                    console.log(err);
                }
                
                // if(localStorage.getItem('email') === this.email && localStorage.getItem('password') === this.password) {
                //     this.$router.push('/dashboard')
                // } else {
                //     this.$router.replace('/')
                // }
            }
        }
    }
</script>

<style scoped>
.logo{
    width: 8vw;
    height: 20vh;
}

.card-section {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
input {
    border-top: none;
    border-left:none;
    border-right:none;
}
input:focus {
    outline: 0 !important;
    box-shadow: none !important;
}
.form-control {
    border-radius: 0 !important;
}
@media (max-width: 767.98px) { 
    .logo {
        width: 100%;
        height: auto;
    }
}
@media (max-width: 1399.98px) { 
    .logo {
        width: 35%;
        height: auto;
    }
 }
</style>