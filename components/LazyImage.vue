<template>
  <div
    :class="['lazy-image-wrapper', !fixedHeight ? 'proportion' : 'fixed']"
    :style="!fixedHeight && `padding-bottom: ${proportion};`"
  >
    <img 
      :class="[{ 'show-image' : loaded }, 'lazy-image absolute-centered']" 
      :style="`object-fit: ${fit};`"
      :src="srcImage" 
      v-on:load="imgLoaded" 
      ref="image"
      :alt="altTag"
    />
  </div>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      default: '',
      useDefaultForNull: true
    },
    fit: {
      type: String,
      default: 'cover',
      useDefaultForNull: true
    },
    fixedHeight: {
      type: Boolean,
      default: true,
      useDefaultForNull: true
    },
    altTag: {
      type: String,
      default: `${process.env.APP_TITLE}`,
      useDefaultForNull: true
    }
  },
  data () {
    return {
      loaded: false,
      observer: null,
      intersected: false,
      proportion: '100%'
    }
  },
  computed: {
    srcImage () {
      return this.intersected ? this.src : ''
    }
  },
  mounted () {
    const config = {
      root: null,
      rootMargin: '10px',
      threshold: 0
    }
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0]
      if (image.isIntersecting) {
        this.intersected = true
        this.observer.disconnect()
      }
    }, config)
    this.observer.observe(this.$el)
  },
  destroyed () {
    this.observer.disconnect()
  },
  methods: {
    imgLoaded () {
      this.loaded = true
      this.proportion = `${this.$refs.image.naturalHeight / this.$refs.image.naturalWidth * 100}%`
    }
  }
}
</script>

<style scoped>
.lazy-image-wrapper {
  position: relative;
  width: 100%;
  background-color: var(--white);
}
.lazy-image-wrapper.fixed {
  height: 100%;
}
.lazy-image-wrapper.proportion {
  height: 0;
}
.lazy-image {
  width: 100%;
  height: 100%;
  opacity: 0;
  will-change: opacity;
  transition: opacity 150ms cubic-bezier(.49,.39,.89,.58);
  z-index: 10;
}
.lazy-image.show-image {
  opacity: 1;
}
</style>
