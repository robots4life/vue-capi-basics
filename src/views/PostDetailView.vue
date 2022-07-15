<template>
	<div class="post">
		<h1>Post Detail</h1>
		<p>
			Display the content of post with ID of <strong>{{ $route.params.id }}</strong> here !
		</p>
		<hr />
		<button @click="showPostId" class="btn">Toggle Show / Hide Post ID</button>
		<div v-if="showId" class="post-id">
			<p>Post ID : {{ $route.params.id }}</p>
		</div>
		<hr />
		<RouterLink to="/posts">&lt;&lt; Back</RouterLink>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

let showId = ref(false);

const showPostId = () => {
	showId.value = !showId.value;
	console.log(`The ID of this post is : ${route.params.id}`);
};
</script>
<style scoped>
.post {
	text-align: center;
	padding: 2rem;
}
.btn {
	font-size: 1.5rem;
	padding: 2rem;
	margin-left: 1rem;
	margin-right: 1rem;
}
hr {
	margin-top: 2rem;
	margin-bottom: 2rem;
}
.post-id {
	padding: 1rem;
}
</style>
