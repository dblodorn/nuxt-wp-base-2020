<template>
  <article class="project-wrapper responsive-grid sm-col-1 md-col-1 lg-col-2">
    <section class="pad-single">
      <h1 class="mw-sm">{{ post.title }}</h1>
    </section>
  </article>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import getPostData from './../../scripts/getPostData'

export default {
  asyncData ({ params }) {
    return axios.get(`${process.env.CMS_URL}project/?name=${params.id}`)
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
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.title }
      ]
    }
  }
}
</script>
