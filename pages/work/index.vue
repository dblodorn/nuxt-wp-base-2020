<template>
  <section class="y-pad-top">
    <h1 class="x-pad-single y-pad-single border-bottom">Work</h1>
    <ul class="x-pad-single y-pad-single y-pad-top">
      <li v-for="post of data.derpy_nav" :key="post.id">
        <n-link class="h1 y-pad-single y-pad-bottom" :to="`/work/${post.slug}`">
          <span v-html="post.title"/>
        </n-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  asyncData ({ params }) {
    return axios.get(`${process.env.CMS_URL}derpyvision`)
      .then((res) => {
        return { data: res.data }
      })
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
