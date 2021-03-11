<template>
    <div>
        <b-row>
            <b-col cols="4" offset="4" class="text-center">
                <b-form>
                    <img src="@/assets/new.jpg" alt="logo" class="logo">
                    <h2>Sign In</h2>
                    <label for="email">Email :</label>
                    <input type="text" class="form-control" placeholder="Email" v-model="email">
                    <label for="email">Password :</label>
                    <input type="password" class="form-control" placeholder="Password" v-model="password">
                    <b-button variant="success" class="mt-5 mx-2" @click="submit">Submit</b-button>
                    <b-button variant="primary" @click="$router.push('/register')" class="mt-5">Register</b-button>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name:"Login",
        data(){
            return {
                email:'',
                password:''
            }
        },
        mounted() {
            console.log(this.$route)
        },
        methods :{
            submit(){
                if(localStorage.getItem('email') === this.email && localStorage.getItem('password') === this.password) {
                    this.$router.push('/dashboard')
                } else {
                    this.$router.replace('/')
                }
            }
        }
    }
</script>

<style scoped>
.logo{
    width: 10vw;
    height: 20vh;
}
.form-control {
    display: inline !important;
}
</style>