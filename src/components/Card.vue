<template>
  <div>
    <b-row align-h="center" no-gutters>
      <b-col lg="6" md="6" sm="11">
        <b-card v-for="(Info, index) in news"
          :key="index" class="card-section">
          <template #header>
            <h2 class="mb-0 head-lines">{{ Info.title }}</h2>
          </template>

          <b-card-body no-gutters>
            <b-card-img
            :src="Info.urlToImage"
            alt="No Image for this NEWS"
            bottom
          ></b-card-img>
          <b-card-title class="channel">{{ Info.source.name }}</b-card-title>
            <!-- <b-card-sub-title class="mb-2">{{Info.description}}</b-card-sub-title> -->
            <b-card-text>{{ Info.content }}</b-card-text>
          </b-card-body>
          <b-card-body>
            <a :href="Info.url" target="_blank" class="card-link">Visit Page</a>
            <b-icon icon="heart" class="px-3" @click="$emit('addfav',Info)"></b-icon>
          </b-card-body>
         
          <b-card-footer>Author : <span class="author">{{ Info.author }}</span></b-card-footer>
          <b-card-footer>published At : <span class="author">{{ new Date(`${Info.publishedAt}`).toLocaleString() }}</span></b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Card",
  data() {
    return {
      news: [],
    

    };
  },
  created() {
    axios.get(" https://newsapi.org/v2/top-headlines?country=us&apiKey=1d13311f35404387b2fa0daf701678ad")
      .then(res => {
        this.news = res.data.articles;
      })
      .catch(err => console.log(err));
  },
  methods: {
  //   favorite(i) {
  //     if(this.favorites.includes(i)) {
  //      let index =  this.favorites.indexOf(i);
  //      index>-1?this.favorites.splice(index, 1):this.favorites
  //     } else {
  //       this.favorites.unshift(i);
  //     }
  //   }
  }
};
</script>

<style  scoped>
.author {
    font-style: italic;
}
.channel {
    color: orangered;
}
.card-section {
    margin-top: 11%;
    /* z-index: 100px; */
}
</style>