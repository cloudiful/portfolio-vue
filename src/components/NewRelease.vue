<script setup lang="ts">
import {ref} from "vue";
import {Track} from "@/interfaces/track";
import axios from "axios";

let fetched = ref(false);
let show = ref(false);

let params = {
  latest: true,
}

let track: Array<Track>;

async function getInfo() {
  await axios.post('/getTrackInfo', params).then(function (response) {
    track = response.data;
    fetched.value = true;
  }).catch(function (error) {
    console.log(error)
  })
}

getInfo()

// goto the corresponding link
function goLink(t: Track) {
  window.open(t.link_url.String);
}

function imgPath(t: Track) {
  return new URL(`/src/assets/${t.track_name.String}.png`, import.meta.url).href
}

</script>

<template>

  <div v-if="fetched">
    <h2>最新发布 | New Release</h2>

    <v-card class="mx-auto" max-width="75%" style="margin-top: 5%;margin-bottom: 5%">
      <v-img :src="imgPath(track[0])"></v-img>

      <v-card-title>
        {{ track[0].track_name_cn.String }}
      </v-card-title>

      <v-card-subtitle>{{ track[0].track_name.String }}</v-card-subtitle>

      <v-card-actions>
        <div style="width: 100%">
          <v-btn v-for="(item,index) in track"
                 :key="index"
                 @click="goLink(item)"
                 color="orange-lighten-2"
                 variant="tonal"
                 rounded
                 target="_blank"
                 size="small"
                 style="margin: 2%"
          >
            {{item.platform_name.String}}
          </v-btn>
        </div>

        <v-spacer></v-spacer>

        <div>
          <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </div>
      </v-card-actions>

      <v-expand-transition>
        <div v-if="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ track[0].description.String }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

  </div>

</template>


<style scoped>
</style>
