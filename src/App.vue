<template>
  <v-app>
    <v-main>
      
      <v-container>
        <Appbarr :categories="dictt" :subcat="children" @selcat="(a) => filter = a" :shoppingcart="shoppingcart"/>
        
        <HomeE v-if="homepage" :rand10="rand10" @add="(el) => add(el)" @selected="(product) => openproduct(product)"/>
        <ProductPage v-else :product="toproduct"/>
        {{ homepage }}
    </v-container>
    </v-main>
  </v-app>

</template>


<script setup>

  import Appbarr from './components/appbarx.vue'
  import HomeE from './components/homescreen.vue'
  import ProductPage from './components/productpage.vue'
  import { ref, watch } from 'vue'
  
  const toproduct = ref([])
  const homepage = ref(true)

  const firstdata = ref("")
  const parents = []
  const children = []
  const ids = []
  let dictt = []
  let indexx = []

  const filter = ref("/")

  const rand10 = ref("")

  const products = ref("")
  const i = ref(0)

  function createDict(firstdata, ids) {
    let myDict = firstdata.map((category, index) => {
        return { name: category, id: ids[index], open: false}
    });
    return myDict;
  }


  async function fetchingg() {
    const res1 = await fetch('https://raw.githubusercontent.com/christkv/ecommerce/master/preload_data/categories.json')
    const res2 = await fetch('../products.json')
    
    firstdata.value = await res1.json()
    indexx = await res2.json()

    firstdata.value.forEach(element => {
      element.isAparent = (element.children.length > 0) ? true : false
      if (element.isAparent && element.name != '/'){
        parents.push(element.name.toUpperCase())
        children.push(element.children)
      }
    });    
    
    
    while(i.value < parents.length)
    {
      ids.push(i.value)
      i.value++
    }
    
    dictt = createDict(parents, ids)


    const stack = []
    let ok = 0
    stack.push(indexx[0])
    for (let i = 0; i < indexx.length; i++) {
        ok = 0
        for(let x = 0; x < stack.length; x++){
          if(indexx[i].title == stack[x].title){
            ok = 0
            break;
          }
          else{
            ok = 1
          }
        }
        if(ok == 1){
          stack.push(indexx[i])
        }
        rand10.value = stack.sort(() => Math.random() - 0.5).slice(0, 12);
    }


  }
  fetchingg();


  const specList = ref([])

  watch(filter, async(newfilter,oldfilter) => {
    if (newfilter != oldfilter){
      specList.value = []
      for(let i = 0; i < indexx.length; i++){
        
        if(indexx[i].category.includes(newfilter)){
          specList.value.push(indexx[i])
        }
      }
    specList.value = specList.value.sort(() => Math.random() - 0.5).slice(0, 12);
    rand10.value = specList.value
    }
  })


  const shoppingcart = ref([])
  function add(element){
    shoppingcart.value.push(element)
    console.log(shoppingcart)
  }

  function openproduct(page){
    toproduct = page
    homepage.value = false
  }


</script>
