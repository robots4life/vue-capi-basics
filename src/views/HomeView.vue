<template>
	<div class="home">
		<h1>Home</h1>

		<h2>{{ appTitle }}</h2>

		<h3>{{ counterData.title }}</h3>

		<h4>The Counter Now Shows An {{ oddOrEven }} Number</h4>
		<hr />
		<div>
			<button @click="decreaseCounter(2, $event)" class="btn">- -</button>
			<button @click="decreaseCounter(1)" class="btn">-</button>
			<span class="counter">{{ counterData.count }}</span>
			<button @click="increaseCounter(1)" class="btn">+</button>
			<button @click="increaseCounter(2, $event)" class="btn">+ +</button>
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
<!-- There is no need to return the methods or values any more as well ;) -->
<script setup>
import { computed, onActivated, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, reactive, watch } from 'vue';

// not all data needs to be reactive
// PERFORMANCE of the APP is IMPROVED for any data variables that are non reactive
const appTitle = 'My Amazing Counter App';

const counterData = reactive({
	count: 0,
	title: 'My Counter'
});

// Computed Property "oddOrEven" is based on the counterData.count value
// hence the name, it computes the new value based on the value of a given variable
const oddOrEven = computed(() => {
	if (counterData.count % 2 === 0) {
		return 'Even';
	} else {
		return 'Odd';
	}
});

// Watcher
watch(
	() => counterData.count,
	(newCount, oldCount) => {
		console.log('newCount : ', newCount);
		console.log('oldCount : ', oldCount);
	}
);

const increaseCounter = (amount, event) => {
	counterData.count += amount;
	console.log(event);
};

const decreaseCounter = (amount, event) => {
	counterData.count -= amount;
	console.log(event);
};

const resetCounter = () => {
	counterData.count = 0;
};

onBeforeMount(() => {
	console.log('onBeforeMount');
});
onMounted(() => {
	console.log('onMounted');
});
onBeforeUnmount(() => {
	console.log('onBeforeUnmount');
});
onUnmounted(() => {
	console.log('onUnmounted');
});
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
	margin-left: 1rem;
	margin-right: 1rem;
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
