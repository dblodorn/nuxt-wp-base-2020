<template>
  <div>
    <div class="p-sm flex-row pad-single border-bottom">
      <div class="level-left flex-row">
        <div class="level-item">
          <a class="button is-white" @click="$router.back()">
            <span>BACK</span>
          </a>
        </div>
        <span>&nbsp;/&nbsp;</span>
        <div class="level-item flex-row">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="flex-row uppercase">
              <li v-for="(item, i) in crumbs" :key="i" :class="item.classes">
                <nuxt-link :to="item.path">
                  {{ item.name }}
                </nuxt-link>
                <span v-if="i !== (crumbs.length - 1)">&nbsp;/&nbsp;</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    crumbs() {
      const crumbs = []
      
      const returnTitle = route => {
        const data = route.split('/')
        if (data.length === 2) {
          const title = data[1]
          return title.replace(/\//g, '').replace(/-/g, ' ')
        } else if (data.length === 3) {
          const title = data[2]
          return title.replace(/\//g, '').replace(/-/g, ' ')
        }
      }
      
      this.$route.matched.map((item, i, { length }) => {
        const crumb = {}
        crumb.path = item.path
        crumb.name = this.$capitalize(item.name.replace(/-[^-]*$/, ''))
        if (i === length - 1) {
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              name: this.$capitalize(item.name.replace(/-[^-]*$/, ''))
            })
            crumb.path = this.$route.path
            crumb.name = this.$capitalize(returnTitle(this.$route.path))
          }
        }
        crumbs.push(crumb)
      })
      return crumbs
    }
  }
}
</script>