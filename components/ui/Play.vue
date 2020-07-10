<template>
  <div :class="[color, 'ui-wrapper']">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g stroke-linecap="square" stroke-linejoin="miter" :stroke-width="strokeWidth" transform="translate(0.5 0.5)" fill="#000000" stroke="#000000">
        <polygon fill="none" stroke="#000000" stroke-miterlimit="10" points="7,29 7,3 25,16 " transform="translate(0, 0)"></polygon>
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
    },
    strokeWidth: {
      type: Number,
      default: 1,
      useDefaultForNull: true
    }
  }
}
</script>