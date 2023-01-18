<template>
	<v-row>
		<label style="font-size:x-large; font-family:Arial, Helvetica, sans-serif">Random Recommendations</label>
	</v-row>
	
	<v-container fluid>
		<v-row dense>
		  <v-col
			v-for="card in rand10"
			:key="card.title"
			
		  >
			<v-card width="250" @click="$emit('selected', card)">
			  <v-img
				:src="card.images.large.url"
				class="align-end"
				gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,0.8)"
				height="300px"
			  >
				<v-card-title class="text-white" v-text="card.title"></v-card-title>
			  </v-img>
  
			  
			  <v-card-actions>
				<v-spacer></v-spacer>
  
				<v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
  
				<v-btn size="small" color="surface-variant" variant="text" icon="mdi-shopping" @click="$emit('add', card)"></v-btn>
  
				<v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
			  </v-card-actions>
			</v-card>
		</v-col>
		</v-row>

	  </v-container>
  
	<v-footer style="margin-left:300px">
		<div>
		  <v-pagination
			v-model="page"
			:length="15"
			:total-visible="7"
		  ></v-pagination>
		</div>
	</v-footer>

</template>

<script>
  export default {
	props : ["rand10"],
	data () {
      return {
        page: 1,
		tray: true
      }
    }
}
</script>
