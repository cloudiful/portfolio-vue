<script setup lang="ts">
import router from "@/router";

const links = [
  '首页',
  '网页源码',
  // '全部作品',
  // '联系方式',
]

function go(s: string) {
  if (s == '首页') {
    router.replace({path: '/'})
  } else if (s == '网页源码') {
    window.open('https://github.com/cloudiful/portfolio-vue');
  }
}

</script>

<template>
  <v-footer>
    <v-row justify="center" :no-gutters="true">
      <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        class="mx-1"
        rounded="xl"
        @click="go(link)"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-1" cols="12" style="padding-bottom: 6%">
        <h5>{{ new Date().getFullYear() }} — <strong>Cloudiful</strong></h5>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>

</style>
