<template>
  <div 
    id="viewport-wrapper"
    class="viewport-wrapper" 
    :style="`height: ${height}px; z-index: ${zIndex};`"
  >
    <slot/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    zIndex: {
      required: false,
      type: Number,
      default: 0,
      useDefaultForNull: true
    }
  },
  computed: {
    ...mapState({
      height: state => state.screen.height
    }),
  }
}
</script>

<style>
.viewport-wrapper {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
}
@media (--lg) {
  .viewport-wrapper {
    min-height: 100vh;
  }
}
</style>