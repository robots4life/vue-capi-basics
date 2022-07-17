<template>
	<div class="modals">
		<h1>Modals</h1>
		<button @click="showModal = !showModal" class="btn">Toggle Modal</button>
		<Modal v-if="showModal">
			<template v-slot:data>New Title</template>
			<h2>Oh This Is Amazing</h2>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed at nostrum ipsam hic numquam! Animi impedit inventore qui minima voluptas error nisi fuga, nemo debitis, quibusdam, in corrupti eius porro facilis. Omnis cupiditate, error rem alias temporibus modi qui officia!</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi, earum minima quibusdam deleniti saepe ipsam accusamus recusandae at quos.</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quod, dolorem, odio unde maxime eius illo facere voluptatum repellat porro voluptate? Architecto, fugit! Consectetur officiis error facere eaque fugit cum, molestias tenetur voluptatum, itaque rem possimus deleniti placeat dicta exercitationem laudantium? Modi inventore quis, omnis dolorem illo natus explicabo nemo provident commodi, nobis pariatur amet, iure sunt dignissimos voluptatibus corrupti.</p>
		</Modal>
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
