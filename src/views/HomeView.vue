<template>
	<div class="home">
		<h1>Home</h1>

		<h3>{{ counterTitle }}</h3>
		<hr />
		<div>
			<button @click="decreaseCounter" class="btn">-</button>
			<span class="counter">{{ counter }}</span>
			<button @click="increaseCounter" class="btn">+</button>
		</div>
		<hr />
		<button @click="resetCounter" class="btn">Reset Counter</button>
	</div>
</template>

<!-- https://vuejs.org/api/sfc-script-setup.html -->
<!-- SCRIPT SETUP -->
<!-- There no need to return the methods or values any more as well ;) -->
<script setup>
import { ref } from 'vue';

const counter = ref(0);

const counterTitle = ref('My Counter');

const increaseCounter = () => {
	counter.value++;
};

const decreaseCounter = () => {
	counter.value--;
};

const resetCounter = () => {
	counter.value = 0;
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
hr {
	margin-top: 2rem;
	margin-bottom: 2rem;
}
</style>
