<template>
  <div :class="['video-player', location]">
	  <div class="video-player-sizer">
      <vimeo-plugin 
        v-if="type === 'vimeo'"
        :url="url"
        :controls="controls"
        :loop="loop"
        :autoplay="autoplay"
        :muted="muted"
        :endedCallback="endedCallback"
        :startedCallback="startedCallback"
        :loadedCallback="loadedCallback"
        :loader="loader"
        :loaderColor="loaderColor"
      />
      <simple-video 
        v-else-if="type === 'simple'"
        :url="url"
        :cover="cover"
        :controls="controls"
        :loop="loop"
        :autoplay="autoplay"
        :muted="muted"
        :endedCallback="endedCallback"
        :startedCallback="startedCallback"
        :loadedCallback="loadedCallback"
        :loader="loader"
        :loaderColor="loaderColor"
      />
      <video-js 
        v-else
        :url="url"
        :cover="cover"
        :controls="controls"
        :loop="loop"
        :autoplay="autoplay"
        :muted="muted"
        :endedCallback="endedCallback"
        :startedCallback="startedCallback"
        :loadedCallback="loadedCallback"
        :loader="loader"
        :loaderColor="loaderColor"
      />
	  </div>
  </div>
</template>



<script>
import VimeoPlugin from './VimeoPlugin'
import SimpleVideo from './SimpleVideo'
import VideoJs from './video-js'

export default {
  name: 'VideoPlayer',
  components: {
    VimeoPlugin,
    SimpleVideo,
    VideoJs
  },
  props: {
    type: {
      required: false,
      type: [String, Boolean],
      default: 'html',
      useDefaultForNull: true
    },
    url: {
      required: false,
			type: String
    },
    cover: {
      required: false,
      type: [String, Boolean]
    },
    controls: {
      required: false,
      type: Boolean,
      default: true,
      useDefaultForNull: true
    },
    autoplay: {
      required: false,
      type: Boolean,
      default: true,
      useDefaultForNull: true
    },
    muted: {
      required: false,
      type: Boolean,
      default: false,
      useDefaultForNull: true
    },
    loop: {
      required: false,
      type: Boolean,
      default: false,
      useDefaultForNull: true
    },
    location: {
      type: String,
      default: 'project',
      useDefaultForNull: true
    },
    startedCallback: {
      type: Function,
      default: () => {},
      useDefaultForNull: true
    },
    loadedCallback: {
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
  }
}
</script>
