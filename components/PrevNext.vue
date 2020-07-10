<template>
  <div class="mw-full h4 flex-space-between">
    <n-link class="pink-link" :to="prevLink">
      <span>PREV</span>
    </n-link>
    <n-link class="pink-link" :to="nextLink">
      <span>NEXT</span>
    </n-link>
  </div>
</template>

<script>
export default {
  components: {},
  props: [
    'posts',
    'route'
  ],
  computed: {
    postIndex() {
      return this.$postIndex(this.$route.params.id, this.posts)
    },
    prevLink() {
      return `/${this.route}/${this.posts[this.postIndex.prev].slug}`
    },
    nextLink() {
      return `/${this.route}/${this.posts[this.postIndex.next].slug}`
    }
  }
}
</script>
