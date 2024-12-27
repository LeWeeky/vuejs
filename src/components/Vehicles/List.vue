<script setup>

////////////////////////////////////////////////////
/////				Dependencies			   /////
////////////////////////////////////////////////////

import { computed, ref } from 'vue';

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const	emit		= defineEmits(['removevehicle'])

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const props		= defineProps({
	vehicles: Array
})
const minimum_seats = ref(0);
const maximum_seats = ref(0);
const color	= ref("all");
const minimum_rules	= [
	value => {
		if (value > -1) return true
		return 'There must be at least 1 seat (or 0 is you want to disable this filter).'
	}
];
const maximum_rules	= [
	value => {
		if (value > -1) return true
		return 'There must be at least 1 seat (or 0 is you want to disable this filter).'
	},
	value => {
		if (value >= minimum_seats.value) return true
		return 'Maximum cannot be less than minimum.'
	}
];
const	colors		= [
	'all', 'red', 'pink', 'orange', 'yellow', 'green', 'blue', 'grey',
	'purple', 'brown', 'white', 'black'
]

const vehicles_available = computed(() => {
	minimum_seats.value = Number(minimum_seats.value);
	maximum_seats.value = Number(maximum_seats.value)
	return (
		(minimum_seats.value !== 0 || maximum_seats.value !== 0
			|| color.value !== "all"
		)
		? props.vehicles.filter((vehicle) => {
			return (vehicle.seats >=  minimum_seats.value
			&& (vehicle.seats <=  maximum_seats.value
				||  maximum_seats.value == 0
			) && (color.value == "all"
				|| vehicle.color == color.value
			))
		})
		: props.vehicles
	)
})

</script>

<template>
	<h3>List</h3>
		<h4>Filter by seats</h4>
		<v-row>
			<v-col cols="12" md="4">
				<v-text-field
				v-model="minimum_seats"
				:rules="minimum_rules"
				type="number"
				label="From"
				required
				></v-text-field>
			</v-col>
			<v-col cols="12" md="4">
				<v-text-field
				v-model="maximum_seats"
				:rules="maximum_rules"
				type="number"
				label="To"
				required
				></v-text-field>
			</v-col>
		</v-row>
		<h4>Filter by color</h4>
		<v-row>
			<v-col cols="12" md="4">
			<v-combobox
				v-model="color"
				:items="colors"
				label="Color"
				single
				required
			></v-combobox>
		  </v-col>
		</v-row>
		<v-list v-if="vehicles && vehicles_available.length > 0" lines="two">
			<v-list-item
				v-for="vehicle in vehicles_available"
				:key="vehicle.id"
				border="success thin"
			>
				<v-card>
					<v-card-title class="d-flex">
						{{ `Model: ${vehicle.model}` }} <v-spacer></v-spacer><v-avatar size="32" :color="vehicle.color" styles="align: left;"></v-avatar>
					</v-card-title>
						
					<v-card-text>
						<h4> Seats: </h4>  {{ vehicle.seats }}
					</v-card-text>
					<v-card-actions>
						<v-btn @click="emit('removevehicle', vehicle.id)" color="red">X Remove</v-btn>
					</v-card-actions>
				</v-card>
			</v-list-item>
		</v-list>
		<h4 v-else>It's empty !</h4>
</template>