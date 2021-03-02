<template>
  <fragment>
    <client-only>
      <div id="nav-container" class="flex-row">
        <button @click="prev" id="prev" class="lozenge-button small"><span>Prev</span></button>
        <button @click="next" id="next" class="lozenge-button small"><span>Next</span></button>
      </div>
      <section id="three-world" ref="world"/>
    </client-only>
  </fragment>
</template>

<script>
import { startWorld, clearWorld, nextHandler, prevHandler } from './../createThree'

export default {
  mounted() {
    this.$nextTick(() => {
      const worldWrapper = this.$refs.world
      startWorld(worldWrapper)
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
