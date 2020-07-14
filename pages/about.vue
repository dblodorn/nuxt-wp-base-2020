<template>
  <loading v-if="loading"/>
  <section v-else class="pad-single y-pad-top inner-page">
    <h1>ABOUT</h1>
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
      title: `${process.env.APP_TITLE}`,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'image', name: 'image', content: `${process.env.BASE_URL}/imgs/derpy-avatar-circle.png` },
      ]
    }
  }
}
</script>
