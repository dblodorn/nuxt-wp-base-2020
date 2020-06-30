<template>
  <div class="error pad-single">
    <n-link v-if="error.statusCode === 404" class="h1 back-button black" :to="'/'">
      <span>404 PAGE NOT FOUNT | RETURN Home</span>
    </n-link>
    <h1 v-else>
      An error occurred
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      default: () => {},
      type: Object
    }
  }
}
</script>
