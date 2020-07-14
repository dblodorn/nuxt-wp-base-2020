<template>
  <section class="pad-single y-pad-top">
    <h1>CONTACT</h1>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params }) {
    return axios.get(`${process.env.CMS_URL}derpyvision`)
      .then((res) => {
        return { data: res.data }
      })
  },
  head () {
    return {
      title: `WAZZUP | ${process.env.APP_TITLE}`,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'image', name: 'image', content: `${process.env.BASE_URL}/imgs/derpy-avatar-circle.png` },
      ]
    }
  }
}
</script>
