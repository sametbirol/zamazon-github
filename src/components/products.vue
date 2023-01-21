<template>
	<v-row>
		<label style="font-size:xx-large; font-family:Arial, Helvetica, sans-serif; margin-top: 30px; margin-left: 170px;">Products</label>
	</v-row>
	

	<v-container dense>
		<v-row fluid>
			<v-col
			v-for="card in store.state.rand10"
			:key="card.title"
			>
			<v-card width="250">
			<router-link :to="`/product/${card.id}`">

				<v-img
				:src="card.images.large.url"
				class="align-end"
				gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,0.8)"
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
		<v-footer style="margin-left:300px">
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