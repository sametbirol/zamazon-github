<template>
    <v-btn
      @click="store.methods.toggleDrawer"
      class="mx-2"
      color="grey"
      dark
      fab
    >
      <v-icon dark>
        mdi-format-list-bulleted-square
      </v-icon>
    </v-btn>
</template>
<script>
import { inject } from 'vue'

export default {
  name: 'HomeComp',
  setup(){
    const store = inject('store')

    return{
      store,
    }
  }
}
</script>