<template>
	<div class="post">
		<h1>Post Detail</h1>
		<p>Display the content of post with ID of {{ $route.params.id }} here !</p>
	</div>
</template>

<style scoped>
.post {
	text-align: center;
	padding: 2rem;
}
</style>
