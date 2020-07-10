export default {
  setOptions (state, data = {}) {
    state.options = data
  },
  setProjects (state, data = []) {
    state.projects = data
  },
  setDerpy (state, data = {}) {
    state.derpy = data
  },
  setArticles (state, data = {}) {
    state.articles = data
  },
  setApiData (state, bool = false) {
    state.dataLoaded = bool
  }
}
