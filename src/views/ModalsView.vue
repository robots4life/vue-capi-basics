<template>
	<div class="modals">
		<h1>Modals</h1>
		<button @click="showModal = !showModal" class="btn">Toggle Modal</button>
		<Modal v-if="showModal"></Modal>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
const showModal = ref(false);
</script>

<style>
.modals {
	text-align: center;
	padding: 2rem;
}

.btn {
	font-size: 1.5rem;
	padding: 2rem;
	margin-left: 1rem;
	margin-right: 1rem;
}
</style>
