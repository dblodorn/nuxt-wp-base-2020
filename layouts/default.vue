<template>
  <fragment>
    <transition name="fade">
      <main-menu 
        v-if="menuState"
        :closeHandler="toggleMenu"
        v-scroll-lock="menuState"
      />
    </transition>
    <app-header
      :menuHandler="toggleMenu"
    />
    <breadcrumbs/>
    <main class="page-wrapper">
      <nuxt />
    </main>
    <app-footer />
  </fragment>
</template>

<script>
import debounce from 'lodash/debounce'
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import MainMenu from '@/components/MainMenu'

export default {
  components: {
    AppHeader,
    AppFooter,
    MainMenu
  },
  computed: {
    ...mapGetters({
      breakpoint: 'screen/breakpoint'
    })
  },
  data() {
    return {
      menuState: false
    }
  },
  created () {
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
    // Console Globals
    console.log(this.$global)
    // Fire Netlify Function
     // this.lambdaTest()
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
    /*
    async lambdaTest() {
      try {
        const res = await this.$axios.$get('/.netlify/functions/hello')
        console.log('NETLIFY FUNCTION::', res)
      } catch (e) {
        console.log('NETLIFY FUNCTION::', e.response)
      }
    },
    */
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
      this.setMousePos({ x: pageX, y: pageY })
      this.$bus.$emit('mousemove', { x: pageX, y: pageY })
    },
    toggleMenu() {
      this.menuState = !this.menuState
    },
    ...mapActions({
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
