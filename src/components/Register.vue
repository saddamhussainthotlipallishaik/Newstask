<template>
    <div>
        <b-row>
            <b-col cols="4" offset="4" class="text-center">
                <b-form>
                    <img src="@/assets/new.jpg" alt="logo" class="logo">
                    <h2>Sign Up</h2>
                    <label for="email">Email :</label>
                    <input type="text" class="form-control" placeholder="Email" v-model="email">
                    <label for="mobile">Mobile :</label>
                    <input type="text" class="form-control" placeholder="Mobile" v-model="mobile">
                    <label for="password">Password :</label>
                    <input type="password" class="form-control" placeholder="Password" v-model="password">
                    <label for="cpassword">Confirm Password :</label>
                    <input type="password" class="form-control" placeholder="Confirm Password" v-model="cpassword">
                    <b-button variant="success" class="mt-5" @click="signup">Sign Up</b-button>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name:"Register",
        data(){
            return {
                email:'',
                mobile:'',
                password:'',
                cpassword:''
            }
        },
        methods :{
            signup(){
                localStorage.setItem('email',this.email)
                localStorage.setItem('mobile',this.mobile)
                localStorage.setItem('password',this.password)
                localStorage.setItem('cpassword',this.cpassword)
                this.$router.push('/dashboard')
                this.axios.post('')
            }
        }
    }
</script>

<style scoped>
.logo{
    width: 10vw;
    height: 20vh;
}
</style>