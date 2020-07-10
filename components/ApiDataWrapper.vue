<template>
  <div class="page-wrapper-component">
    <loading v-if="loading"/>
    <main v-else class="page-wrapper">
      <slot :pageData="apiData"/>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/AppHeader'
import MainMenu from '@/components/MainMenu'
import { endpoints } from '~/endpoints.json'

export default {
  async fetch () {
    if (!this.dataLoaded) {
      const payload = await this.$http.$get(endpoints[0].url)
      this.apiData = payload
    } else {
      this.apiData = this.data
    }
  },
  name: 'PageWrapper',
  components: {
    AppHeader,
    MainMenu
  },
  props: {
    title: {
      required: false,
      type: String
    },
    header: {
      required: false,
      type: Boolean,
      default: true,
      useDefaultForNull: true
    },
    footer: {
      required: false,
      type: Boolean,
      default: false,
      useDefaultForNull: true
    },
    longForm: {
      required: false,
      type: Boolean,
      default: false,
      useDefaultForNull: true
    }
  },
  data() {
    return {
      menuState: false,
      apiData: {}
    }
  },
  computed: {
    ...mapState({
      data: state => state.api.data,
      dataLoaded: state => state.api.dataLoaded
    }),
    loading () {
      if (!this.dataLoaded) {
        return this.$fetchState.pending
      } else {
        return false
      }
    }
  },
  methods: {
    toggleMenu() {
      this.menuState = !this.menuState
    }
  }
}
</script>

<style scoped>
.page-wrapper-component {
  position: relative;
  min-height: 100vh;
}
</style>
