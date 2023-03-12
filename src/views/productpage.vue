<template>
	<v-container style="background-color:white">
		<div style="text-align:center; margin-top: 50px;">
			<v-img :src="card.images.large.url" height="400"></v-img>
			<h2 style="margin-top: 10px">{{ card.title }}</h2>
		</div>
		<br>
		<div>
			<p>
				Price: <em style="color:green">{{ card.price / 100 }}$</em><v-spacer></v-spacer>
				<v-btn elevation="10" color="blue" @click="store.methods.addlist(card, store.state.shoppingcart)">Add to
					Cart</v-btn>
			</p>
			<br>
			<br>
			<p>Category: {{ card.productgroup }}</p>
			<br>
			<p>Publisher: {{ card.manufacturer }}</p>
		</div>
		<br>
		<div>
			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title>Details</v-expansion-panel-title>
					<v-expansion-panel-text v-html="card.description" class="ma-8">
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</div>
	</v-container>
</template>


<script setup>
import { inject } from 'vue'
import { useRoute } from 'vue-router'
const store = inject('store')

const route = useRoute()


const card = store.state.ProductDict.find(x => x.id == route.params.id)
</script>
