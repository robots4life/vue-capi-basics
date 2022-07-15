<template>
	<div class="posts">
		<h1>Posts</h1>
		<ul>
			<li>
				<RouterLink to="/post/id1">Post 1</RouterLink>
			</li>
			<li>
				<RouterLink to="/post/id2">Post 2</RouterLink>
			</li>
			<li>
				<RouterLink to="/post/id3">Post 3</RouterLink>
			</li>
		</ul>
	</div>
</template>

<style>
.posts {
	text-align: center;
	padding: 2rem;
}
ul {
	margin: 0;
	padding: 0;
}
li {
	list-style-type: none;
}
</style>
