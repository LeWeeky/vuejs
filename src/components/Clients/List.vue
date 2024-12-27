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

console.log(props.clients) 
</script>

<template>
	<h3>List</h3>
		<v-list lines="two">
			<v-list-item
				v-for="client in clients"
				:key="client.id"
				:title="`Client: ${client.id}`"
			>
				<v-container>
					<v-card-text>
						Firstname: {{ client.firstname }} <br>
						Lastname: {{ client.lastname }}	<br>
						E-Mail: {{ client.email }} <br>
					</v-card-text>
					<v-card-actions>
						<v-btn @click="emit('removeclient', client.id)">X Remove</v-btn>
					</v-card-actions>
				</v-container>
			</v-list-item>
			
		</v-list>
</template>