<template>
  <div>
    <Header />
    <main class="page-wrapper">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState({
      intro: state => state.screen.intro
    }),
    ...mapGetters({
      breakpoint: 'screen/breakpoint'
    })
  },
  created () {
    this.fetchCoreData()
    this.debouncedResize = debounce(this.resize, 50)
  },
  mounted () {
    this.setTouch()
    this.setScreenSize()
    window.addEventListener('resize', this.debouncedResize, { passive: true })
    window.addEventListener('orientationchange', this.debouncedResize)
    window.addEventListener('scroll', this.scroll, { passive: true })
    window.addEventListener('mousemove', this.mouseMove, { passive: true })
    // EVENT BUS INFO
    /*
    this.$bus.$on('scroll', (event) => {
      console.log(event)
    })
    */
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.debouncedResize, {
      passive: true
    })
    window.removeEventListener('orientationchange', this.debouncedResize)
    window.removeEventListener('scroll', this.scroll, {
      passive: true
    })
    window.removeEventListener('mousemove', this.mouseMove, { passive: true })
  },
  methods: {
    async resize() {
      const size = await this.setScreenSize()
      this.$nextTick(() => this.$bus.$emit('resize', size))
    },
    scroll() {
      const pos = window.scrollY || document.documentElement.scrollTop
      this.setScroll(pos)
      this.$bus.$emit('scroll', pos)
    },
    mouseMove({ pageX = 0, pageY = 0 }) {
      this.$bus.$emit('mousemove', { x: pageX, y: pageY })
    },
    ...mapActions({
      fetchCoreData: 'api/fetchCoreData',
      setTouch: 'screen/setTouch',
      setScreenSize: 'screen/setScreenSize'
    }),
    ...mapMutations({
      setScroll: 'screen/setScroll',
      hideIntro: 'screen/hideIntro'
    })
  }
}
</script>
