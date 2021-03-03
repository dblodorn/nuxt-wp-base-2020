<template>
    <main id="three-wrapper">
      <nuxt/>
    </main>
</template>

<script>
import debounce from 'lodash/debounce'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      breakpoint: 'screen/breakpoint'
    })
  },
  created () {
    // if(process.env.TARGET === 'server') { this.getData() }
    this.debouncedResize = debounce(this.resize, 50)
  },
  mounted () {
    this.setTouch()
    this.setScreenSize()
    window.addEventListener('resize', this.debouncedResize, { passive: true })
    window.addEventListener('scroll', this.scroll, { passive: true })
    // window.addEventListener('mousemove', this.mouseMove, { passive: true })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.debouncedResize, { passive: true })
    window.removeEventListener('mousemove', this.mouseMove, { passive: true })
    // window.removeEventListener('mousemove', this.mouseMove, { passive: true })
  },
  methods: {
    async resize() {
      const size = await this.setScreenSize()
      this.$nextTick(() => this.$bus.$emit('resize', size))
    },
    async mouseMove({ clientX = 0, clientY = 0 }) {
      await this.setMousePos({ x: clientX, y: clientY })
      this.$bus.$emit('mousemove', { x: clientX, y: clientY })
    },
    scroll() {
      const pos = window.scrollY || document.documentElement.scrollTop
      this.setScroll(pos)
      this.$bus.$emit('scroll', pos)
    },
    toggleMenu() {
      this.menuState = !this.menuState
    },
    ...mapActions({
      // getData: 'getData',
      setTouch: 'screen/setTouch',
      setScreenSize: 'screen/setScreenSize'
    }),
    ...mapMutations({
      setScroll: 'screen/setScroll',
      setMousePos: 'screen/setMousePos'
    })
  }
}
</script>

<style lang="css">
  #three-wrapper {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>