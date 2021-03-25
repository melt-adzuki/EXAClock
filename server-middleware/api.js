import NtpTimeSync from "ntp-time-sync"

export default function (req, res, next) {
	const timeSync = NtpTimeSync.getInstance({
		servers: [
			"ntp1.jst.mfeed.ad.jp",
			"ntp2.jst.mfeed.ad.jp",
			"ntp3.jst.mfeed.ad.jp",
		],
	})

	timeSync.getTime().then(result => {
		const time = result.now
		console.log(time)
		// TODO: APIに乗せて送信する
	})

	next()
}
