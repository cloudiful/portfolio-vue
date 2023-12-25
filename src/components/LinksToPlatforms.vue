<script setup lang="ts">
import {ref} from "vue";
import {Platform} from "@/interfaces/platform";
import axios from "axios";

let fetched = ref(false);

let params = {
  artist_id: 1,
}

let platforms: Array<Platform>;

async function getInfo() {
  await axios.post('/getPlatformInfo', params).then(function (response) {
    platforms = response.data;
    fetched.value = true;
  }).catch(function (error) {
    console.log(error)
  })
}

getInfo();

// goto the corresponding link
function goLink(p: Platform) {
  window.open(p.link_url.String);
}

</script>

<template>
  <!--      音乐平台链接-->
  <v-row class="d-flex align-center justify-center" style="padding-top: 5%; padding-bottom: 5%" v-if="fetched">

    <v-col v-for="(platform, index) of platforms" :key="index" cols="auto">
      <v-btn
        @click="goLink(platform)"
        rel="noopener noreferrer"
        target="_blank"
        variant="tonal"
        rounded
      >
        <v-icon
          :icon="platform.platform_icon.String"
          size="small"
          :start=true
        />

        {{ platform.platform_name.String }}
      </v-btn>
    </v-col>

  </v-row>
</template>

<style scoped>

</style>
