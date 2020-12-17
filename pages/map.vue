<template>
  <section class="mw-xl center flex-column y-pad-big">
    <client-only>
      <contact-map
        :mapLink="data.map.map_link"
        :latitude="data.map.latitude"
        :longitude="data.map.longitude"
        :iconImg="data.map.icon"
        :zoomInt="data.map.zoom"
      />
    </client-only>
  </section>
</template>

<script>
import axios from 'axios'
import ContactMap from '~/components/contact-map'

export default {
  components: { ContactMap },
  asyncData ({ params }) {
    return axios.get(`${process.env.CMS_URL}options`)
      .then((res) => {
        return { data: res.data }
      })
  },
  head () {
    return {
      title: `MAP | ${process.env.APP_TITLE}`,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'image', name: 'image', content: `${process.env.BASE_URL}/imgs/derpy-avatar-circle.png` },
      ]
    }
  }
}
</script>

<style lang="css">
  .contact-item {
    width: calc(100% / 3);
  }
  .contact-item * {
    text-decoration: none;
    color: var(--black);
  }
  .social-link-item {
    width: 4rem;
    height: 4rem;
    position: relative;
    margin: 0 calc(var(--pad-single) / 1.5);
  }
</style>