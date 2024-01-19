<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <MyInfo></MyInfo>
      <!--      <NewRelease></NewRelease>-->
      <AllMusic></AllMusic>
      <AllGames></AllGames>

    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import MyInfo from "@/components/MyInfo.vue";
import AllMusic from "@/components/AllMusic.vue";
import AllGames from "@/components/AllGames.vue";
</script>
