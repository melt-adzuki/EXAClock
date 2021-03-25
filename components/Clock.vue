<template>
	<section class="container">
		<p class="clock-face has-text-white has-text-centered">{{ time }}</p>
	</section>
</template>

<script>
/*
	TODO: Add some additional informations such as current date and week
*/

export default {
	name: "Clock",
	data() {
		return {
			time: "",
			date: new Date(),
		}
	},
	mounted() {
		this.scheduleUpdate()
	},
	methods: {
		// Method: Schedule update of the clock
		scheduleUpdate() {
			// Enchant the beginning point to set interval to be started at the milliseconds is "00"
			setTimeout(() => {
				this.updateTime()
				setInterval(this.updateTime, 1000) // Update every seconds
			}, (60 - this.date.getSeconds()) * 10) // Distance between current and the time should be started
		},
		// Method: Replace the clock with the current time
		updateTime() {
			this.date = new Date()
			this.time = this.getFormattedTime(
				this.date.getHours(),
				this.date.getMinutes(),
				this.date.getSeconds()
			)
		},
		// Method: Return a formatted string like "12:34:56"
		getFormattedTime(hours, minutes, seconds) {
			return `${hours
				.toString()
				.padStart(2, "0")}:${minutes
				.toString()
				.padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
		},
	},
}
</script>

<style scoped>
.clock-face {
	font-size: calc(10vw);
}
</style>
