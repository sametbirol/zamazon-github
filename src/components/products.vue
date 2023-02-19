<template>
	<v-container dense>
		<label style="font-size:xx-large;z-index: 1;">Products</label>
		<br/>
		<br/>
		<v-row fluid>
			<v-col
			  v-for="card in store.state.rand10"
			  :key="card.title"
			>
			<v-card
			  width="250"
			>
			<router-link
			  :to="`/product/${card.id}`"
			  style="text-decoration : none"
			>

				<v-img
				  :src="card.images.large.url"
				  class="align-end"
				  gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,0.6)"
				  height="300px"
				>
				<v-card-title
				  v-text="card.title"
				  class="text-white"
				></v-card-title>
			</v-img>
			</router-link>

			<v-card-actions>
				<v-spacer></v-spacer>
  
				<v-btn
				  @click="store.methods.listreview(card,'+',store.state.wishlist)"
				  color="surface-variant"
				  icon="mdi-heart"
				  size="small"
				  variant="text"
				></v-btn>
  
				<v-btn
				  @click="store.methods.listreview(card,'+',store.state.shoppingcart)"
				  color="surface-variant"
				  icon="mdi-shopping"
				  size="small"
				  variant="text"
				></v-btn>
  
				<v-btn
				  color="surface-variant"
				  icon="mdi-share-variant"
				  size="small"
				  variant="text"
				></v-btn>
			</v-card-actions>
			</v-card>
		</v-col>
		</v-row>
		<v-footer class="justify-center" >
		<div>
			<v-pagination
			  v-model="store.state.page"
			  :length="store.state.pagination"
			  :total-visible="7"
			  @click="store.methods.categorize_get(0)"
			></v-pagination>
		</div>
	</v-footer>
</v-container>
  
	

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