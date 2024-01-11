<template>
  <v-app-bar scroll-behavior="hide" :flat=true :floating=true
             style="backdrop-filter: blur(20px) saturate(180%) ; background: rgba(0,0,0,0.28)">
      <v-app-bar-title>
        <v-btn :ripple="false" variant="plain" @click="goIndex">
          <v-icon size="large" icon="mdi-home"/>
          </v-btn>
        <v-btn :ripple="false" variant="plain" @click="toggleDarkMode">
          <v-icon size="large" icon="mdi-theme-light-dark"></v-icon>
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
