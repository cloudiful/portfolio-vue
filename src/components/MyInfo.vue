<script setup lang="ts">
import {ref} from "vue";
import {Author} from "@/interfaces/author";
import axios from "axios";
import LinksToPlatforms from "@/components/LinksToPlatforms.vue";

let fetched = ref(false);
let showPlatformLinks = ref(false)

let author: Author;

let params = {
  author_id: 1,
}

async function getInfo() {
  await axios.post('/getAuthorInfo', params).then(function (response) {
    author = response.data[0];
    fetched.value = true;
  }).catch(function (error) {
    console.log(error)
  })
}

function togglePlatformLink() {
  showPlatformLinks.value = !showPlatformLinks.value;
}

// getInfo();

</script>

<template>
  <v-avatar size="20%" class="my-logo"
            @click="togglePlatformLink">
    <v-img src="@/assets/img/logo.webp"/>
  </v-avatar>
  <div>
    <h4 style="padding-top: 4%">云漫｜Cloudiful</h4>
  </div>
<!--  <div v-if="fetched">-->
<!--    <h4 style="padding-top: 4%">{{ author.author_name_cn.String }}｜{{ author.author_name.String }}</h4>-->
<!--  </div>-->

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
  margin-top: 2%;
  margin-bottom: 5%;
  background: none;
}

.my-logo {
  margin-top: 5%;
  transition: 500ms;
}

.my-logo:hover {
  box-shadow: 0 0 24px 6px rgba(131, 131, 131, 0.25);
}
</style>
