<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <MyInfo style="margin-top: 4%"></MyInfo>
      <LinksToPlatforms style="margin-top: 10%; margin-bottom: 4%"></LinksToPlatforms>
      <!--      <NewRelease></NewRelease>-->
      <AllMusic style="margin-top: 10%"></AllMusic>

    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>

import AllMusic from "@/components/AllMusic.vue";
import LinksToPlatforms from "@/components/LinksToPlatforms.vue";
import MyInfo from "@/components/MyInfo.vue";
</script>
