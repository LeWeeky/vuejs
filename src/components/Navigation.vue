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
		<v-btn @click="emit('toggle', 'vehicles')" :color="show['vehicles'] ? 'primary' : 'red'">Vehicles</v-btn>
		<v-btn @click="emit('toggle', 'bookings')" :color="show['bookings'] ? 'primary' : 'red'">Booking</v-btn>
	</v-app-bar>
</template>