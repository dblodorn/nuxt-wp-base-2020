<template>
  <div class="video-embed">
    <client-only>
      <youtube 
        :player-vars="params"
        :video-id="youtubeId"
        :player-width="'100%'"
        :player-height="'100%'"
        :mute="muted"
        >
      </youtube>
    </client-only>
  </div>
</template>

<script>

export default {
  props: {
    url: {
      required: false,
			type: String
    },
		autoplay: {
			required: false,
			type: Boolean
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
  data() {
    return {
      params: { 
        autoplay: this.autoplay ? 1 : 0,
        controls: this.controls ? 1 : 0,
        loop: this.loops ? 1 : 0,
        showinfo: 0,
        modestbranding: 1,
        rel: 0,
        playsinline: 1
      }
    }
  },
  computed: {
    youtubeId() {
      return this.$youtubeParser(this.url)
    }
  }
}
</script>
