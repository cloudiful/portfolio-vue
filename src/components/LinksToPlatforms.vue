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
  <div style="width: 80%; margin:auto">
    <v-row style="margin-top:5%;" class="d-flex align-center justify-center" v-if="fetched">

      <v-col v-for="(platform, index) of platforms" :key="index" cols="auto">
        <v-btn
          @click="goLink(platform)"
          variant="plain"
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
  width: 100%;
  height: 100%;
  margin: auto;
  padding-top: 15%;
  padding-bottom: 15%;
  transition: 200ms;
  border: 2px solid transparent;
}

.platform-links-btn:hover {
  transform: scale(1.05);
  border: 2px solid rgba(128, 128, 128, 0.5);
}
</style>
