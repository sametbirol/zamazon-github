<template>
  <router-view />
</template>

<script>
  import store from '@/store'
  import { provide } from 'vue'
  export default{
    setup(){
      provide('store', store)
    }
}
</script>
