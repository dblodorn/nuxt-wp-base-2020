<template>
  <button 
    :class="['video-poster-wrapper video-poster bezier-150', videoPlaying && 'hide']" 
    @click="play"
  >
    <div class="play-wrapper absolute-centered">
      <Play :strokeWidth="0.5"/>
    </div>
    <img :src="posterImage">
  </button>
</template>

<script>
import Play from '~/components/ui/Play'

export default {
  name: 'VideoPoster',
  components: {
    Play
  },
  props: [
    'videoPlaying',
    'play',
    'posterImage'
  ]
}
</script>

<style scoped>
.video-poster-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: 1;
}
.video-poster-wrapper.hide {
  opacity: 0;
  pointer-events: none;
}
.video-poster-wrapper img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
}
.play-wrapper {
  width: 10rem;
  height: 10rem;
  z-index: 10;
}
</style>