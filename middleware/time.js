import AccurateInterval from "accurate-interval"
import DateFormat from "date-format"

export default function ({ store }) {
	AccurateInterval(
		() => {
			store.commit("updateTime", DateFormat("hh:mm:ss", new Date()))
		},
		1000,
		{ aligned: true, immediate: true }
	)
}
