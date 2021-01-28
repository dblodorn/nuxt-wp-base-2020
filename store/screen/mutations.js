export default {
  setTouch(state, touch) {
    state.touch = touch
  },
  setScreenSize(state, { width, height }) {
    state.width = width
    state.height = height
  },
  setMousePos(state, { x, y }) {
    state.mouseX = x
    state.mouseY = y
  },
  setScroll(state, pos) {
    state.scroll = pos
  }
}
