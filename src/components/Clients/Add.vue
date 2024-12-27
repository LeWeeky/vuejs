<script setup>

import { ref } from 'vue'

////////////////////////////////////////////////////
/////				 Events					   /////
////////////////////////////////////////////////////

const	emit		= defineEmits(['addclient'])

////////////////////////////////////////////////////
/////				 Variables				   /////
////////////////////////////////////////////////////

const	valid		= ref(false);
const	firstname	= ref('');
const	lastname	= ref('');
const	email		= ref('');

////////////////////////////////////////////////////
/////				 Rules					   /////
////////////////////////////////////////////////////

const	nameRules	= [
	value => {
		if (value) return true
		return 'Name is required.'
	},
	value => {
		if (value?.length <= 16) return true
		return 'Name must be less than 16 characters.'
	},
];
const	emailRules	= [
	value => {
		if (value) return true
		return 'E-mail is required.'
	},
	value => {
		if (/.+@.+\..+/.test(value)) return true
		return 'E-mail must be valid.'
	}
];

////////////////////////////////////////////////////
/////				 Methods				   /////
////////////////////////////////////////////////////

function showValidation()
{
	const button = document.getElementById("addclient")
	
	if (!button)
		return ;

	const text = button.innerHTML;

	button.innerHTML = "OK !"
	setTimeout(() => {
		button.innerHTML = text;
	}, 2000)
}

function addClient()
{
	if (valid)
	{
		emit('addclient',
		firstname,
		lastname,
		email
		);
		showValidation()
	}
	else
		console.log('Form is invalid');
}

</script>

<template>
	<v-form v-model="valid" @submit.prevent="addClient">
	  <v-container>
		<v-row>
		  <v-col cols="12" md="4">
			<v-text-field
			  v-model="firstname"
			  :counter="16"
			  :rules="nameRules"
			  label="First name"
			  required
			></v-text-field>
		  </v-col>
  
		  <v-col cols="12" md="4">
			<v-text-field
			  v-model="lastname"
			  :counter="16"
			  :rules="nameRules"
			  label="Last name"
			  required
			></v-text-field>
		  </v-col>
  
		  <v-col cols="12" md="4">
			<v-text-field
			  v-model="email"
			  :rules="emailRules"
			  label="E-mail"
			  required
			></v-text-field>
		  </v-col>
		</v-row>
		<v-btn class="mt-2" type="submit" id="addclient" block>
			Submit
		</v-btn>
	  </v-container>
	</v-form>
</template>
  