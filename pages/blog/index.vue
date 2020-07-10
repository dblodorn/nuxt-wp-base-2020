<template>
  <loading v-if="loading"/>
  <section v-else class="y-pad-top">
    <h1 class="x-pad-single y-pad-single border-bottom">Blog</h1>
    <ul class="x-pad-single y-pad-single y-pad-top">
      <li v-for="post of data" :key="post.id">
        <n-link class="h1 y-pad-single y-pad-bottom" :to="`/blog/${post.slug}`">
          <span v-html="post.title"/>
        </n-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch () {
    if (!this.dataLoaded) {
      this.data = await this.$http.$get(`${process.env.CMS_URL}articles`)
    } else {
      this.data = this.articles
    }
  },
  data () {
    return {
      data: []
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
      title: `BLOG | ${process.env.APP_TITLE}`,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'image', name: 'image', content: `${process.env.BASE_URL}/imgs/derpy-avatar-circle.png` },
      ]
    }
  }
}
</script>
