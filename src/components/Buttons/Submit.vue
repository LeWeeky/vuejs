<script setup>
const props = defineProps({
	button_id: String
})

function showValidation()
{
	const button = document.getElementById(props.button_id)
	
	if (!button)
		return ;

	const text = button.innerHTML;

	button.innerHTML = "ADDED !"
	setTimeout(() => {
		button.innerHTML = text;
	}, 2000)
}

</script>
<template>
	<v-btn
	class="mt-2" type="submit" @click="showValidation"
	:id="button_id" color="info" block>
		Submit
	</v-btn>
</template>