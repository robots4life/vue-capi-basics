<template>
	<div class="about">
		<h1>About</h1>
		<div class="edit">
			<input type="text" v-autofocus />
		</div>
	</div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus';
</script>

<style scoped>
.about {
	text-align: center;
	padding: 2rem;
}
.edit input {
	margin-top: 1rem;
	height: 3rem;
	font-size: 1.5rem;
	padding-top: 3rem;
	padding-bottom: 3rem;
	padding-left: 1rem;
	padding-right: 1rem;
	text-align: center;
}
</style>
