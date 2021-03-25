<template>
	<main :class="class_main">
		<nuxt />
	</main>
</template>

<script>
export default {
	data() {
		return {
			class_main: "has-cursor-hidden",
		}
	},
	mounted() {
		let timeout = false
		window.addEventListener("mousemove", () => {
			this.class_main = ""
			if (timeout) clearTimeout(timeout)

			timeout = setTimeout(() => (this.class_main = "has-cursor-hidden"), 1000)
		})
	},
}
</script>

<style>
body::-webkit-scrollbar {
	display: none;
}

.has-cursor-hidden {
	cursor: none;
}
</style>
