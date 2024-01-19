<script setup lang="ts">
import {ref} from "vue";
import {Track} from "@/interfaces/track";
import axios from "axios";
import MyCard from "@/components/MyCard.vue";

let fetched = ref(false);

let tracks: Array<Track>;

async function getInfo() {
  await axios.post('/getAllTracks').then(function (response) {
    tracks = response.data;
    fetched.value = true;
  }).catch(function (error) {
    console.log(error)
  })
}

getInfo()

</script>

<template>

  <v-icon size="x-large" icon="mdi-music" style="margin-bottom: 5%"></v-icon>

  <div v-if="fetched">

    <div style="user-select: none">
      <div class="track-box"
           v-for="(track, index) in tracks"
           :key="'track_'+index.toString()">
        <my-card
          :img-name="track.track_name.String"
          :links="track.links.JSON"
        >
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
