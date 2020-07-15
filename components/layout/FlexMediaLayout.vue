<template>
  <section 
    v-if="layout.length"
    class="flex-media-layout mw-full center"
  >  
    <div
      v-for="(item, i) of layout"
      :key="`${item.acf_fc_layout + i}`"
      :class="['y-pad-big mw-xl center', item.acf_fc_layout]"
    >
      <div v-if="debug" class="y-pad-micro">
        <raw-displayer 
          :value="item.acf_fc_layout"
        />
      </div>
      <video-player
        v-if="item.acf_fc_layout === 'video'"
        :type="item.type"
        :url="item.url"
        :cover="item.cover"
        :autoplay="item.autoplay"
        :controls="item.controls"
        :muted="item.muted"
        :loops="item.loops"
      />
      <slide-show
        v-if="item.acf_fc_layout === 'carousel'"
        :slides="item.images"
        :controls="item.controls"
        :pagination="item.bullets"
        :image_fit="item.image_fit"
        :autoplay="item.autoplay"
      />
      <image-grid
        v-if="item.acf_fc_layout === 'image_grid'"
        :images="item.images"
        :image_fit="item.image_fit"
        :grid_gap="item.grid_gap"
        :grid_classes="[
          item.small_columns,
          item.medium_columns,
          item.large_columns
        ]"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "FlexMediaLayout",
  data() {
    return {
      debug: JSON.parse(process.env.DEBUG),
    }
  },
  props: {
    layout: {
      required: true,
      type: Array,
      default: [],
      useDefaultForNull: true
    }
  }
}
</script>
