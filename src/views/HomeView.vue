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
<!-- <script>
import { ref } from 'vue';

export default {
	setup() {
		// everything will go inside this setup() function
		// later we will use the superior script setup
		//
		// there are 2 types of reactive data, there are refs and reactive objects
		//
		// reactive API LIMITATIONS !!
		// https://vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive
		// It only works for object types (objects, arrays, and collection types such as Map and Set).
		// It cannot hold primitive types such as string, number or boolean.
		//
		// for primitive types use ref()
		//
		// click on ref to auto import the module like seen here => https://youtu.be/V-kxBWcPJfo?t=799
		const counter = ref(0);
		//
		// create NAMED functions for the increaseCounter, decreaseCounter and resetCounter METHODS and RETURN them finally
		//
		const increaseCounter = () => {
			counter.value++;
		};

		const decreaseCounter = () => {
			counter.value--;
		};

		const resetCounter = () => {
			counter.value = 0;
		};

		return {
			counter,
			increaseCounter,
			decreaseCounter,
			resetCounter
		};
	}
};
</script> -->

<!-- https://vuejs.org/api/sfc-script-setup.html -->
<!-- SCRIPT SETUP -->
<!-- There no need to return the methods or values any more as well ;) -->
<script setup>
import { ref } from 'vue';

const counter = ref(0);

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
</style>
