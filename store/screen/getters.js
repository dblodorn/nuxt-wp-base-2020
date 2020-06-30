import findKey from 'lodash/findKey'
import { screens } from '~/globals.json'

export default {
  breakpoint: state => {
    const width = state.width
    const breakpoints = {}
    Object.keys(screens).map(bp => {
      breakpoints[bp] = width >= screens[bp]
    })
    return breakpoints
  },
  currentBreakpoint(state, getters) {
    const breakpoints = getters.breakpoint
    const active = Object.keys(breakpoints)
      .filter(bp => breakpoints[bp] === true)
      .map(bp => screens[bp])
    let current
    if (active.length) {
      const widest = active.reduce((a, b) => {
        return Math.max(a, b)
      })
      current = findKey(screens, bp => bp === widest)
    }
    return current
  }
}
