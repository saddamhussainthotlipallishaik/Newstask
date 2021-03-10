<template>
    <div>
        <b-row align-h="center" no-gutters>
       <b-col lg="6" md="6" sm="11">
        <b-card class="card-section mt-1"  v-for="Info in news.articles" :key="Info">
                <h3>Author:- {{Info.author}}</h3>
                <h6>{{Info.source.id}}</h6>
                <p>Channel:- {{Info.source.name}}</p>
                <h2>Headline:- {{Info.title}}</h2>
                <p>{{Info.description}}</p>
                <!-- <a href="Info.url"></a>    -->
                <img :src="Info.urlToImage" alt="" class="article-img w-100">
                <p>Published:- {{new Date(`${Info.publishedAt}`).toLocaleString()}}</p> 
                <p>{{Info.content}}</p> 
        </b-card>
       </b-col>
       </b-row>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"Card",
        data(){
            return {
                news:[],
            }
           
        },
        created(){
            axios.get(' https://newsapi.org/v2/top-headlines?country=us&apiKey=1d13311f35404387b2fa0daf701678ad')
            .then(res =>this.news = res.data)
            .catch(err => console.log(err))
        },
    }
</script>

<style  scoped>
.card-section {
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.article-img {
    width: 15vw;
    height: 40vh;
}
</style>