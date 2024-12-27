<script setup>

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const	emit		= defineEmits(['removebooking'])

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const props = defineProps({
	bookings: Array,
	clients: Array,
	vehicles: Array
})

function fetchClient(id)
{
	let result = "This client has been deleted."
	props.clients.map(
		(client) => {
			console.log(client, client.id, id)
			if (client.id == id)
			{
				result = `${client.firstname} ${client.lastname} | Contact → ${client.email}`;
				return ;
			}
		}
	)
	return (result);
}

function fetchVehicle(id)
{
	let result = "This vehicle has been deleted.";
	let seats;

	props.vehicles.map(
		(vehicle) => {
			if (vehicle.id == id)
			{
				if (vehicle.seats > 1)
					seats = "seats"
				else
					seats = "seat"
				result = `${vehicle.model} ${vehicle.color} ${vehicle.seats} ${seats}`;
				return ;
			}
		}
	)
	return (result);
}

</script>

<template>
	<h3>List</h3>
		<v-list v-if="bookings && bookings.length > 0" lines="two">
			<v-list-item
				v-for="booking in bookings"
				:key="booking.id"
				border="success thin"
			>
				<v-card>
					<v-card-text>
						<h3>Client:</h3> {{ fetchClient(booking.client_id) }}
					</v-card-text>
					<v-card-text>
						<h3>Starts:</h3> {{ booking.date.start }}
					</v-card-text>
					<v-card-text>
						<h3>Ends:</h3> {{ booking.date.end }}
					</v-card-text>
					<v-card-text>
						<h3>Vehicle:</h3> {{ fetchVehicle(booking.vehicle_id) }}
					</v-card-text>
					<v-card-actions>
						<v-btn @click="emit('removebooking', booking.id)" color="red">X Remove</v-btn>
					</v-card-actions>
				</v-card>
			</v-list-item>
		</v-list>
		<h4 v-else>It's empty !</h4>
</template>