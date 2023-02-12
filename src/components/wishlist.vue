<template>
  <v-menu transition="scroll-y-transition" max-width="1000" color="primary">
  <template v-slot:activator="{ props }">
    <v-btn
    v-bind="props">
    <v-icon x-large>mdi-bookmark</v-icon>
    Wish List
    </v-btn>
  </template>

  <v-card max-width="300">
    <label v-if="store.state.wishlist.length == 0"> Click the heart button!!</label>
    <v-card-item v-for="element in store.state.wishlist" :key="element.id" max-width="300">
      <v-img :src="element.images.small.url" height="100"></v-img>
      {{ element.title.slice(0,20) + "..."}}
      <div style="color:green"> {{ element.price / 100 }}$ </div>
      <button @click="store.methods.listreview(element,'-',store.state.wishlist)">x</button>
    </v-card-item>
  </v-card>

</v-menu>
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