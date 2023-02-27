<template>
    <v-btn
    @click="modals.deleteNote = true">
    <v-icon x-large>mdi-cart</v-icon>
    Shopping Cart
    </v-btn>

    <CartModal     v-if="modals.deleteNote"
    v-model="modals.deleteNote">
    </CartModal > 

</template>

<script setup>
import CartModal from '@/modals/cartmodal.vue'
import { reactive } from 'vue';

const modals = reactive({
    deleteNote: false
})
</script>