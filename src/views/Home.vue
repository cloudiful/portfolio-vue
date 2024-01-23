<template>
  <v-container>
    <v-responsive class="align-center text-center fill-height">

      <MyInfo></MyInfo>
      <!--      <NewRelease></NewRelease>-->
      <AllMusic></AllMusic>
      <AllGames></AllGames>
<!--      <AllVideos></AllVideos>-->

    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import MyInfo from "@/components/MyInfo.vue";
import AllMusic from "@/components/AllMusic.vue";
import AllGames from "@/components/AllGames.vue";
import AllVideos from "@/components/AllVideos.vue";
</script>
