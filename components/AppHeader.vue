<template>
  <header class="bg-text x-pad-single shadow">
    <div class="header-inner flex-center-vert">
      <n-link to="/" class="h2">
        <span>{{title}}</span>
      </n-link>
      <button class="h2" @click="menuHandler">
        <span>MENU</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      title: process.env.APP_TITLE
    }
  },
  props: {
    menuHandler: {
      type: Function,
      default: () => {},
      useDefaultForNull: true
    }
  }
}
</script>

<style>
  header {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
    height: var(--header-height);
  }
  .header-inner {
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
</style>
