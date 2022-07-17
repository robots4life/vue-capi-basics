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
