<template>
	<div class="video-embed vimeo-embed">
		<client-only>
			<div :class="['vimeo-wrapper bezier-300', 'show']">
				<vimeo-player 
					ref="player" 
					:video-id="$vimeoParser(url)"
					:options="options"
					:controls="controls"
					:loop="loops"
					:player-width="'100%'"
					:player-height="'100%'"
					@ready="onReady"
					@play="onPlay"
					@ended="onEnded"
				>
				</vimeo-player>
			</div>
			<transition name="fade">
				<div v-if="!playing" :class="['video-loading flex-centered bezier-500']">
					<dots-loader/>
				</div>
			</transition>
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
    },
    endedCallback: {
      type: Function,
      default: () => {},
      useDefaultForNull: true
    }
	},
	data() {
		return {
			options: {
				muted: false,
	      autoplay: true,
			},
			loaded: false,
			playing: false
		}
	},
	methods: {
		onReady() {
			this.loaded = true
		},
		onPlay() {
			this.playing = true
		},
		onEnded() {
			this.endedCallback()
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
