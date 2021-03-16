<template>
  <div>
    <b-row align-h="center" no-gutters>
      <b-col lg="6" md="6" sm="11">
        <b-card v-for="(info, index) in fav" :key="index" class="card-section">
          <template #header>
            <h2 class="mb-0 head-lines">{{ info.title }}</h2>
          </template>

          <b-card-body no-gutters>
            <b-card-img
              :src="info.urlToImage"
              alt="No Image for this NEWS"
              bottom
            ></b-card-img>
            <b-card-title class="channel">{{ info.source.name }}</b-card-title>
            <!-- <b-card-sub-title class="mb-2">{{Info.description}}</b-card-sub-title> -->
            <b-card-text>{{ info.content }}</b-card-text>
          </b-card-body>
          <b-card-body>
            <a :href="info.url" target="_blank" class="card-link">Visit Page</a>
            <b-icon
              icon="heart"
              class="px-3"
              @click="$emit('remfav',info)"
            ></b-icon>
          </b-card-body>

          <b-card-footer
            >Author :
            <span class="author">{{ info.author }}</span></b-card-footer
          >
          <b-card-footer
            >published At :
            <span class="author">{{
              new Date(`${info.publishedAt}`).toLocaleString()
            }}</span></b-card-footer
          >
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: "Favourites",
  props:['fav'],

};
</script>

<style scoped>
.card-section {
    margin-top: 11%;
}
</style>