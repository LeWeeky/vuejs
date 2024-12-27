<script setup>

////////////////////////////////////////////////////
/////				Dependencies			   /////
////////////////////////////////////////////////////

import { ref } from 'vue'
import Container from '../Container.vue'
import IconVehicle from '../Icons/IconVehicle.vue'
import Add from './Add.vue'
import List from './List.vue'

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const	emit		= defineEmits(['updatevehicles'])

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const props = defineProps({
	vehicles: Array
})
const id		= ref(1);

////////////////////////////////////////////////////
/////				 Methods				   /////
////////////////////////////////////////////////////

function addVehicle(model, color, seats)
{
	id.value++;
	props.vehicles.push({
		id: id.value,
		model: model,
		color: color,
		seats:  Number(seats)
	})
	console.log(`New vehicle: 
		id: ${id.value}
		model ${model}
		color: ${color}
		seats: ${seats}`
	)
}

function removeVehicle(id)
{
	emit('updatevehicles', props.vehicles.filter(vehicle => vehicle.id != id));
	console.log(`Vehicle removed: 
		id: ${id}`
	)
}

</script>

<template>
	<h1><IconVehicle /> Vehicles</h1>
	<Container>
		<Add @addvehicle="addVehicle"/>
	</Container>
	<Container>
		<List @removevehicle="removeVehicle" :vehicles="props.vehicles"/>
	</Container>
</template>