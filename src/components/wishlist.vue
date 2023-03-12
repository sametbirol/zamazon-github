<template>
  <v-btn @click="modals.deleteNote = true">
    <v-icon x-large>mdi-heart</v-icon>
    Wishlist
  </v-btn>

  <WishListModal v-if="modals.deleteNote" v-model="modals.deleteNote">
  </WishListModal>
</template>

<script setup>
import WishListModal from '@/modals/wishlistmodal.vue'
import { reactive } from 'vue';

const modals = reactive({
  deleteNote: false
})
</script>