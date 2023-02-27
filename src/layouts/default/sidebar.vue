<template>
    <v-navigation-drawer
      v-model="store.state.drawer"
      z-index="3"
      temporary
    >
    <v-list-item>
        <v-list-item-content>
          <v-list-item-avatar>
            <a @click="store.methods.filterchange('/')" >
          <v-img width="500px" src="../../assets/logo.png" ></v-img>
          </a>
        </v-list-item-avatar>
          <v-list-item-title style="text-align:center; font-size:x-large;">CATEGORIES</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in store.state.categoriesdict"
          :key="item.name"
          @click="store.state.categoriesdict[item.id].open = !store.state.categoriesdict[item.id].open"
          link
        >

          <v-list-item-content >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list
              v-if="store.state.categoriesdict[item.id].open"
              @click="store.methods.toggleDrawer"
            >
              <v-list-item
                v-for="el in store.state.children[item.id]"
                :key="el"
                @click="store.methods.filterchange(el)"
                link
              > 
                <v-list-item-content >
                  <v-list-item-title >{{ el }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
  },

}
</script>