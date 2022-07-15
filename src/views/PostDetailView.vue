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
		<button class="btn" @click="goHomeIn1Seconds">Go Home in 1 Second</button>
		<hr />
		<button class="btn" @click="gotoFirstPost">Go To First Post</button>
		<hr />
		<RouterLink to="/posts">&lt;&lt; Back</RouterLink>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

let showId = ref(false);

const showPostId = () => {
	showId.value = !showId.value;
	console.log(`The ID of this post is : ${route.params.id}`);
};

const goHomeIn1Seconds = () => {
	setTimeout(() => {
		//
		// router.push('/');
		//
		// an alternative to declaring the router path directly is to use the name
		router.push({
			name: 'home'
		});
	}, 1000);
};

const gotoFirstPost = () => {
	router.push({
		name: 'post',
		params: {
			id: 'id1'
		}
	});
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
	margin-top: 1rem;
	border: 1px solid black;
	text-align: center;
}
</style>
