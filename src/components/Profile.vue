<template>
    <div>
        <div>
            <b-row>
                <b-col cols="4" offset="4" class="text-center">
                    <b-card  class="card-section">
                        <b-row>
                            <b-col></b-col>
                            <b-col></b-col>
                            <b-col cols="2">
                                <b-icon icon="x" class="icon" font-scale="2" @click="$router.replace('/dashboard')"></b-icon>    
                            </b-col>
                        </b-row>
                       <div class="d-flex justify-content-center">
                           <div class="profile-img" @click="uploadfun">
                                <!-- <img src="@/assets/u.png" alt="" class="dimg mt-4" v-if="dprofile"> -->
                                <b-icon icon="camera" font-scale="2" class="mt-5" v-if="dprofile"></b-icon>
                                <img :src="previewprofile" v-if="preimg" alt="" class="img">
                                <input type="file" ref="fileupload" @change="uploadinput" class="d-none">
                            </div>
                       </div>
                        <div>
                            <span>Name</span>
                            <input type="text" class="form-control" v-model="name">
                        </div>
                        <div>
                            <input type="radio" name="gender" v-model="name" value="male">Male
                            <input type="radio" name="gender" v-model="name" value="female">Female
                        </div>
                        <div>
                            <span>Email</span>
                            <input type="text" class="form-control" v-model="email">
                        </div>
                        <div>
                            <span>Mobile</span>
                            <input type="text" class="form-control" v-model="mobile">
                        </div>
                        <b-button class="mt-3" variant="success">Save</b-button>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Profile",
        data(){
            return {
                previewprofile:'',
                dprofile:true,
                preimg:false,
                name:'',
                gender:'',
                email:'',
                mobile:''
            }
        },
        methods:{
            uploadfun(){
                this.$refs.fileupload.click()
            
            },
            uploadinput(e){
                let img = e.target.files[0]
                let reader = new FileReader()
                reader.readAsDataURL(img)
                reader.onload=()=> {
                    this.previewprofile = reader.result
                    this.preimg = true
                    this.dprofile = false
                }
            }
        }
    }
</script>

<style scoped>
.card-section {
    margin-top: 70px;
}
.profile-img {
    border: 1px solid #000;
    border-radius: 100%;
    width: 10vw;
    height: 21vh;
    overflow: hidden;
}
.img {
    width: 100%;
    height: 100%;
}
.icon {
    cursor: pointer;
}
.dimg {
    width: 4vw;
    height: 8vh;
}
</style>