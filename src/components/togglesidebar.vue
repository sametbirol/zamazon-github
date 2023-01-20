<template>
    <v-btn
      class="mx-2"
      fab
      dark
      color="grey"
      @click="store.methods.toggleDrawer" >
      <v-icon dark>
        mdi-format-list-bulleted-square
      </v-icon>
    </v-btn>
</template>
<script>
//click.stop="drawer=!drawer"
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