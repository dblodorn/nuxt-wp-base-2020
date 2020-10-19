<template>
  <div class="loader-container flex-centered">
    <style>
      :root {
        --dotsLoaderTime: {{`${animationTime}ms`}};
      }
    </style>
    <div class="loader-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
        <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" :fill="color" :stroke="color">
          <g class="nc-loop_dots-07-24">
            <circle id="dot-c" :fill="color" :stroke="color" stroke-miterlimit="10" cx="12" cy="13" r="2"></circle>
            <circle id="dot-b" :fill="color" :stroke="color" stroke-miterlimit="10" cx="3" cy="13" r="2"></circle>
            <circle id="dot-a" :fill="color" :stroke="color" stroke-miterlimit="10" cx="21" cy="13" r="2"></circle>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "DotsLoader",
  props: {
    color: {
      required: false,
      type: String,
      default: '#ffffff',
      useDefaultForNull: true
    },
    animationTime: {
      required: false,
      type: Number,
      default: 750,
      useDefaultForNull: true
    }
  },
}
</script>

<style>
@keyframes dotsLoaderAnimation {
  0% {
    opacity: .25;
  }
  50%{ 
    opacity: 1;
  }
  100% { 
    opacity: .25;
  }
}
.dots-loader-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
}
.dots-loader-wrapper {
  width: 4rem;
}
.dots-loader-wrapper svg {
  width: 100%;
}
#dot-a,
#dot-b,
#dot-c {
  animation: dotsLoaderAnimation 750ms infinite ease-in-out;
}
#dot-b {
  animation-delay: 250ms;
}
#dot-c {
  animation-delay: 500ms;
}
@media (--lg) {
  .dots-loader-wrapper {
    width: 6rem;
  }
}
</style>
