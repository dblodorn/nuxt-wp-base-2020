/* eslint-disable */
import { endpoints } from './../../endpoints.json'

export default {
  async fetchCoreData ({ commit }) {
    const data = await this.$http.$get((process.env.NODE_ENV === 'development') ? endpoints[0].url : `${process.env.BASE_URL}/_nuxt/core-data.json`)
    commit('setOptions', data.options)
    commit('setProjects', data.all_projects)
    const derpy = await this.$http.$get((process.env.NODE_ENV === 'development') ? endpoints[1].url : `${process.env.BASE_URL}/_nuxt/derpy-data.json`)
    commit('setDerpy', derpy)
    await commit('setApiData', true)
  }
}
