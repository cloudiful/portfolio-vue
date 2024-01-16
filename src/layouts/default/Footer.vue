<script setup lang="ts">
import router from "@/router";


</script>

<template>
  <v-footer class="my-footer">
    <v-row justify="center" :no-gutters="true">
      <v-col cols="12" class="copyright-text">
        <h5>{{ new Date().getFullYear() }} — <strong>Cloudiful</strong></h5>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.my-footer{
  background: none;
}
.copyright-text{
  text-align: center;
  color: #808080;
}
</style>
