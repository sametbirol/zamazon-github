<template>
   <Default/>
</template>

<script setup>
import Default from '@/layouts/default/Default.vue'
import store from '@/store'
import { provide } from 'vue'
provide('store', store)
</script>
