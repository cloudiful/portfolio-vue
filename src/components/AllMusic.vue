<script setup lang="ts">
import {ref} from "vue";

let fetched = ref(false);
</script>

<template>

  <div v-if="fetched">
    <h2>往期作品 | All Music</h2>
  </div>

</template>

<style scoped>
</style>
