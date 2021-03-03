<template>
  <div :class="['scene-wrapper', worldLoaded && 'reveal']">
    <div id="nav-container" class="flex-row">
      <button @click="prev" id="prev" class="lozenge-button small"><span>Prev</span></button>
      <button @click="next" id="next" class="lozenge-button small"><span>Next</span></button>
    </div>
    <section id="three-world" ref="threeWorld"/>
  </div>
</template>

<script>
import { startWorld, clearWorld, nextHandler, prevHandler } from './../createThree'

export default {
  layout: 'threelanding',
  data() {
    return {
      worldWrapper: null,
      worldLoaded: false
    }
  },
  mounted() {
    this.worldWrapper = this.$refs.threeWorld
    this.$nextTick(() => {
      setTimeout(() => {
        this.worldLoaded = true
        startWorld(this.worldWrapper)
      }, 50)
    })
  },
  beforeDestroy() {
    clearWorld()
  },
  methods: {
    prev() {
      prevHandler()
    },
    next() {
      nextHandler()
    }
  },
  head () {
    return {
      title: `THREE WORLD | ${process.env.APP_TITLE}`
    }
  }
}
</script>

<style lang="css">
  .scene-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 500ms ease-in;
    will-change: opacity;
  }
  .scene-wrapper.reveal {
    opacity: 1;
  }
  #three-world {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #dbdbdb;
  }
  #nav-container {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 12000;
    width: 100%;
    justify-content: center;
  }
  canvas:focus {
    outline: 0!important;
  }
</style>
