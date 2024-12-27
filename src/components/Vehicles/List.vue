<script setup>

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const	emit		= defineEmits(['removevehicle'])

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const props = defineProps({
	vehicles: Array
})

</script>

<template>
	<h3>List</h3>
		<v-list v-if="vehicles && vehicles.length > 0" lines="two">
			<v-list-item
				v-for="vehicle in vehicles"
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