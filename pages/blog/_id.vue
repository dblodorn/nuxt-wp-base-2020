<template>
  <article class="p flex-row-wrap x-pad-single y-pad-double mw-lg" v-html="post.content"/>
</template>

<script>
import axios from 'axios'
import getPostData from './../../scripts/getPostData'

export default {
  asyncData ({ params }) {
    return axios.get(`${process.env.CMS_URL}article/?name=${params.id}`)
      .then((res) => {
        return { post: res.data }
      })
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
