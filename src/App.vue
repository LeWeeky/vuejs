<script setup>
import { reactive } from 'vue'

// import TheWelcome from './components/TheWelcome.vue'
import Container from './components/Container.vue'
import Navigation from './components/Navigation.vue'
import Clients from './components/Clients/Main.vue'
import Cars from './components/Cars/Main.vue'
import Booking from './components/Booking/Main.vue'

const show = reactive({
	clients: true,
	cars: true,
	booking: true
})

function toggleShow(element)
{
	show[element] = !show[element];
	// console.log(element, show[element])
}
</script>

<template>
<v-app>
  <header>
		<Navigation @toggle="toggleShow" :show="show"/>
  </header>
  
  <v-main>
	<Container v-if="show['clients']">
		<Clients />
	</Container>
    <!-- <Clients v-if="show['clients']" /> -->
	<Container v-if="show['cars']">
		<Cars />
	</Container>
	<Container v-if="show['booking']">
		<Booking />
	</Container>
  </v-main>
</v-app>
</template>
