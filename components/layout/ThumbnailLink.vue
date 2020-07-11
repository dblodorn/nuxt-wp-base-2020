<template>
  <n-link 
    :to="`/${route}/${thumbData.slug}`"
  >
    <div class="thumbnail-overlay flex-centered bezier-150">
      <p class="h2 white text-align-center flex-column">
        <span v-html="thumbData.title"/>
      </p>
    </div>
    <div class="thumbnail-image-wrapper">
      <lazy-image :src="thumbData.thumbnail"/>
    </div>
  </n-link>
</template>

<script>
export default {
  name: 'Thumbnail',
  props: {
    route: {
      required: true,
      type: String,
    },
    thumbData: {
      type: Object,
      default: {},
      useDefaultForNull: true
    }
  }
}
</script>
