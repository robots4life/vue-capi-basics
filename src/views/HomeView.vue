<template>
	<div class="home">
		<h1>Home</h1>

		<div>
			<button @click="decreaseCounter" class="btn">-</button>
			<span class="counter">{{ counter }}</span>
			<button @click="increaseCounter" class="btn">+</button>
		</div>
		<button @click="resetCounter" class="btn">Reset Counter</button>
	</div>
</template>

<!-- Options API -->
<!--
<script>
export default {
	data() {
		return {
			counter: 10
		};
	},
	methods: {
		increaseCounter() {
			this.counter++;
		},
		decreaseCounter() {
			this.counter--;
		},
		resetCounter() {
			this.counter = 0;
		}
	}
};
</script>
-->

<!-- Composition API -->
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
