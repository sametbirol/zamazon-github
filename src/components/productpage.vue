<template>
	<v-container style="background-color:white">
		<div style="text-align:center; margin-top: 50px;"> 
			<v-img :src="card.images.large.url" height="400" ></v-img>
			<h2 style="margin-top: 10px">{{ card.title }}</h2>
		</div>
		<br>
		<div>
			<v-label>
				Price: <pre style="color:green"> {{ card.price / 100 }}$ </pre>
				<v-btn elevation="10" color="blue" @click="store.methods.listreview(card,'+',store.state.shoppingcart)">Add to Cart</v-btn>
			</v-label>
			<br>
			<br>
			<v-label>Category: {{ card.productgroup }}</v-label>
			<br>
			<v-label>Publisher: {{ card.manufacturer }}</v-label>
		</div>
		<br>
		<div>
			<v-expansion-panels>
					<v-expansion-panel>
						<v-expansion-panel-title>Details</v-expansion-panel-title>
						<v-expansion-panel-text v-html="card.description"></v-expansion-panel-text>
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
