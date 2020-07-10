<template>
  <div v-if="loading">Fetching Data...</div>
  <article v-else class="p flex-row-wrap x-pad-single y-pad-double mw-lg" v-html="post.content"/>
</template>

<script>
import { mapState } from 'vuex'
import getPostData from './../../scripts/getPostData'

export default {
  async fetch () {
    try {
      if (!this.dataLoaded) {
        this.post = await this.$http.$get(`${process.env.CMS_URL}article/?name=${this.$route.params.id}`)
      } else {
        this.post = getPostData(this.$route.params.id, this.articles)
      }
    } catch (error) {
      this.error = error.message
    }
  },
  data () {
    return {
      post: {},
      error: false
    }
  },
  watch: {
    error: 'errorRedirect'
  },
  methods: {
    errorRedirect() {
      if (this.error) {
        this.$router.push('/404')
      }
    }
  },
  computed: {
    ...mapState({
      articles: state => state.api.articles,
      dataLoaded: state => state.api.dataLoaded
    }),
    loading () {
      if (!this.dataLoaded) {
        return this.$fetchState.pending
      } else {
        return false
      }
    }
  },
  head () {
    return {
      title: `BLOG | ${this.post.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.post.title }
      ]
    }
  }
}
</script>
