<template>
  <v-dialog
    v-model="props.modelValue"
    class="w-50 overflow-auto"
  >
    <v-container class=" overflow-auto" >
    <v-list
    ref="modalCardRef">
    <v-row class="flex-column align-center">
      <v-list-item
        v-for="element in store.state.shoppingcart"
        :key="element.id"
        class="ma-10"
      >
        <v-list-item-content>
          
            <v-list-item-avatar
          
          ><v-img
          :src="element.images.large.url"
          height="200px"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-title>{{ element.title.slice(0,20) + "..."}} x {{ element.times }}</v-list-item-title>
          <v-btn
            @click="store.methods.removelist(element,store.state.shoppingcart)"
          >x</v-btn><v-btn
            @click="handlenegativeclick(element)"
          >-</v-btn><v-btn
            @click="element.times += 1"
          >+</v-btn>

          <div style ="color:green"> {{ element.price / 100 }}$ </div>
          
        </v-list-item-content>
      
      </v-list-item>
    </v-row>
    <v-container >Cost: {{ store.getters.cost }}$</v-container>
    </v-list>
    
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