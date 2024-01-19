<script setup lang="ts">

import {ref} from "vue";
import {Link} from "@/interfaces/link";

withDefaults(defineProps<{
  'imgName'?: string | null
  'links'?: Array<Link> | null
  'expanded'?: boolean
}>(), {
  imgName: '',
  links: null,
  expanded: false,
})

// show the expansion area
let show = ref(false);

// show the small triangle button
let showBtn = ref(false);

function toggleExpansion() {
  show.value = !show.value;
}

function imgPathProcess(i: string | null) {
  return new URL(`/src/assets/img/${i}.webp`, import.meta.url).href
}

function goLink(url: string) {
  window.open(url);
}

</script>

<template>
  <v-card variant="text" class="mx-auto music-card"
          @mouseenter="showBtn = true"
          @mouseleave="showBtn = false">
    <v-img @click="toggleExpansion()"
           class="album-cover"
           :src="imgPathProcess(imgName)">
    </v-img>

    <v-expand-transition>

      <div v-if="show || expanded">

        <div class="expanded-area">
          <v-btn
            v-for="(item,i) in links"
            :key="'link_'+i"
            @click="goLink(item.link_url)"
            variant="text"
            rounded
            class="music-link-btn"
          >
            {{ item.link_name }}
          </v-btn>
        </div>
      </div>
    </v-expand-transition>

  </v-card>
  <v-btn :ripple="false" class="show-more-btn" variant="plain" @click="toggleExpansion()">
    <Transition name="fade">
      <v-icon v-if="showBtn"
              size="large"
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
    </Transition>
  </v-btn>
</template>

<style scoped>
.album-cover {
  border-radius: 3vh;
}

.music-card {
  max-width: 60vh;
  background: none;
  border-radius: 3vh;
  margin-top: 4%;
  margin-bottom: 4%;
  transition: 400ms;
}

.music-card:hover {
  box-shadow: 0 0 32px 12px rgba(131, 131, 131, 0.25);
}

.expanded-area {
  width: 100%;
  padding-top: 4%;
  padding-bottom: 4%;
}

.show-more-btn {
  width: 100%;
  background: none;
}

.album-cover {
  border-radius: 3vh;
}

.music-card {
  max-width: 60vh;
  background: none;
  border-radius: 3vh;
  margin-top: 4%;
  margin-bottom: 4%;
  transition: 400ms;
}

.music-card:hover {
  box-shadow: 0 0 32px 12px rgba(131, 131, 131, 0.25);
}

.music-link-btn {
  width: 80%;
  height: 100%;
  margin: 2%;
  padding-top: 5%;
  padding-bottom: 5%;
  transition: 200ms;
  border: 2px solid transparent;
}

.music-link-btn:hover {
  transform: scale(1.05);
  border: 2px solid rgba(128, 128, 128, 0.5);
}

</style>
