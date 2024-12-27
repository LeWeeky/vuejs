<script setup>

////////////////////////////////////////////////////
/////				Dependencies			   /////
////////////////////////////////////////////////////

import { computed } from 'vue';
import { ref } from 'vue'
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
	clients: Array
})

const	date		= new Date()
const	valid		= ref(false);
const	vehicle_id	= ref('');
const	client_id	= ref('');
const	start_date	= ref(date);
const	end_date	= ref(date);

////////////////////////////////////////////////////
/////				 Rules					   /////
////////////////////////////////////////////////////

const	id_rules	= [
	value => {
		if (value) return true
		return 'Pleaze select an option.'
	}
];

const	start_rules	= [
	value => {
		if (value) return true
		return 'Start date is required.'
	},
	
];

const	end_rules	= [
	value => {
		if (value) return true
		return 'Start date is required.'
	},
	value => {
		// console.log(new Date(value), start_date.value)
		if (new Date(value).getTime() >= start_date.value.getTime()) return true
			return 'End day must be after start day.'
	},
];

////////////////////////////////////////////////////
/////				 Methods				   /////
////////////////////////////////////////////////////

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
		showValidation()
	}
	else
		console.log('Form is invalid.');
}

//function vehicleIsAvailable()

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
	console.log(new_date)
}

function updateEndDate(new_date)
{
	end_date.value = new_date;
	console.log(new_date)
}

</script>

<template>
	<v-form v-model="valid" @submit.prevent="addBooking">
	  	<v-container>
			<v-row
				class="d-flex justify-center align-center"
				align="center"
				justify="center"
  				>
				<v-col cols="12" md="4">
					<v-select
					v-model="vehicle_id"
					:items="vehicles_options"
					:rules="id_rules"
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
					:rules="id_rules"
					item-value="value" item-title="label"
					label="Client"
					single
					required>
					</v-select>	
				</v-col>
			</v-row>
			<v-row
				class="d-flex justify-center align-center"
				align="center"
				justify="center"
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
					label="End date"
					required>
					</v-date-input>
				</v-col>
			</v-row>
			<SubmitButton button_id="addbooking" />
	 	</v-container>
	</v-form>
</template>
  