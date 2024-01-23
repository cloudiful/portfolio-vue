<script setup lang="ts">

import {ref} from "vue";
import axios from "axios";
import MyCard from "@/components/MyCard.vue";
import {Video} from "@/interfaces/video";

let fetched = ref(false);

let videos: Array<Video>;

async function getInfo() {
  await axios.post('/getAllVideos').then(function (response) {
    videos = response.data;
    console.log(videos)
    fetched.value = true;
  }).catch(function (error) {
    console.log(error)
  })
}

getInfo()

</script>

<template>

  <div v-if="fetched">

    <v-icon size="x-large" icon="mdi-video-vintage" style="margin-bottom: 5%"></v-icon>

    <div style="user-select: none">

      <div class="game-box"
           v-for="(video, index) in videos"
           :key="'track_'+index.toString()">
        <my-card
          :img-name="video.video_name.String"
          :links="video.links.JSON"
        >
        </my-card>
      </div>

    </div>

  </div>

</template>

<style scoped>

</style>
