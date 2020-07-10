<template>
  <div class="main-menu pad-single">
    <div class="main-menu-inner bg-text pad-single flex-centered">
      <div class="close-wrapper pad-single flex-space-between">
        <n-link to="/" class="h4 white link" @click="closeHandler">
          <span>EPOCH</span>
        </n-link>
        <button class="h4 white link" @click="closeHandler">
          <span>CLOSE</span>
        </button>
      </div>
      <nav class="flex-column text-align-center xl-size font-a uppercase line-height-med">
        <n-link 
          class="white link"
          v-for="item of navigation"
          :key="item.slug"
          :to="`/${item.slug}`"
          @click="closeHandler"
        >
          <span>{{item.name}}</span>
        </n-link>
      </nav>
      <div class="menu-footer pad-single flex-space-between">
        <div class="footer-inner bg-text flex-space-between">
          <copyright />
          <n-link 
            class="white font-a link reg-size uppercase"
            :to="`/privacy-policy`"
            @click="closeHandler"
          >
            <span>Privacy</span>
          </n-link>
          <n-link 
            class="white font-a link reg-size uppercase"
            :to="`/terms`"
            @click="closeHandler"
          >
            <span>Terms & Conditions</span>
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nav } from '~/globals'

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
      nav.forEach(item => {
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
