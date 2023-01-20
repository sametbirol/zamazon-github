<template>
	<v-container>
		<pre>
			{{ store.state.cleanProduct[card_id] }}
		</pre>
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

		console.log(store.state.cleanProduct)

		return{
			store,
			card_id
		}
	}
}
</script>
