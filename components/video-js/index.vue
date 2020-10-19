<template>
	<video-player
    :options="videoOptions"
    :endedCallback="endedCallback"
    :startedCallback="startedCallback"
    :loadedCallback="loadedCallback"
    :loader="loader"
    :loaderColor="loaderColor"
  />
</template>

<script>
import VideoPlayer from "./VideoPlayer.vue"

export default {
	name: "VideoExample",
	components: {
		VideoPlayer
  },
  props: {
    url: {
      type: String,
      required: true
    },
    controls: {
      required: false,
      type: Boolean,
      default: true,
      useDefaultForNull: true
    },
    loop: {
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
    cover: {
      required: false,
      type: [String, Boolean]
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
    loadedCallback: {
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
    autoplay: {
      required: false,
      type: Boolean,
      default: true,
      useDefaultForNull: true
    }
  },
	data() {
		return {
			videoOptions: {
				autoplay: this.autoplay,
        controls: this.controls,
        muted: this.muted,
        loop: this.loop,
        poster: this.cover,
        playsinline: true,
        bigPlayButton: false,
        inactivityTimeout: 500,
        liveTracker: false,
        liveui: false,
        controlBar: {
          playToggle: true,
          volumePanel: false,
          muteToggle: false,
          remainingTimeDisplay: false,
          progressControl: {
            seekBar: {
              loadProgressBar: false,
              mouseTimeDisplay: false,
              playProgressBar: true
            }
          },
          fullscreenToggle: true,
          playbackRateMenuButton: false,
        },
        sources: [
					{
						src:
							this.url,
						  type: "video/mp4"
					}
				]
			}
		}
	}
}
</script>