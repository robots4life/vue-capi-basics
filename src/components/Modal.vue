<template>
	<teleport to="body">
		<div class="modal">
			<h1>This Is Our Modal</h1>
			<h1><slot name="data" /></h1>
			<slot />
			<button class="btn">Hide Modal</button>
		</div>
	</teleport>
</template>

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
