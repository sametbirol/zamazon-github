<template>
	<v-container style="background-color:white">
		<div style="text-align:center; margin-top: 50px;"> 
			<v-img :src="card.images.large.url" height="400" ></v-img>
			<h2 style="margin-top: 10px">{{ card.title }}</h2>
		</div>
		<br>
		<div>
			<label >
				Price: <pre style="color:green"> {{ card.price / 100 }}$ </pre>
				<v-btn style="float: right; " @click="store.methods.listreview(card,'+',store.state.shoppingcart)">Add to Cart</v-btn>

			</label>
		</div>
		<br>
		<div>
			<v-expansion-panels>
					<v-expansion-panel
					title="Description"
					:text=card.description
					>
					</v-expansion-panel>
				</v-expansion-panels>
		</div>
	</v-container>

</template>


<script>
import { inject } from 'vue'
import { useRoute } from 'vue-router'

export default {
	
	name: 'ProductComp',
	setup(){
		const store = inject('store')

		const route = useRoute()

		const card_id = route.params.id

		let len = 0
		while(len < store.state.cleanProduct.length) {
			if (store.state.cleanProduct[len].id == card_id){
				break;
			}
			len++
		}

		const card = store.state.cleanProduct[len]

		return{
			store,
			card
		}
	}
}
</script>
