<template>
	<div class="hero has-background-black is-fullheight">
		<div class="hero-body">
			<clock />
		</div>
	</div>
</template>

<script>
import Clock from "~/components/Clock.vue"

export default {
	name: "Home",
	components: {
		Clock,
	},
}
</script>
