<template>
  <div class="section">
    <b-card
      v-for="(Scrolldetail, index) in Scrolldetails"
      :key="index"
      class=""
    >
      <b-row>
        <b-col class="text-center">
          <img
            :src="require('@/assets/' + Scrolldetail.image)"
            alt=""
            width="90"
            height="90"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <h4 class="head-line">{{ Scrolldetail.header }}</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <span>{{ Scrolldetail.description }}</span>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ScrollCard",
  computed: mapGetters(["Scrolldetails"])
};
</script>

<style scoped>
/* .card {
  width: 300px;
} */
.head-line {
  /* background: -webkit-linear-gradient(rgb(0, 238, 255), rgb(255, 145, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: rgb(0, 238, 255);
}
.section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
}
</style>