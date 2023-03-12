<template>
  <v-app>
    <sidebar />
    <appbar />
    <v-container class="my-8">

      <router-view />
    </v-container>

  </v-app>
</template>

<script setup>
import appbar from './appbar.vue'
import sidebar from './sidebar.vue'
import { inject, onBeforeMount } from 'vue'
const store = inject('store')
onBeforeMount(() => {
  store.methods.fetchdata()
})


</script>
