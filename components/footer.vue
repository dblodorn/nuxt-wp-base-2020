<template>
  <footer class="bg-text y-pad-big x-pad-single">
    <p v-if="loading">Fetching Data...</p>
    <ul v-else>
      <li v-for="link of data.footer_links" :key="link.link_url">
        <a class="h2" :href="link.link_url">
          <span v-html="link.link_title"/>
        </a>
      </li>
    </ul>
  </footer>
</template>

<style>
  footer {
    width: 100%;
    position: relative;
  }
</style>

<script>
import { mapState } from 'vuex'
import { endpoints } from './../endpoints'

export default {
  async fetch () {
    if (!this.dataLoaded) {
      const response = await this.$http.$get(endpoints[0].url)
      this.data = response.options
    } else {
      this.data = this.options
    }
  },
  data () {
    return {
      data: {}
    }
  },
  computed: {
    ...mapState({
      options: state => state.api.options,
      dataLoaded: state => state.api.dataLoaded
    }),
    loading () {
      if (!this.dataLoaded) {
        return this.$fetchState.pending
      } else {
        return false
      }
    }
  }
}
</script>