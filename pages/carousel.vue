<template>
  <section class="pad-single y-pad-top">
    <h1>Carousel</h1>
    <div class="y-pad-big mw-xl center">
      <slide-show 
        :slides="data.gallery.images"
        :controls="data.gallery.controls"
        :pagination="data.gallery.bullets"
        :image_fit="data.gallery.image_fit"
        :autoplay="data.gallery.autoplay"
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
