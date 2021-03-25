export const state = () => ({
	time: "",
})

export const mutations = {
	updateTime(state, date) {
		state.time = date
	},
}
