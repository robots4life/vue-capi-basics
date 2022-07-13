<template>
	<div class="home">
		<h1>Home</h1>

		<div>
			<button class="btn">-</button>
			<span class="counter">{{ counter }}</span>
			<button class="btn">+</button>
		</div>
	</div>
</template>

<!-- Options API -->
<script>
export default {
	data() {
		return {
			counter: 10
		};
	}
};
</script>

<style>
.home {
	text-align: center;
	padding: 2rem;
}
.btn,
.counter {
	font-size: 2rem;
	padding: 2rem;
}
</style>
