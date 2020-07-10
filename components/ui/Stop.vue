<template>
  <div :class="[color, 'stop ui-wrapper']">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="1" transform="translate(0.5 0.5)" fill="#000000" stroke="#000000">
        <rect x="2" y="2" fill="none" stroke="#000000" stroke-miterlimit="10" width="20" height="20"></rect>
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