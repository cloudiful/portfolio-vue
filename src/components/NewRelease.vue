<script setup lang="ts">
import {ref} from "vue";
import {Track} from "@/interfaces/track";
import axios from "axios";
import MyCard from "@/components/MyCard.vue";

let fetched = ref(false);

let params = {
  latest: true,
}

let track: Track;

async function getInfo() {
  await axios.post('/getTrackInfo', params).then(function (response) {
    track = response.data[0];
    fetched.value = true;
  }).catch(function (error) {
    console.log(error)
  })
}

getInfo()

</script>

<template>

  <div style="text-align: center" v-if="fetched">
    <v-icon style="margin-top: 5%" icon="mdi-star-shooting" size="x-large"></v-icon>

    <div style="user-select: none">
      <div class="track-box">
        <my-card :img-name="track.track_name.String"
                 :links="track.links.JSON">
        </my-card>
      </div>
    </div>

  </div>

</template>


<style scoped>

.track-box {
  margin: auto;
  width: 90%;
}

</style>
