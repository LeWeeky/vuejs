<script setup>

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const	emit		= defineEmits(['removeclient'])

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const props = defineProps({
	clients: Array
})

</script>

<template>
	<h3>List</h3>
		<v-list v-if="clients && clients.length > 0" lines="two">
			<v-list-item
				v-for="client in clients"
				:key="client.id"
				border="primary thin"
			>
				<v-card>
					<v-card-text>
						<h4> Firstname: </h4> {{ client.firstname }}
					</v-card-text>
					<v-card-text>
						<h4> Lastname: </h4> {{ client.lastname }}
					</v-card-text>
					<v-card-text>
						<h4> E-Mail: </h4> {{ client.email }}
					</v-card-text>
					<v-card-actions>
						<v-btn @click="emit('removeclient', client.id)" color="red">X Remove</v-btn>
					</v-card-actions>
				</v-card>
			</v-list-item>
		</v-list>
		<p v-else>It's empty !</p>
</template>