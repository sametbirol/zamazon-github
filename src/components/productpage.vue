<template>
	<v-container>
		<h1>{{ product.name }}</h1>
		<br>
		<br>

		<pre>{{ product }}</pre>
	</v-container>
</template>

<script>
	props:["product"]

</script>
