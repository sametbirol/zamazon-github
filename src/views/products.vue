<template>
	<v-container class="my-15">
		<v-row fluid class="mt-10">
			<v-col v-for="card in store.state.rand10" :key="card.title" :cols="settedsize"
				class="flex-grow-0 flex-shrink-1">
				<v-card width="350px">
					<router-link :to="`/product/${card.id}`" style="text-decoration : none">

						<v-img :src="card.images.large.url" class="align-end"
							gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,0.6)" height="300px">
							<v-card-title v-text="card.title" class="text-white"></v-card-title>
						</v-img>
					</router-link>

					<v-card-actions>
						<v-spacer></v-spacer>

						<v-btn @click="store.methods.addlist(card, store.state.wishlist)" color="surface-variant"
							icon="mdi-heart" size="small" variant="text"></v-btn>

						<v-btn @click="store.methods.addlist(card, store.state.shoppingcart)" color="surface-variant"
							icon="mdi-shopping" size="small" variant="text"></v-btn>

						<v-btn color="surface-variant" icon="mdi-share-variant" size="small" variant="text"></v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<v-footer class="justify-center" app bottom absolute paddless>
			<div>
				<v-pagination v-model="store.state.page" :length="store.state.pagination" :total-visible="7"
					@click="store.methods.categorize_get(0)"></v-pagination>
			</div>
		</v-footer>
	</v-container>
</template>

<script>
import { inject, computed } from 'vue'

export default {
	name: 'HomeComp',

	setup() {
		const store = inject('store')
		const settedsize = computed(() => {
			return '2'
		})
		return {
			store,
		}
	},
	computed: {
		settedsize() {
			const { md, lg, xl, xxl } = this.$vuetify.display
			return xxl ? 2 : xl ? 3 : lg ? 4 : md ? 6 : 6
		},
	},
}
</script>