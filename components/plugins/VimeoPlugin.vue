<template>
	<div class="video-embed">
		<client-only>
			<vimeo-player 
				ref="player" 
				:video-id="vimeoId"
				:options="options"
				:controls="controls"
        :loop="loops"
				@ready="onReady"
			>
			</vimeo-player>
		</client-only>
	</div>
</template>

<script>
export default {
	name: 'Vimeo',
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
			default: true,
      useDefaultForNull: true
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
			options: {
				muted: this.muted,
	      autoplay: this.autoplay,
			},
			playerReady: false
		}
	},
	methods: {
		onReady() {
			this.playerReady = true
		},
		play() {
			this.$refs.player.play()
		},
		pause () {
			this.$refs.player.pause()
		}
	},
	computed: {
    vimeoId() {
			return this.$vimeoParser(this.url)
    }
  }
}
</script>
