<script setup lang="ts">
import {ref} from "vue";
import {Track} from "@/interfaces/track";
import axios from "axios";

let fetched = ref(false);

let showBtn: Array<any> = [];
let show: Array<any> = [];

// size of this array: how many track links
let track: Array<Track>;

// size of this array: how many tracks
let tracks: Array<String> = [];

// stores track link
let tracks_index: Array<number> = [];

async function getInfo() {
  await axios.post('/getAllTracks').then(function (response) {
    track = response.data;

    track.forEach((value, index) => {

      show[index] = ref(false);
      showBtn[index] = ref(false)

      // add to tracks if not already in it
      if (!tracks.includes(value.track_name.String)) {
        tracks.push(value.track_name.String)
        tracks_index.push(index)
      }
    })

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

// get album cover image path
function imgPath(t: Track) {
  return new URL(`/src/assets/${t.track_name.String}.webp`, import.meta.url).href
}

// toggle to show description
function toggleDescription(i: number) {
  show[i].value = !show[i].value;
}

</script>

<template>

  <div v-if="fetched">
    <v-icon size="x-large" icon="mdi-music" style="margin-bottom: 5%"></v-icon>

    <div style="user-select: none">
      <div class="track-box" v-for="(item, index) in tracks" :key="'track'+index.toString()">
        <v-card variant="text" class="mx-auto music-card" @mouseenter="showBtn[index].value = true"
                @mouseleave="showBtn[index].value = false">
          <v-img @click="toggleDescription(index)" class="album-cover"
                 :src="imgPath(track[tracks_index[index]])"></v-img>

          <!--          <v-card-title>{{ track[tracks_index[index]].track_name_cn.String }}</v-card-title>-->

          <!--          <v-card-subtitle>{{ track[tracks_index[index]].track_name.String }}</v-card-subtitle>-->


          <v-expand-transition>

            <div v-if="show[index].value">

              <div class="expanded-area">
                <v-btn
                  v-for="(item,i) in track.filter((t:Track) => t.track_name.String == track[tracks_index[index]].track_name.String)"
                  :key="'track_link'+i"
                  @click="goLink(item)"
                  variant="text"
                  target="_blank"
                  rounded
                  size="small"
                  class="music-link-btn"
                >
                  {{ track[i].platform_name.String }}
                </v-btn>
              </div>

              <!--              <v-card-text>-->
              <!--                {{ track[tracks_index[index]].description.String }}-->
              <!--              </v-card-text>-->
            </div>
          </v-expand-transition>

        </v-card>
        <v-btn :ripple="false" class="show-more-btn" variant="plain" @click="toggleDescription(index)">
          <Transition name="fade">
            <v-icon v-if="showBtn[index].value"
                    size="large"
                    :icon="show[index].value ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
          </Transition>
        </v-btn>
      </div>
    </div>

  </div>

</template>

<style scoped>
.expanded-area {
  width: 100%;
  padding-top: 4%;
  padding-bottom: 4%;
}

.show-more-btn {
  width: 100%;
  background: none;
}

.album-cover {
  border-radius: 3vh;
}

.track-box {
  margin: auto;
  width: 90%;
}

.music-card {
  max-width: 61vh;
  max-height: 80vh;
  background: none;
  border-radius: 3vh;
  margin-top: 4%;
  margin-bottom: 4%;
  transition: 400ms;
}

.music-card:hover{
  box-shadow: 0 0 32px 12px rgba(131, 131, 131, 0.25);
}

.music-link-btn {
  margin: 3% 2%;
  transition: 200ms;
}

.music-link-btn:hover {
  transform: scale(1.05);
  border: 2px solid rgba(128, 128, 128, 0.5);
}

</style>
