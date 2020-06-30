export default {
  setTouch({ commit }) {
    const isTouch = 'ontouchstart' in window || 'ontouch' in window
    commit('setTouch', isTouch)
  },
  setScreenSize({ state, commit }) {
    const width = window.innerWidth
    const height = window.innerHeight
    const sameWidth = state.width === width
    const size = { width, height, sameWidth }
    commit('setScreenSize', size)
    return size
  }
}
