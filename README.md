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
