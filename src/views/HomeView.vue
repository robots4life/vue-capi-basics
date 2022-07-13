<template>
	<div class="home">
		<h1>Home</h1>

		<h3>{{ counterData.title }}</h3>
		<hr />
		<div>
			<button @click="decreaseCounter" class="btn">-</button>
			<span class="counter">{{ counterData.count }}</span>
			<button @click="increaseCounter" class="btn">+</button>
		</div>
		<hr />
		<button @click="resetCounter" class="btn">Reset Counter</button>
		<hr />
		<div class="edit">
			<h4>Edit counter title:</h4>
			<input v-model="counterData.title" type="text" />
		</div>
	</div>
</template>

<!-- https://vuejs.org/api/sfc-script-setup.html -->
<!-- SCRIPT SETUP -->
<!-- There no need to return the methods or values any more as well ;) -->
<script setup>
import { reactive, ref } from 'vue';

// const counter = ref(0);

// const counterTitle = ref('My Counter');

const counterData = reactive({
	count: 0,
	title: 'My Counter'
});

const increaseCounter = () => {
	// counter.value++;
	counterData.count++;
};

const decreaseCounter = () => {
	// counter.value--;
	counterData.count--;
};

const resetCounter = () => {
	// counter.value = 0;
	counterData.count = 0;
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
.edit input {
	margin-top: 1rem;
	height: 3rem;
	font-size: 3rem;
	padding-top: 3rem;
	padding-bottom: 3rem;
	padding-left: 1rem;
	padding-right: 1rem;
	text-align: center;
}
</style>
