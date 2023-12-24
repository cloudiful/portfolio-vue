<script setup lang="ts">
import {ref} from "vue";
import {Artist} from "@/interfaces/artist";
import axios from "axios";

let fetched = ref(false);

let res: Artist;

let params = {
  artist_id: 1,
}
async function getInfo() {
  await axios.post('/getArtistInfo',params).then(function (response) {
    res = response.data[0];
    fetched.value = true;
    console.log(res)
  }).catch(function (error) {
    console.log(error)
  })
}

getInfo();

</script>

<template>
  <div v-if="fetched">
    <v-avatar size="20%" style="margin-top: 5%">
      <v-img src="@/assets/logo.jpg"/>
    </v-avatar>

    <h4 style="padding-top: 5%">{{res.artist_name_cn.String}}｜{{res.artist_name.String}}</h4>
  </div>

</template>

<style scoped>
</style>
