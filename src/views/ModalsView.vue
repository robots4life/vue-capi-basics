<template>
	<div class="modals">
		<h1>Modals</h1>
		<!-- <button @click="showModalWithBodyClass" class="btn">Toggle Modal</button> -->
		<button @click="showModal = !showModal" class="btn">Toggle Modal</button>
		<!-- add modals container to the element in the app with the modals-container class
             in this case the body element -->
		<teleport to="body">
			<div v-if="showModal" class="modal">
				<h1>This Is Our Modal</h1>
				<h2>Oh This Is Amazing</h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed at nostrum ipsam hic numquam! Animi impedit inventore qui minima voluptas error nisi fuga, nemo debitis, quibusdam, in corrupti eius porro facilis. Omnis cupiditate, error rem alias temporibus modi qui officia!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi, earum minima quibusdam deleniti saepe ipsam accusamus recusandae at quos.</p>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quod, dolorem, odio unde maxime eius illo facere voluptatum repellat porro voluptate? Architecto, fugit! Consectetur officiis error facere eaque fugit cum, molestias tenetur voluptatum, itaque rem possimus deleniti placeat dicta exercitationem laudantium? Modi inventore quis, omnis dolorem illo natus explicabo nemo provident commodi, nobis pariatur amet, iure sunt dignissimos voluptatibus corrupti.</p>
				<button @click="showModal = false" class="btn">Hide Modal</button>
			</div>
		</teleport>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

//
// instead of all this just read the docs and add the modal to the body element instead of first setting a class on the body !!
//
// https://vuejs.org/guide/built-ins/teleport.html#basic-usage
</script>

<style scoped>
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
.modal {
	background-color: aquamarine;
	border: 10px solid midnightblue;
	padding: 2rem;
	/* full screen modal */
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
	font-size: 1.5rem;
	text-align: center;
}
.modal p,
.modal h1,
.modal h2 {
	padding-bottom: 1.5rem;
}
</style>
