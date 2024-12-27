<script setup>

const emit = defineEmits(['toggle'])
</script>

<template>
	<v-app-bar app>
		<v-app-bar-title>Neo Mobility</v-app-bar-title>
		<v-btn @click="emit('toggle', 'clients')" color="primary" >Clients</v-btn>
		<v-btn @click="emit('toggle', 'cars')" color="primary">Cars</v-btn>
		<v-btn @click="emit('toggle', 'booking')" color="primary">Booking</v-btn>
	</v-app-bar>
</template>