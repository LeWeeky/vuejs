<script setup>

////////////////////////////////////////////////////
/////				Dependencies			   /////
////////////////////////////////////////////////////

import { ref } from 'vue'
import SubmitButton from '../Buttons/Submit.vue'


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

const	name_rules	= [
	value => {
		if (value) return true
		return 'Name is required.'
	},
	value => {
		if (value?.length <= 16) return true
		return 'Name must be less than 16 characters.'
	},
];
const	email_rules	= [
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

function addClient()
{
	if (valid.value)
	{
		emit('addclient',
		firstname.value,
		lastname.value,
		email.value
		);
		showValidation()
	}
	else
		console.log('Form is invalid.');
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
			  :rules="name_rules"
			  label="First name"
			  required
			></v-text-field>
		  </v-col>
  
		  <v-col cols="12" md="4">
			<v-text-field
			  v-model="lastname"
			  :counter="16"
			  :rules="name_rules"
			  label="Last name"
			  required
			></v-text-field>
		  </v-col>
  
		  <v-col cols="12" md="4">
			<v-text-field
			  v-model="email"
			  :rules="email_rules"
			  label="E-mail"
			  required
			></v-text-field>
		  </v-col>
		</v-row>
		<SubmitButton button_id="addclient "/>
	  </v-container>
	</v-form>
</template>
  