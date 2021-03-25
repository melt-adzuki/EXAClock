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
			time: "00:00:00",
		}
	},
	mounted() {
		console.log(process.server)
		/*
			TODO: this.time = 一度だけAPIから時間を取得する
			TODO: setInterval(() => this.time = 取得した時間に+1秒, 1000)
		*/
	},
	methods: {
		// Method: Return a formatted string like "12:34:56"
		getFormattedTime(date) {
			const hours = date.getHours()
			const minutes = date.getMinutes()
			const seconds = date.getSeconds()

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
