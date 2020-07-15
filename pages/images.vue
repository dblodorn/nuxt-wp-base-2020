<template>
  <section class="pad-single y-pad-top">
    <h1>Images</h1>
    <div class="y-pad-big mw-full center">
      <image-grid 
        :images="data.gallery.images"
        :image_fit="data.gallery.image_fit"
      />
    </div>
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
