<template>
    <v-dialog
      v-model="props.modelValue"
      class="w-60 overflow-auto"
    >
      <v-container class=" overflow-auto" ref="modalCardRef">
      <v-card
      class="bg-grey-lighten-4"
      >
  
        <v-card
          v-for="element in store.state.shoppingcart"
          :key="element.id"
          class="ma-10 bg-yellow-lighten-5"
          variant="flat"
        >
        <v-row class="align-center">
        <v-col
        cols="3">
          <v-img
            :src="element.images.large.url"
            height="100px"
            ></v-img>
        </v-col>
        <v-col
        cols="5"
        >
        {{ element.title}} x {{ element.times }}
        </v-col>
          
  
          <v-col cols="4" >
            <v-btn
              @click="store.methods.removelist(element,store.state.shoppingcart)"
            >x</v-btn><v-btn
              @click="handlenegativeclick(element)"
            >-</v-btn><v-btn
              @click="element.times += 1"
            >+</v-btn>
  
             {{ element.price / 100 }}$     
        </v-col>
  
            </v-row>
        </v-card>
  
      <v-container >Cost: {{ store.getters.cost }}$</v-container>
      </v-card>
      
        <!-- <v-card
          ref="modalCardRef"
        >
          <v-card-item
            v-for="element in store.state.shoppingcart"
            :key="element.id"
            class="ma-10"
          >
            <v-img
              :src="element.images.large.url"
              height="auto"
            >
            </v-img>
              {{ element.title.slice(0,20) + "..."}} x {{ element.times }}
            <div style ="color:green"> {{ element.price / 100 }}$ </div>
            <v-btn
              @click="store.methods.removelist(element,store.state.shoppingcart)"
            >x</v-btn><v-btn
              @click="handlenegativeclick(element)"
            >-</v-btn><v-btn
              @click="element.times += 1"
            >+</v-btn>
          </v-card-item>
          <v-container >Cost: {{ store.getters.cost }}$</v-container>
        </v-card> -->
      </v-container>
    </v-dialog>
  </template>
  <script setup>
  import { inject ,ref} from 'vue'
  import { onClickOutside } from '@vueuse/core'
  
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
      emit('update:modelValue',false)
  }
  //  handle negative clicked
  
  const handlenegativeclick = ((el) => {
      if (el.times <= 1) {
          store.methods.removelist(el,store.state.shoppingcart)
      }
      else el.times -= 1
  })
  const modalCardRef = ref(null)
  /*
  on clik outside
  */
  onClickOutside(modalCardRef,closeModal)
  
  const store = inject('store')
  
  </script>