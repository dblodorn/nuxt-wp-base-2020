<template>
  <div id="simple-video" class="video-embed">
    <div :class="['video-inner bezier-500', loaded && 'show']">
      <video 
        ref="vid" 
        playsinline
        autoplay
        controlsList="nodownload"
        fullscreen
        :muted="muted"
        :poster="cover"
        :loop="loop"
        @ended="endedHandler"
        @play="playHandler"
        @loadeddata="loadedHandler"
      >
        <source :src="url" type="video/mp4"/>
      </video>
    </div>
    <transition name="fade">
      <div v-if="!playing" :class="['video-loading flex-centered bezier-500']">
        <dots-loader 
          v-if="loader"
          :color="loaderColor"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SimpleVideo',
  props: {
    loop: {
      required: false,
      type: Boolean,
      default: false,
      useDefaultForNull: true
    },
    url: {
      type: String,
      required: true
    },
    muted: {
      required: false,
      type: Boolean,
      default: false,
      useDefaultForNull: true
    },
    loadedCallback: {
      type: Function,
      default: () => {},
      useDefaultForNull: true
    },
    startedCallback: {
      type: Function,
      default: () => {},
      useDefaultForNull: true
    },
    endedCallback: {
      type: Function,
      default: () => {},
      useDefaultForNull: true
    },
    loader: {
      required: false,
      type: Boolean,
      default: true,
      useDefaultForNull: true
    },
    loaderColor: {
      required: false,
      type: String,
      default: '#ffffff',
      useDefaultForNull: true
    },
    cover: {
      required: false,
      type: [String, Boolean]
    }
  },
  data() {
    return {
      playing: false,
      loaded: false
    };
  },
  methods: {
    playHandler() {
      this.playing = true
      this.startedCallback()
    },
    endedHandler() {
      this.endedCallback()
    },
    loadedHandler() {
      this.loadedCallback()
      this.loaded = true
    }
  }
}
</script>

<style>
.video-inner,
.video-loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  opacity: 1;
}
.video-inner {
  opacity: 0;
  pointer-events: none;
  z-index: 100;
}
.video-loading {
  z-index: 0;
}
.video-loading.hide {
  opacity: 0;
  pointer-events: none;
}
.video-inner.show {
  opacity: 1;
  pointer-events: all;
}
</style>