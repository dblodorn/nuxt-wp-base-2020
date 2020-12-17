<template>
  <section class="pad-single y-pad-top">
    <h1>Flickity Carousel</h1>
    <div class="y-pad-big mw-full center">
      <flickity-component
        :images="data.gallery.images"
      />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import FlickityComponent from '~/components/FlickityComponent'

export default {
  asyncData ({ params }) {
    return axios.get(`${process.env.CMS_URL}options`)
      .then((res) => {
        return { data: res.data }
      })
  },
  components: {
    FlickityComponent
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
