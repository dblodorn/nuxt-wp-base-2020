<template>
  <footer class="bg-text y-pad-big x-pad-single flex-space-between">
    <a class="font-a link reg-size uppercase" href="#" v-scroll-to="'header'">
      <span>Top</span>
    </a>
    <copyright/>
  </footer>
</template>

<style>
  footer {
    width: 100%;
    position: relative;
  }
</style>

<script>
export default {
  name: 'AppFooter'
}
</script>