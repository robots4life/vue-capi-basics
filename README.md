# vue-capi-basics

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Lesson 16 - Two Way Data Binding

<img src="images/lesson-16-2-way-data-binding-v-model-counterTitle.png" />

```html
<h3>{{ counterTitle }}</h3>
```

```html
<div class="edit">
	<h4>Edit counter title:</h4>
	<input v-model="counterTitle" type="text" />
</div>
```

```html
<script setup>
	import { ref } from 'vue';

	const counterTitle = ref('My Counter');
</script>
```

### Lesson 17 - Reactive Objects

Let's say we want to store the `counter` and `counterTitle` in a <strong> Reactive Object </strong> since the data is <strong>RELATED TO EACH OTHER</strong>.

Before

```js
const counter = ref(0);

const counterTitle = ref('My Counter');
```

Setup Reactive Object

```js
const counterData = reactive({
	count: 0,
	title: 'My Counter'
});
```

After

```html
<h3>{{ counterData.title }}</h3>
```

```html
<span class="counter">{{ counterData.count }}</span>
```

```html
<input v-model="counterData.title" type="text" />
```

```js
<script setup>
import { reactive } from 'vue';

// const counter = ref(0); replace with reactive object

// const counterTitle = ref('My Counter'); replace with reactive object

const counterData = reactive({
	count: 0,
	title: 'My Counter'
});

const increaseCounter = () => {
	// counter.value++; replace with reactive object
	counterData.count++;
};

const decreaseCounter = () => {
	// counter.value--; replace with reactive object
	counterData.count--;
};

const resetCounter = () => {
	// counter.value = 0; replace with reactive object
	counterData.count = 0;
};
</script>
```

### Lesson 20 - Pass Parameters To Methods

<strong>Add</strong> a parameter i.e. `(1)` and `(2)` to the `increaseCounter` method

````html
<button @click="increaseCounter(1)" class="btn">+</button>
<button @click="increaseCounter(2)" class="btn">++</button>
```
````

<strong>Receive</strong> the parameter `amount` in the function

```js
const increaseCounter = (amount) => {
	counterData.count += amount;
};
```

#### Access The Event Object On The Button

Use `@event` as a second parameter to the `increaseCounter` method

```html
<button @click="decreaseCounter(2, $event)" class="btn">- -</button>
```

Log the Event Object in the method

```js
const increaseCounter = (amount, event) => {
	counterData.count += amount;
	console.log(event);
};
```

<img src="images/lesson-20-log-the-event-object-on-the-counter-methods.png">

### Lesson 21 - Computed Properties

<strong>Computed Properties are properties which are usually generated based on reactive data which is cached and only updated when their dependencies change.</strong>

In this example the Computer Property `oddOrEven` is based on the computation/calculation of the value of `counterData.count` and the condition in the `computed()` method.

```html
<h4>The Counter Now Shows An {{ oddOrEven }} Number</h4>
```

```js
const oddOrEven = computed(() => {
	if (counterData.count % 2 === 0) {
		return 'Even';
	} else {
		return 'Odd';
	}
});
```
