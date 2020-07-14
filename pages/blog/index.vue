<template>
  <section class="y-pad-top">
    <h1 class="x-pad-single y-pad-single border-bottom">Blog</h1>
    <thumbnail-link-grid 
      :route="'blog'"
      :thumbnails="data"
    />
  </section>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  asyncData ({ params }) {
    return axios.get(`${process.env.CMS_URL}articles`)
      .then((res) => {
        return { data: res.data }
      })
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
