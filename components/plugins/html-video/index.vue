<template>
  <div class="video-embed">
    <div class="video-wrapper">
      <video 
        ref="vid" 
        playsinline
        controlsList="nodownload"
        :loop="loops"
        :muted="muted"
        @click="playOrPause"
        @ended="stopHandler"
        @play="play"
        @loadedmetadata="loadedMetaHandler"
        @loadeddata="loadedHandler"
      >
        <source
          :src="url"
          :poster="cover"
          type="video/mp4"
        />
      </video>
      <div
        class="seekbar-wrap"
        v-if="controls && videoPlaying"
        @mousedown="grabSeekbar"
        @touchstart="grabSeekbar"
        @touchmove="moveSeekbar"
        @touchend="releaseSeekbar"
      >
        <div
          class="seekbar-current" 
          ref="seekbar"
          :style='`transform: scaleX(${getProgressRate})`'
        />
      </div>
      <VideoControls
        v-if="controls"
        :getDuration="getDuration"
        :getCurrentTime="getCurrentTime"
        :videoPlaying="videoPlaying"
        :playOrPause="playOrPause"
        :started="started"
        :ended="ended"
        :stop="stopHandler"
      />
    </div>
  </div>
</template>



<script>
import { mapState, mapMutations } from 'vuex'
import { breakpoints } from '~/globals'
import VideoControls from './VideoControls'

export default {
  name: 'VideoPlayer',
  props: {
    url: {
      required: true,
      type: String
    },
		autoplay: {
			required: false,
			type: Boolean
		},
    cover: {
      type: String
    },
		controls: {
			required: false,
			type: Boolean,
			default: false,
      useDefaultForNull: true
    },
    muted: {
			required: false,
			type: Boolean,
			default: false,
      useDefaultForNull: true
    },
    loops: {
			required: false,
			type: Boolean,
			default: false,
      useDefaultForNull: true
    }
  },
  components: {
    VideoControls
  },
  data() {
    return {
      started: false,
      paused: false,
      ended: false,
      loaded: false,
      videoPlaying: false,
      videoTimer: null,
      seekbar: null,
      seekbarWidth: 0,
      seekbarOffsetX: 0,
      time: 0,
      duration: 0,
      isGrabbingSeekbar: false,
      animateID: undefined,
      interactions: 0
    };
  },
  beforeDestroy() {
    clearTimeout(this.videoTimer)
    if (this.animateID) {
      window.cancelAnimationFrame(this.animateID)
      this.animateID = undefined
    }
  },
  mounted() {
    this.$nextTick(() => { 
      (this.autoplay && this.$refs.vid !== undefined) && this.play()
    })
  },
  methods: {
    play() {
      this.$refs.vid.play()
      this.loop()
      this.videoPlaying = true
      this.started = true
      this.ended = false
    },
    stopHandler() {
      this.$refs.vid.pause()
      this.paused = true
      this.videoPlaying = false
      this.ended = true
      this.$refs.vid.currentTime = 0
    },
    loadedHandler() {
      this.loaded = true
    },
    loadedMetaHandler() {
      this.duration = this.$refs.vid.duration
    },
    playOrPause() {
      if (this.videoPlaying) {
        this.$refs.vid.pause()
        this.videoPlaying = false
        this.paused = true
      } else {
        this.play()
      }
    },
    // SEEKBAR
    loop() {
      this.time = this.$refs.vid.currentTime
      if (!this.videoPlaying) return
      this.animateID = requestAnimationFrame(() => {
        this.loop()
      });
    },
    grabSeekbar(event) {
      event.preventDefault()
      this.isGrabbingSeekbar = true
      this.time = this.$refs.vid.currentTime = event.layerX / this.seekbarWidth * this.duration
      this.$refs.vid.pause()
    },
    moveSeekbar(event) {
      event.preventDefault()
      if (!this.isGrabbingSeekbar) return;
      this.time = this.$refs.vid.currentTime =
        (event.clientX - this.seekbarOffsetX - window.pageXOffset)
        / this.seekbarWidth * this.duration;
    },
    releaseSeekbar(event) {
      event.preventDefault()
      this.isGrabbingSeekbar = false;
      if (this.videoPlaying) {
        this.$refs.vid.play()
      }
    },
    reLayoutSeekbar() {
      this.seekbarWidth = this.$refs.seekbar.clientWidth
      this.seekbarOffsetX = this.$refs.seekbar.getBoundingClientRect().left
    },
    convertSecondsToTime(time) {
      let seconds = Math.floor(time % 60)
      if (seconds < 10) seconds = '0' + seconds
      let minutes = Math.floor(time / 60 % 60)
      return `${minutes}:${seconds}`
    }
  },
  computed: {
    getProgressRate() {
      return this.time / this.duration;
    },
    getCurrentTime() {
      return this.convertSecondsToTime(this.time);
    },
    getDuration() {
      return this.convertSecondsToTime(this.duration);
    }
  }
}
</script>

<style>
.seekbar-wrap {
  width: 100%;
  position: absolute;
  bottom: -3px;
  left: 0;
  z-index: 1000;
  height: 4px;
  background-color: var(--white);
}
.seekbar-current,
.seekbar-back {
  height: 4px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
.seekbar-current {
  z-index: 2;
  background-color: var(--black);
  transform: scaleX(0);
  transform-origin: left;
}
</style>