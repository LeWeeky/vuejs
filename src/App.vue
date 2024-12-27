<script setup>

////////////////////////////////////////////////////
/////				Dependencies			   /////
////////////////////////////////////////////////////

import { ref, reactive } from 'vue'

import Container from './components/Container.vue'
import Navigation from './components/Navigation.vue'
import Clients from './components/Clients/Main.vue'
import Vehicles from './components/Vehicles/Main.vue'
import Booking from './components/Booking/Main.vue'

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const show = reactive({
	clients: true,
	vehicles: true,
	bookings: true
})
const clients	= ref([{
	id: 1,
	firstname: "Hero",
	lastname: "Brine",
	email: "herobrine@minecraft.net"
}]);
const vehicles	= ref([{
	id: 1,
	model: "BMW-Z3",
	color: "grey",
	seats: "2"
}]);
const bookings	= ref([{
	id: 1,
	vehicle_id: 1,
	client_id: 1,
	date: {
		start: new Date("2024-12-31"),
		end: new Date("2025-12-31")
	}
}]);

////////////////////////////////////////////////////
/////				 Methods				   /////
////////////////////////////////////////////////////

function toggleShow(element)
{
	show[element] = !show[element];
	console.log(`${element} display has been set to ${show[element]}`)
}

function updateClients(data)
{
	clients.value = data;
}

function updateVehicles(data)
{
	vehicles.value = data;
}

function updateBookings(data)
{
	bookings.value = data;
}

</script>

<template>
<v-app>
  <header>
		<Navigation @toggle="toggleShow" :show="show"/>
  </header>
  
  <v-main>
	<Container v-if="show['clients']">
		<Clients @updateclients="updateClients" :clients="clients"/>
	</Container>
	<Container v-if="show['vehicles']">
		<Vehicles @updatevehicles="updateVehicles" :vehicles="vehicles"/>
	</Container>
	<Container v-if="show['bookings']">
		<Booking @updatebookings="updateBookings" :bookings="bookings" :clients="clients" :vehicles="vehicles"/>
	</Container>
  </v-main>
</v-app>
</template>
