<template>
	<section class="container">
		<p class="clock-face has-text-white has-text-centered">
			{{ this.$store.state.time }}
		</p>
	</section>
</template>

<script>
/*
	TODO: Add some additional informations such as current date and week
*/

export default {
	name: "Clock",
}
</script>

<style scoped>
.clock-face {
	font-size: calc(10vw);
}
</style>
