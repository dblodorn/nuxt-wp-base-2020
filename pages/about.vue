<template>
  <section class="pad-single y-pad-top inner-page">
    <h1>ABOUT</h1>
    <article class="y-pad-big wysiwig center mw-med" v-html="data.intro"/>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params }) {
    return axios.get(`${process.env.CMS_URL}options`)
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
