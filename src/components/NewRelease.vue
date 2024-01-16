<script setup lang="ts">
import {ref} from "vue";
import {Track} from "@/interfaces/track";
import axios from "axios";

let fetched = ref(false);

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

  <div style="text-align: center" v-if="fetched">
    <v-icon style="margin-top: 5%" icon="mdi-star-shooting" size="x-large"></v-icon>

    <div style="user-select: none">
      <div class="track-box">
        <v-card variant="text" class="mx-auto music-card">
          <v-img class="album-cover"
                 :src="imgPath(track[0])"></v-img>

          <v-expand-transition>

            <div>

              <div class="expanded-area">
                <v-btn
                  v-for="(item,i) in track.filter((t:Track) => t.track_name.String == track[0].track_name.String)"
                  :key="'track_link'+i"
                  @click="goLink(item)"
                  variant="text"
                  rounded
                  class="music-link-btn"
                >
                  {{ track[i].platform_name.String }}
                </v-btn>
              </div>
            </div>
          </v-expand-transition>

        </v-card>
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

.album-cover {
  border-radius: 3vh;
}

.track-box {
  margin: auto;
  width: 90%;
}

.music-card {
  max-width: 50vh;
  background: none;
  border-radius: 3vh;
  margin-top: 5%;
  margin-bottom: 12%;
  transition: 400ms;
}

.music-card:hover {
  box-shadow: 0 0 32px 12px rgba(131, 131, 131, 0.25);
}

.music-link-btn {
  width: 100%;
  height: 100%;
  max-width: 25vw;
  margin: auto;
  padding-top: 5%;
  padding-bottom: 5%;
  transition: 200ms;
  border: 2px solid transparent;
}

.music-link-btn:hover {
  transform: scale(1.05);
  border: 2px solid rgba(128, 128, 128, 0.5);
}
</style>
