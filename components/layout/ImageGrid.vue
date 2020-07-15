<template>
  <div v-if="images.length" class="image-grid">
    <ul 
      :class="[
        'image-grid-wrapper responsive-grid',
        `sm-col-${grid_classes[0]} md-col-${grid_classes[1]} lg-col-${grid_classes[2]}`
      ]"
      :style="`grid-gap:${grid_gap}rem;`"  
    >
      <li
        v-for="image of images"
        :key="image"
        class="grid-image"
        :style="`padding-bottom:${proportion}%;`"
      >
        <div class="grid-image-wrapper">
          <lazy-image :src="image" :fit="image_fit"/>
        </div>
      </li>
    </ul>
    <div v-if="debug" class="y-pad-micro">
      <raw-displayer 
        :value="{debug, images, grid_classes, grid_gap, image_fit}"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGrid',
  data() {
    return {
      debug: JSON.parse(process.env.DEBUG),
    }
  },
  props: {
    images: {
      required: true,
      type: Array,
      default: [],
      useDefaultForNull: true
    },
    grid_gap: {
      required: false,
      type: String,
      default: "1",
      useDefaultForNull: true
    },
    proportion: {
      required: false,
      type: Number,
      default: 100,
      useDefaultForNull: true
    },
    grid_classes: {
      required: false,
      type: Array,
      default: () => ['1','2','3'],
      useDefaultForNull: true
    },
		image_fit: {
			required: false,
			type: String,
			default: 'contain',
      useDefaultForNull: true
    }
  }
}
</script>

<style>
.image-grid,
.image-grid-wrapper {
  width: 100%;
  position: relative;
}
.grid-image {
  width: 100%;
  height: 0;
  overflow-y: visible;
  position: relative;
  background-color: var(--white);
}
.grid-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
