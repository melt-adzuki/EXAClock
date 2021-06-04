import AccurateInterval from "accurate-interval"
import DateFormat from "date-format"

export default function ({ store, query }) {
	const format = query.accurate === "1" ? "hh:mm:ss.SSS" : "hh:mm:ss"
	const interval = query.accurate === "1" ? 1 : 1000

	AccurateInterval(
		() => {
			store.commit("updateTime", DateFormat(format, new Date()))
		},
		interval,
		{ aligned: true, immediate: true }
	)
}
