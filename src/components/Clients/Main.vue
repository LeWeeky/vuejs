<script setup>

import { ref } from 'vue'
import Container from '../Container.vue'
import Add from './Add.vue'
import List from './List.vue'

const id		= ref(0);
const clients	= ref([{
	id: 0,
	firstname: "Roméo",
	lastname: "Barbiot",
	email: "romeobarbiot@gmail.com"
}]);

function addClient(firstname, lastname, email)
{
	id.value++;
	clients.value.push({
		id: id.value,
		firstname: firstname,
		lastname: lastname,
		email: email
	})
}

function removeClient(id)
{
	clients.value = clients.value.filter(client => client.id != id)
}

</script>

<template>
	<h1>Clients</h1>
	<Container>
		<Add @addclient="addClient"/>
	</Container>
	<Container>
		<List @removeclient="removeClient" :clients="clients"/>
	</Container>
</template>