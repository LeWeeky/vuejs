<script setup>

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const props = defineProps({
	show: Object
})

</script>

<template>
	<v-app-bar app>
		<v-app-bar-title>Neo Mobility</v-app-bar-title>
		<v-btn href="#clients">Clients</v-btn>
		<v-btn href="#vehicles">Vehicles</v-btn>
		<v-btn href="#booking">Booking</v-btn>
	</v-app-bar>
</template>