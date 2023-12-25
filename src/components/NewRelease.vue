<script setup lang="ts">
import {ref} from "vue";
import {Track} from "@/interfaces/track";
import axios from "axios";

let fetched = ref(false);
let show = ref(false);

let params = {
  latest: true,
}

let res:Array<Track>;

async function getInfo() {
  await axios.post('/getTrackInfo', params).then(function (response) {
    res = response.data;
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


</script>

<template>

  <div v-if="fetched">
    <h2>最新发布 | New Release</h2>

    <v-card class="mx-auto" max-width="75%" style="margin-top: 5%;margin-bottom: 5%">
      <v-img src="@/assets/Resee.png"></v-img>

      <v-card-title>
        {{ res[0].track_name_cn.String }}
      </v-card-title>

      <v-card-subtitle>{{ res[0].track_name.String }}</v-card-subtitle>

      <v-card-actions>
        <v-btn v-for="(item,index) in res"
               :key="index"
               @click="goLink(item)"
               color="orange-lighten-2"
               variant="tonal"
               rounded
               target="_blank"
               style="margin: 1%"
        >
          {{item.platform_name.String}}
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-if="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ res[0].description.String }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>

</template>


<style scoped>
</style>
