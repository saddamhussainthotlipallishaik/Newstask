<template>
    <div>
        <b-row>
            <b-col cols="1" offset="5">
               <div class="profile-col">
                    <img :src="ProfilePic" alt="" class="profile-img" v-if="previewpic">
               </div> 
            </b-col>
            <b-col cols="4" offset="4">
                <b-button @click="RemoveProfile">Remove profile</b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="4" offset="4">
                <div @click="uploadDiv" class="div-section">
                    <img :src="uploadImg" class="img-section" v-if="preview">
                    <input type="file" @change="getImg" ref="inputField" class="d-none">
                </div>
                    <b-button @click="ProfileUpdate" class="mt-3" variant="success">Update</b-button>
                    <b-button @click="DelImg" class="mt-3" variant="warning">Delete</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name:"PreviewImg",
        data(){
            return {
                uploadImg:'',
                preview:false,
                ProfilePic:'',
                previewpic:false
            }
        },
        methods:{
            getImg(e){
                const img = e.target.files[0]
                const reader = new FileReader()
                reader.readAsDataURL(img);
                reader.onload=()=>{
                    this.uploadImg = reader.result
                    this.preview = true
                }
            },
            uploadDiv(){
                this.$refs.inputField.click()
            },
            DelImg(){
                this.uploadImg = ''
                this.$refs.inputField.value = ''
                this.preview = false

            },
            ProfileUpdate(){      
                this.ProfilePic = this.uploadImg
                this.preview =''
                this.previewpic = true
            },
            RemoveProfile(){
                this. ProfilePic =''
                this.previewpic = false
            }
        }
    }
</script>

<style scoped>

.div-section {
    width: 25vw;
    height: 35vh;
    border: 2px solid black;
}
.img-section {
    width: 100%;
    height: 100%;
}
.profile-col {
    border: 2px solid black;
    border-radius: 100%;
    height: 14vh;
}
.profile-img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
}
</style>