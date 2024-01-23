<script setup lang="ts">

import {ref} from "vue";
import axios from "axios";
import {Game} from "@/interfaces/game";
import MyCard from "@/components/MyCard.vue";

let fetched = ref(false);

let games: Array<Game>;

async function getInfo() {
  await axios.post('/getAllGames').then(function (response) {
    games = response.data;
    console.log(games)
    fetched.value = true;
  }).catch(function (error) {
    console.log(error)
  })
}

getInfo()

</script>

<template>

  <v-icon size="x-large" icon="mdi-controller" style="margin-bottom: 5%"></v-icon>

  <div v-if="fetched">

    <div style="user-select: none">

      <div class="game-box"
           v-for="(game, index) in games"
           :key="'track_'+index.toString()">
        <my-card
          :img-name="game.game_name.String"
          :links="game.links.JSON"
        >
        </my-card>
      </div>

    </div>

  </div>

</template>

<style scoped>

</style>
