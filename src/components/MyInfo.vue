<script setup lang="ts">
import {ref} from "vue";
import {Artist} from "@/interfaces/artist";
import axios from "axios";
import LinksToPlatforms from "@/components/LinksToPlatforms.vue";

let fetched = ref(false);
let showPlatformLinks = ref(false)

let res: Artist;

let params = {
  artist_id: 1,
}

async function getInfo() {
  await axios.post('/getArtistInfo', params).then(function (response) {
    res = response.data[0];
    fetched.value = true;
  }).catch(function (error) {
    console.log(error)
  })
}

function togglePlatformLink() {
  showPlatformLinks.value = !showPlatformLinks.value;
}

getInfo();

</script>

<template>
  <div v-if="fetched">
    <v-avatar size="20%" style="margin-top: 5%">
      <v-img src="@/assets/logo.webp"/>
    </v-avatar>

    <h4 style="padding-top: 4%">{{ res.artist_name_cn.String }}｜{{ res.artist_name.String }}</h4>
  </div>

  <v-expand-transition>
    <LinksToPlatforms v-show="showPlatformLinks"></LinksToPlatforms>
  </v-expand-transition>


  <v-btn :ripple="false" class="show-more-btn" variant="plain" @click="togglePlatformLink">
    <Transition name="fade">
      <v-icon size="large"
              :icon="showPlatformLinks ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
    </Transition>
  </v-btn>

</template>

<style scoped>
.show-more-btn {
  width: 100%;
  background: none;
}
</style>
