<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <MyInfo style="margin-top: 4%"></MyInfo>
      <!--      <NewRelease></NewRelease>-->
      <AllMusic style="margin-top: 10%"></AllMusic>

    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>

import AllMusic from "@/components/AllMusic.vue";
import MyInfo from "@/components/MyInfo.vue";
</script>
