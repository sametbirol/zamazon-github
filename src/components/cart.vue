<template>
  <v-menu
    color="primary"
    max-width="1000"
    transition="scroll-y-transition"
  >
  <template v-slot:activator="{ props }">
    <v-btn
    v-bind="props">
    <v-icon x-large>mdi-cart</v-icon>
    Shopping Cart
    </v-btn>
  </template>

  <v-card max-width="300">
    <v-card-item
      v-for="element in store.state.shoppingcart"
      :key="element.id"
      max-width="300"
    >
    <v-img :src="element.images.small.url" height="100"></v-img>
      {{ element.title.slice(0,20) + "..."}}
      <div style="color:green"> {{ element.price / 100 }}$ </div>
      <button
        @click="store.methods.listreview(element,'-',store.state.shoppingcart)"
      >x</button>
    </v-card-item>
    <div>Cost: {{ store.state.cost / 100 }}$</div>
  </v-card>

</v-menu>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'CartComp',
  setup(){
    const store = inject('store')

    return{
      store,
    }
  }
}
</script>