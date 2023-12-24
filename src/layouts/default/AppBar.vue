<template>
  <v-app-bar :flat=true :floating=true style="backdrop-filter: saturate(180%) blur(20px)">
      <v-app-bar-title>
          <v-btn @click="goIndex">
              <v-icon icon="mdi-home" style="padding-right: 10px"/>
              首页
          </v-btn>
        <v-btn icon="mdi-theme-light-dark" @click="toggleDarkMode">
        </v-btn>
      </v-app-bar-title>
    <div type="flex">
    </div>

  </v-app-bar>
</template>

<script lang="ts" setup>
import {useTheme} from "vuetify";
import router from "@/router";

const theme = useTheme()

function toggleDarkMode() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  // theme.global.name.value = 'light'
}
function goIndex(){
  router.replace({ path: '/' })
}
</script>
