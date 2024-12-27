<script setup>

import { ref } from 'vue'

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const	emit		= defineEmits(['addvehicle'])

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const	valid		= ref(false);
const	model		= ref('');
const	color		= ref('');
const	seats		= ref('');
const	colors		= [
	'red', 'pink', 'orange', 'yellow', 'green', 'blue', 'grey',
	'purple', 'brown', 'white', 'black'
]

////////////////////////////////////////////////////
/////				 Rules					   /////
////////////////////////////////////////////////////

const	model_rules	= [
	value => {
		if (value) return true
		return 'Model is required.'
	},
	value => {
		if (value?.length <= 16) return true
		return 'Name must be less than 16 characters.'
	},
];
const	color_rules	= [
	value => {
		if (value) return true
		return 'Color is required.'
	},
	value => {
		if (value?.length <= 16) return true
		return 'Color must be less than 6 characters.'
	},
];
const	seats_rules	= [
	value => {
		if (value) return true
		return 'Number of seats is required.'
	},
	value => {
		if (value > 0) return true
		return 'There must be at least 1 seat.'
	}
];

////////////////////////////////////////////////////
/////				 Methods				   /////
////////////////////////////////////////////////////

function showValidation()
{
	const button = document.getElementById("addvehicle")
	
	if (!button)
		return ;

	const text = button.innerHTML;

	button.innerHTML = "OK !"
	setTimeout(() => {
		button.innerHTML = text;
	}, 2000)
}

function addVehicle()
{
	if (valid.value)
	{
		emit('addvehicle',
			model.value,
			color.value,
			seats.value
		);
		showValidation()
	}
	else
		console.log('Form is invalid.');
}

</script>

<template>
	<v-form v-model="valid" @submit.prevent="addVehicle">
	  <v-container>
		<v-row>
			<v-col cols="12" md="4">
				<v-text-field
				v-model="model"
				:counter="16"
				:rules="model_rules"
				label="Model"
				required
				></v-text-field>
			</v-col>
  
		  <v-col cols="12" md="4">
			<v-combobox
				v-model="color"
				:items="colors"
				label="Color"
				single
				required
			></v-combobox>
		  </v-col>
  
		  <v-col cols="12" md="4">
			<v-text-field
			  v-model="seats"
			  :rules="seats_rules"
			  label="Seats"
			  required
			></v-text-field>
		  </v-col>
		</v-row>
		<v-btn class="mt-2" type="submit" id="addvehicle" block>
			Submit
		</v-btn>
	  </v-container>
	</v-form>
</template>
  