<script setup>

////////////////////////////////////////////////////
/////				Dependencies			   /////
////////////////////////////////////////////////////

import { ref } from 'vue'
import Container from '../Container.vue'
import IconClient from '../Icons/IconClient.vue'
import Add from './Add.vue'
import List from './List.vue'

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const	emit		= defineEmits(['updateclients'])

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const props = defineProps({
	clients: Array
})
const id		= ref(1);

////////////////////////////////////////////////////
/////				 Methods				   /////
////////////////////////////////////////////////////

function addClient(firstname, lastname, email)
{
	id.value++;
	props.clients.push({
		id: id.value,
		firstname: firstname,
		lastname: lastname,
		email: email
	})
	console.log(`New client: 
		id: ${id.value}
		Firstname: ${firstname}
		Lastname: ${lastname}
		email: ${email}`
	)
}

function removeClient(id)
{
	emit('updateclients', props.clients.filter(client => client.id != id));
	console.log(`Client removed: 
		id: ${id}`
	)
}

</script>

<template>
	<h1><IconClient /> Clients</h1>
	<Container>
		<Add @addclient="addClient"/>
	</Container>
	<Container>
		<List @removeclient="removeClient" :clients="props.clients"/>
	</Container>
</template>