<template>
	<div class="post">
		<h1>Post Detail</h1>
		<p>
			Display the content of post with ID of <strong>{{ $route.params.id }}</strong> here !
		</p>
		<hr />
		<button @click="showPostId" class="btn">Show Post ID</button>
		<hr />
		<RouterLink to="/posts">&lt;&lt; Back</RouterLink>
	</div>
</template>

<script setup>
const showPostId = () => {
	console.log('showPostId');
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
</style>
