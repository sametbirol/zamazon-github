<template>
  <v-app-bar  
    id="appbar" 
    app 
    shrink-on-scroll
    z-index="1">
    <v-btn
      class="mx-2"
      fab
      dark
      color="grey"
      @click.stop="drawer=!drawer">
      <v-icon dark>
        mdi-format-list-bulleted-square
      </v-icon>
    </v-btn>
      <v-toolbar-title id="title">ZAMAZON
      </v-toolbar-title>
      <v-menu transition="scroll-y-transition" max-width="1000" color="primary">
        <template v-slot:activator="{ props }">
          <v-btn
          v-bind="props">
          <v-icon x-large>mdi-cart</v-icon>
          Shopping Cart
          </v-btn>
        </template>

        <v-card max-width="300">
          <v-card-item v-for="element in shoppingcart" :key="element.id" max-width="300">
            <v-img :src="element.images.small.url" height="100"></v-img>
            {{ element.title.slice(0,20) + "..."}}
            <div style="color:green"> {{ element.price / 100 }}$ </div>
          </v-card-item>
          <div>Cost: {{ cost }}$</div>
        </v-card>

      </v-menu>        
    
  </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      z-index="3"
      temporary
    >
      <v-list-item>


        <v-list-item-content>
          <v-list-item-avatar>
          <v-img width="500px" src="../assets/logo.png"></v-img>
        </v-list-item-avatar>
          <v-list-item-title style="text-align:center; font-size:x-large; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif " >CATEGORIES</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in categories"
          :key="item.name"
          link
          @click="item.open = !item.open"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list v-if="item.open" @click="drawer = !drawer">
              <v-list-item v-for="el in subcat[item.id]" :key="el" link>
                <v-list-item-content @click="$emit('selcat', el)">
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
export default{
  props : ["categories", "subcat", "shoppingcart"],
  data() {
    return {
      drawer: null,
      cost: 0
    }
  }
}
</script>


<style scoped>
#appbar{
    background-color: antiquewhite;
    border: solid;
    border-width: medium;
    border-color: aliceblue;
    text-align: center;
    height: min-content;
}
#title{

    color:brown;
    font-size: xx-large;
    font-weight: 600;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>