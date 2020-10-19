<template>
  <section class="pad-single y-pad-top">
    <h1>Video Players</h1>   
    <div class="y-pad-big mw-xl center">
      <div 
        class="y-pad-big y-pad-bottom"
        v-for="video in data.video_repeater"
        :key="video.url"
      >
        <video-player 
          :type="video.type"
          :url="video.url"
          :cover="video.cover"
          :autoplay="video.autoplay"
          :controls="video.controls"
          :muted="video.muted"
          :loops="video.loops"
        />
      </div>
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
