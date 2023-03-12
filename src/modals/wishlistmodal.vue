<template>
  <v-dialog v-model="props.modelValue" class="w-60 overflow-auto">
    <v-container class=" overflow-auto" ref="modalCardRef">
      <v-card class="bg-grey-lighten-4">

        <v-card v-for="element in store.state.wishlist" :key="element.id" class="ma-10 bg-yellow-lighten-5"
          variant="flat">
          <v-row class="align-center">
            <v-col cols="3">
              <v-img :src="element.images.large.url" height="100px"></v-img>
            </v-col>
            <v-col cols="5">
              {{ element.title }}
            </v-col>


            <v-col cols="2">
              <v-btn @click="store.methods.removelist(element, store.state.wishlist)">x</v-btn>
              <!-- <v-btn
              @click="handlenegativeclick(element)"
            >-</v-btn><v-btn
              @click="element.times += 1"
            >+</v-btn> -->

            </v-col>
            <v-col cols="2">
              {{ element.price/100 }} $
            </v-col>

          </v-row>
        </v-card>

        <v-container>Cost: {{ store.getters.cost_wishlist }}$</v-container>
      </v-card>
    </v-container>
  </v-dialog>
</template>

<script setup>
import { inject, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const store = inject('store')

// props

const props = defineProps({
  modelVlaue: {
    type: Boolean,
    default: false
  }
})

/*
  handle close clicked
*/
const emit = defineEmits(['update:modelValue'])
const closeModal = () => {
  emit('update:modelValue', false)
}
//  handle negative clicked

const handlenegativeclick = ((el) => {
  if (el.times <= 1) {
    store.methods.removelist(el, store.state.wishlist)
  }
  else el.times -= 1
})
const modalCardRef = ref(null)
/*
on clik outside
*/
onClickOutside(modalCardRef, closeModal)


</script>