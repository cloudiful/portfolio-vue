<script setup lang="ts">
import router from "@/router";

const links = [
  '首页',
  // '个人资料',
  // '全部作品',
  // '联系方式',
]

function goHome() {
  router.replace({path: '/'})
}

</script>

<template>
  <v-footer>
    <v-row justify="center" :no-gutters="true">
      <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        class="mx-2"
        rounded="xl"
        @click="goHome"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12" style="padding-bottom: 6%">
        {{ new Date().getFullYear() }} — <strong>Cloudiful</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>

</style>
