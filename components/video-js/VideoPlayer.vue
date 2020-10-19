<template>
  <div id="video-js" class="video-embed">
    <div :class="['vjs-wrapper absolute-top-full bezier-300', playing && 'show']">
      <video 
        ref="videoPlayer" 
        class="video-js"
        @ended="endedHandler"
        @play="playHandler"
        @loadeddata="loadedHandler"
      >
      </video>
    </div>
    <transition name="fade">
      <div v-if="!playing" :class="['video-loading flex-centered bezier-150']">
        <dots-loader 
          v-if="loader"
          :color="loaderColor"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import videojs from 'video.js'
import DotsLoader from './../DotsLoader'

export default {
  name: "VideoPlayer",
  components: {
    DotsLoader
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
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
    }
  },
  data() {
    return {
      player: null,
      playing: false,
      loaded: false
    }
  },
  methods: {
    playHandler() {
      this.playing = true
      this.startedCallback()
    },
    playMethod() {
      this.player.play()
    },
    endedHandler() {
      this.endedCallback()
    },
    loadedHandler() {
      this.loaded = true
      this.loadedCallback()
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {})
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style>
:root {
  --vjs-control-height: .5rem;
}

.vjs-wrapper {
  opacity: 1;
  z-index: 2;
}
.vjs-wrapper.show {
  opacity: 1;
}
.video-js,
.vjs-poster {
  background-color: var(--epoch-pink)!important;
}
.video-loading {
  display: none;
}

.video-js .vjs-live-control,
.video-js .vjs-seek-to-live-control,
.vjs-seek-to-live-control,
.vjs-seek-to-live-control.vjs-control {
  display: none!important;
}

/* BIG PLAY */
.video-js .vjs-big-play-button {
  border: 0;
  background-color: transparent;
  border-radius: 0; 
  transition: all 0.4s;
  height: 100%;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 0;
  cursor: pointer;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-js .vjs-big-play-button .vjs-icon-placeholder {
  display: none;
}
.video-js.vjs-has-started .vjs-big-play-button {
  opacity: 0;
  pointer-events: none;
}

/* PLAY CONTROL */
.video-js .vjs-play-control {
  visibility: visible;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  text-indent: -9999px;
  overflow: hidden;
  background: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.video-js .vjs-play-control .vjs-control-text,
.video-js .vjs-big-play-button .vjs-control-text {
  width: 100%;
  height: var(--big-size);
  font-family: var(--font-a);
  font-size: var(--big-size);
  line-height: var(--big-size);
  color: var(--white);
  text-transform: uppercase;
  clip: auto;
  text-indent: 0;
}
.vjs-default-skin.vjs-paused .vjs-play-control {
  opacity: 1!important;
}
.video-js .vjs-control:focus {
  text-shadow: var(--transparent);
}

/* CONTROL BAR */
.video-js .vjs-control-bar {
  display: block;
  visibility: hidden;
  opacity: 1;
  transition: visibility .5s, opacity .5s;
}
.video-js:hover .vjs-control-bar {
  visibility: visible;
  opacity: 1;
}
.video-js .vjs-control-bar {
  height: 100%;
  background-color: var(--transparent);
}
.video-js .vjs-slider:focus {
  text-shadow: 0;
  box-shadow: 0;
}
.video-js .vjs-fullscreen-control {
  position: absolute;
  right: 0;
  bottom: 3rem;
  height: .75rem;
}

/* PROGRESS BAR */
.video-js .vjs-progress-control {
  cursor: pointer;
  flex: auto;
  display: flex;
  align-items: center;
  min-width: 4em;
  width: 100%;
  height: var(--vjs-control-height);
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--epoch-lt-blue);
}
.video-js .vjs-progress-control .vjs-progress-holder {
  margin: 0;
  height: var(--vjs-control-height);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
}
.video-js .vjs-slider {
  background: rgba(0,0,0,0);
}
.video-js .vjs-play-progress:before {
  content: '';
  height: 100%;
}
.video-js .vjs-play-progress {
  background-color: var(--epoch-lighter-blue);
}
.video-js .vjs-progress-holder {
  height: 100%;
}

@media (--lg) {
  .video-js .vjs-control-bar {
    opacity: 1;
  }
  .video-js .vjs-big-play-button {
    display: none!important;
  }
  .vjs-big-play-button {
    display: none!important;
  }
  .video-loading {
    display: block;
    z-index: 0;
  }
  .vjs-wrapper {
    opacity: 1;
  }
  .vjs-wrapper.show {
    opacity: 1!important;
  }
}
</style>