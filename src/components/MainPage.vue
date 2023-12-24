<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <MyInfo></MyInfo>
      <LinksToPlatforms></LinksToPlatforms>
      <NewRelease></NewRelease>
      <AllMusic></AllMusic>

    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>

import AllMusic from "@/components/AllMusic.vue";
import NewRelease from "@/components/NewRelease.vue";
import LinksToPlatforms from "@/components/LinksToPlatforms.vue";
import MyInfo from "@/components/MyInfo.vue";
</script>
