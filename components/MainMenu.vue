<template>
  <div class="main-menu pad-single">
    <div class="main-menu-inner bg-text pad-single flex-centered">
      <div class="close-wrapper pad-single flex-space-between">
        <div>
          <n-link to="/" class="h4" @click.native="closeHandler">
            <span>HOME</span>
          </n-link>
        </div>
        <div>
          <button class="h4" @click="closeHandler">
            <span>CLOSE</span>
          </button>
        </div>
      </div>
      <nav class="flex-column text-align-center big-size font-a uppercase line-height-med">
        <n-link 
          class="black link"
          v-for="item of navigation"
          :key="item.slug"
          :to="`/${item.slug}`"
          @click.native="closeHandler"
        >
          <span>{{item.name}}</span>
        </n-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  props: {
    closeHandler: {
      type: Function,
      default: () => {},
      useDefaultForNull: true
    }
  },
  computed: {
    navigation() {
      let navItems = []
      this.$global.nav.forEach(item => {
        navItems.push({
          slug: this.$stringToSlug(item),
          name: item
        })
      });
      return navItems
    }
  }
}
</script>

<style scoped>
  .main-menu {
    display: block;
    width: 100vw;
    height: 100vh;
    background: var(--white);
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
  }
  .main-menu-inner {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .close-wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .menu-footer {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>
