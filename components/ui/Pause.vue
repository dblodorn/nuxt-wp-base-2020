<template>
  <div :class="[color, 'pause ui-wrapper']">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="1" transform="translate(0.5 0.5)" :fill="color" :v-bind="color">
        <rect x="2" y="2" width="6" height="20" fill="none" :stroke="color" stroke-miterlimit="10"></rect>
        <rect x="16" y="2" width="6" height="20" fill="none" stroke-miterlimit="10"></rect>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white',
      useDefaultForNull: true
    }
  }
}
</script>