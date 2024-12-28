<script setup>

////////////////////////////////////////////////////
/////				Dependencies			   /////
////////////////////////////////////////////////////

import { computed, ref } from 'vue';
import SubmitButton from '../Buttons/Submit.vue'

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const	emit		= defineEmits(['addbooking'])

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const props = defineProps({
	vehicles: Array,
	clients: Array,
	bookings: Array
})

const	date			= new Date()
const	valid			= ref(false);
const	ready			= ref({
	vehicle: false,
	client: false,
	start_date: false,
	end_date: false,
})
const	vehicle_id		= ref('');
const	client_id		= ref('');
const	start_date		= ref(date);
const	end_date		= ref(date);

////////////////////////////////////////////////////
/////				 Rules					   /////
////////////////////////////////////////////////////

const	client_rules	= [
	value => {
		if (value)
		{
			ready.value.client = true;
			return true
		}
		ready.value.client = false;
		return 'Pleaze select a client.'
	}
];

const	vehicle_rules	= [
	value => {
		if (value) return true
		ready.value.vehicle = false;
		return 'Pleaze select a vehicle.'
	},
	value => {
		const date = vehicleIsBooked(value)
		ready.value.vehicle = true;

		if (!date)
			return true
		return `This vehicle is already in use from ${date.start} to ${date.end}.`
	},
];

const	start_rules	= [
	value => {
		if (value) return true
		return 'Start date is required.'
	},
	value => {
		start_date.value = new Date(value)
		const date = vehicleIsBooked(vehicle_id.value)

		if (!date)
		{
			ready.value.start_date = true;
			valid.value = allRight();
			return true
		}
		return `This vehicle is already in use from ${date.start} to ${date.end}.`
	}
];

const	end_rules	= [
	value => {
		if (value) return true
		return 'Start date is required.'
	},
	value => {
		end_date.value = new Date(value)
		if (end_date.value.getTime() >= start_date.value.getTime())
		{
			const date = vehicleIsBooked(vehicle_id.value)

			if (!date)
			{
				ready.value.end_date = true;
				valid.value = allRight();
				return true
			}
			return `This vehicle is already in use from ${date.start} to ${date.end}.`
		}
			return 'End day must be after start day.'
	}
];

////////////////////////////////////////////////////
/////				 Methods				   /////
////////////////////////////////////////////////////

function allRight()
{
	return (ready.value.client && ready.value.vehicle
		&& ready.value.start_date && ready.value.end_date
	);
}

function addBooking()
{
	if (valid.value)
	{
		emit('addbooking',
			vehicle_id.value,
			client_id.value,
			start_date.value,
			end_date.value
		);
	}
	else
		console.log('Form is invalid.');
}

function getVehicleBookings(vehicle_id)
{
	const bookings = [];

	props.bookings.map(
		(book) => {
			if (book.vehicle_id == vehicle_id)
				bookings.push(book)
		}
	)
	return (bookings);
}

function dateIsBooked(date, start, end)
{
	return (date >= start && date <= end);
}

function vehicleIsBooked(vehicle_id)
{
	const bookings	= getVehicleBookings(vehicle_id)
	const start		= start_date.value.getTime();
	const end		= end_date.value.getTime();

	for (let i = 0; i < bookings.length; i++)
	{
		const book_start = bookings[i]["date"].start.getTime();
		const book_end = bookings[i]["date"].end.getTime();
		if (dateIsBooked(start, book_start, book_end))
		{
			ready.value.start_date = false;
			return ({
				start:
					bookings[i]["date"].start.toLocaleDateString(),
				end:
					bookings[i]["date"].end.toLocaleDateString()
			});
		}
		if (dateIsBooked(end, book_start, book_end))
		{
			ready.value.end_date = false;
			return ({
				start:
					bookings[i]["date"].start.toLocaleDateString(),
				end:
					bookings[i]["date"].end.toLocaleDateString()
			});
		}
	}
	ready.value.start_date = true;
	ready.value.end_date = true;
}

const vehicles_options = computed(() => {
	const options = [];

	props.vehicles.map(
		vehicle => (
			options.push({
				value: vehicle.id,
				label: `${vehicle.id} - ${vehicle.model} ${vehicle.color} ${vehicle.seats} seats`
			})
		)
	)
	return (options);
})

const clients_options = computed(() => {
	const options = [];

	props.clients.map(
		client => (
			options.push({
				value: client.id,
				label: `${client.id} - ${client.firstname} ${client.lastname}`
			})
		)
	)
	return (options);
})

function updateStartDate(new_date)
{
	start_date.value = new_date;
}

function updateEndDate(new_date)
{
	end_date.value = new_date;
}

</script>

<template>
	<v-form v-model="valid" @submit.prevent="addBooking">
	  	<v-container>
			<v-row
				class="d-flex justify-center align-center"
  			>
				<v-col cols="12" md="4">
					<v-select
					v-model="vehicle_id"
					:items="vehicles_options"
					:rules="vehicle_rules"
					item-value="value" item-title="label"
					label="Vehicle"
					single
					required
					>
					</v-select>
				</v-col>
				<v-col cols="12" md="4">
					<v-select
					v-model="client_id"
					:items="clients_options"
					:rules="client_rules"
					item-value="value" item-title="label"
					label="Client"
					single
					required>
					</v-select>	
				</v-col>
			</v-row>
			<v-row
				class="d-flex justify-center align-center"
			>
				<v-col cols="12" md="4">
					<v-date-input
					:rules="start_rules"
					@update:modelValue="updateStartDate"
					label="Start date"
					required>
					</v-date-input>
				</v-col>
				<v-col cols="12" md="4">
					<v-date-input
					:rules="end_rules"
					@update:modelValue="updateEndDate"
					label="End date"
					required>
					</v-date-input>
				</v-col>
			</v-row>
			<SubmitButton button_id="addbooking" :valid="valid"/>
	 	</v-container>
	</v-form>
</template>
  