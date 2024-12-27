<script setup>

////////////////////////////////////////////////////
/////				Dependencies			   /////
////////////////////////////////////////////////////

import { ref } from 'vue'
import Container from '../Container.vue'
import IconBook from '../Icons/IconBook.vue'
import Add from './Add.vue'
import List from './List.vue'

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const	emit		= defineEmits(['updatebookings'])

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const props = defineProps({
	vehicles: Array,
	clients: Array,
	bookings: Array
})
const id		= ref(1);

////////////////////////////////////////////////////
/////				 Methods				   /////
////////////////////////////////////////////////////

function addBooking(vehicle_id, client_id, start_date, end_date)
{
	id.value++;
	props.bookings.push({
		id: id.value,
		vehicle_id: vehicle_id,
		client_id: client_id, 
		date: {
			start: start_date,
			end: end_date
		}
	})
	console.log(`New book added: 
		id: ${id.value}
		vehicle id: ${vehicle_id}
		client id: ${client_id}
		starts on: ${start_date}
		ends on: ${end_date}`
	)
}

function removeBooking(id)
{
	emit('updatebookings', props.bookings.filter(book => book.id != id))
	console.log(`Book removed: 
		id: ${id}`
	)
}

</script>

<template>
	<h1><IconBook /> Booking</h1>
	<Container>
		<Add @addbooking="addBooking" :bookings="bookings" :clients="clients" :vehicles="vehicles"/>
	</Container>
	<Container>
		<List @removebooking="removeBooking" :bookings="bookings" :clients="clients" :vehicles="vehicles"/>
	</Container>
</template>