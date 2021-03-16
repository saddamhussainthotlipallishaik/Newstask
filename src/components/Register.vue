<template>
    <div class="mt-3">
        <b-row>
            <b-col cols="10" offset="1" sm="8" offset-sm="2" md="4" offset-md="4" lg="2" offset-lg="5" xl="4"     offset-xl="4" class="text-center">
                   <b-card  text-variant="white" header="Sign Up" header-bg-variant="info" class="text-center card-section">
                         <div class="alert alert-danger" v-if="error">Opps!!! User Already Exits.</div>
                        <div class="alert alert-success" v-if="isSuccess">Account Created Successfully !!!</div>
                        <b-form @submit.prevent="signup">
                            <img src="@/assets/new.jpg" alt="logo" class="logo">
                            <input type="text" class="form-control mt-4" placeholder="Name" v-model="name" @keyup="check('name')">
                            <div v-if="nameErr" class="text-left">
                                <span class="text-danger">{{nameErr}}</span>
                            </div>
                            <input type="text" class="form-control mt-4" placeholder="Email" v-model="email" @keyup="check('email')">
                            <div v-if="emailErr" class="text-left">
                                <span class="text-danger">{{emailErr}}</span>
                            </div>
                            <input type="text" class="form-control mt-4" placeholder="Mobile" v-model="mobile" @keyup="check('mobile')">
                            <div v-if="mobileErr" class="text-left">
                                <span class="text-danger">{{mobileErr}}</span>
                            </div>
                            <input type="password" class="form-control mt-4" placeholder="Password" v-model="password" @keyup="check('password')">
                            <div v-if="passwordErr" class="text-left">
                                <span class="text-danger">{{passwordErr}}</span>
                            </div>
                            <input type="password" class="form-control mt-4" placeholder="Confirm Password" v-model="cpassword" @keyup="check('cpassword')">
                            <div v-if="cpasswordErr" class="text-left">
                                <span class="text-danger">{{cpasswordErr}}</span>
                            </div>
                            <b-button type="submit" variant="info" class="mt-5 button">Sign Up</b-button>
                        </b-form>
                    </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"Register",
        data(){
            return {
                error: false,
                name:'',
                nameErr:'',
                email:'',
                emailErr:'',
                mobile:'',
                mobileErr:'',
                password:null,
                passwordErr:'',
                cpassword:null,
                cpasswordErr:'',
                isSuccess:false
            }
        },
        methods :{
            signup(){
                axios.post(`http://localhost:3000/register`,{
                    name:this.name,
                    email:this.email,
                    mobile:this.mobile,
                    password:this.password,

                }).then((res)=>{
                    // this.isSuccess = true
                    if(res.status === 201) {
                        this.error = true;
                        setTimeout(() => {
                            this.error = false
                        }, 3000)
                    }

                    if(res.status === 200) {
                        this.isSuccess = true
                        setTimeout(()=>{
                            this.$router.push('/')
                        },2000)
                        
                    }
                    })
            },
            check(type){
                let result;
                if(type === 'name'){
                    let nameregex = /^([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}([a-zA-Z]{2,})/;
                    result = nameregex.test(this.name)
                    result?this.nameErr="":this.nameErr="please enter valid name";
                }
                if(type === 'email'){
                    let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    result = emailregex.test(this.email)
                    result?this.emailErr="":this.emailErr="please enter valid email"
                }
                if(type === 'mobile'){
                    let mobileregex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
                    result = mobileregex.test(this.mobile)
                    result?this.mobileErr="":this.mobileErr="please enter valid mobile number"
                }
                if(type === 'password'){
                    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                    result = passwordregex.test(this.password)
                    result?this.passwordErr="":this.passwordErr="please enter valid password"
                }
                if(type === 'cpassword'){
                    if(this.password == this.cpassword){
                        this.cpasswordErr=""
                    }
                    else {
                        this.cpasswordErr = "Password doesn't match"
                    }
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
        width: 50%;
        height: auto;
    }
 }
</style>