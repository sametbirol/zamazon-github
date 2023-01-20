<template>
<v-app-bar  
    id="appbar" 
    app
    z-index="1">
    <toggleside/>
    <v-toolbar-title 
    id="title">ZAMAZON
    </v-toolbar-title>
    <wishlist /> 
    <cartbutton />
</v-app-bar>
    
</template>
<script setup>
    import wishlist from '@/components/wishlist.vue'    
    import cartbutton from '@/components/cart.vue'
    import toggleside from '@/components/togglesidebar.vue'
</script>
<style scoped>
#appbar{
    background-color: antiquewhite;
    border: solid;
    border-width: medium;
    border-color: aliceblue;
    text-align: center;
    height: min-content;
}
#title{

    color:brown;
    font-size: xx-large;
    font-weight: 600;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>