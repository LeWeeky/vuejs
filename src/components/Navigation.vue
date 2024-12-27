<script setup>

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const emit = defineEmits(['toggle'])

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
		<v-btn @click="emit('toggle', 'clients')"  :color="show['clients'] ? 'primary' : 'red'" >Clients</v-btn>
		<v-btn @click="emit('toggle', 'cars')" :color="show['cars'] ? 'primary' : 'red'">Cars</v-btn>
		<v-btn @click="emit('toggle', 'booking')" :color="show['booking'] ? 'primary' : 'red'">Booking</v-btn>
	</v-app-bar>
</template>