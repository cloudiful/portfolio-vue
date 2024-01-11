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
  <div style="width: 80%; margin: auto">
    <v-row class="d-flex align-center justify-center" v-if="fetched">

      <v-col v-for="(platform, index) of platforms" :key="index" cols="auto">
        <v-btn
          @click="goLink(platform)"
          rel="noopener noreferrer"
          target="_blank"
          variant="elevated"
          rounded
          :ripple="false"
          class="platform-links-btn"
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
  </div>
</template>

<style scoped>
.platform-links-btn {
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.12);
}

.platform-links-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 24px 2px rgba(255, 255, 255, 0.08);
}
</style>
