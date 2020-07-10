<template>
  <loading v-if="loading"/>
  <ul v-else class="pad-single y-pad-top">
    <li v-for="post of data.derpy_nav" :key="post.id">
      <n-link class="h1 y-pad-single y-pad-bottom" :to="`/work/${post.slug}`">
        <span v-html="post.title"/>
      </n-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch () {
    if (!this.dataLoaded) {
      this.data = await this.$http.$get(`${process.env.CMS_URL}derpyvision`)
    } else {
      this.data = this.derpy
    }
  },
  data () {
    return {
      data: {}
    }
  },
  computed: {
    ...mapState({
      derpy: state => state.api.derpy,
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
      title: `HELLooo | ${process.env.APP_TITLE}`,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'image', name: 'image', content: `${process.env.BASE_URL}/imgs/derpy-avatar-circle.png` },
      ]
    }
  }
}
</script>
