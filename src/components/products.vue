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
			<v-card width="250">
			<router-link 
			style="text-decoration : none"
			:to="`/product/${card.id}`">

				<v-img
				:src="card.images.large.url"
				class="align-end"
				gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,0.6)"
				height="300px"
				>
				<v-card-title class="text-white" v-text="card.title"></v-card-title>
			</v-img>
			</router-link>

			<v-card-actions>
				<v-spacer></v-spacer>
  
				<v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart" @click="store.methods.listreview(card,'+',store.state.wishlist)" ></v-btn>
  
				<v-btn size="small" color="surface-variant" variant="text" icon="mdi-shopping" @click="store.methods.listreview(card,'+',store.state.shoppingcart)"></v-btn>
  
				<v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
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