<template>
  <ul 
    :class="['thumbnail-wrapper responsive-grid', gridClasses]"
    v-if="thumbnails.length"
  >
    <li
      v-for="(thumb, i) of thumbnails"
      :key="`thumb-link-${route}-${i}`"
      class="thumbnail"
      :style="`padding-bottom: ${proportion};`"
    >
      <thumbnail-link
        :route="route"
        :thumbData="thumb"
      />
    </li>
  </ul>
</template>

<script>
import ThumbnailLink from './ThumbnailLink'

export default {
  name: 'ThumbnailWrapper',
  components: {
    ThumbnailLink
  },
  props: {
    route: {
      required: true,
      type: String,
    },
    thumbnails: {
      required: true,
      type: Array,
      default: [],
      useDefaultForNull: true
    },
    gridGap: {
      required: false,
      type: String,
      default: '0',
      useDefaultForNull: true
    },
    proportion: {
      required: false,
      type: String,
      default: '100%',
      useDefaultForNull: true
    },
    gridClasses: {
      required: false,
      type: Array,
      default: () => ['sm-col-1','md-col-2', 'lg-col-2'],
      useDefaultForNull: true
    }
  }
}
</script>

<style>
.thumbnail-wrapper {
  width: 100%;
}

.thumbnail {
  width: 100%;
  height: 0;
  overflow-y: visible;
  position: relative;
  background-color: var(--white);
}

.thumbnail a {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.thumbnail-image-wrapper,
.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.thumbnail-image-wrapper {
  z-index: 1;
}
.thumbnail-overlay {
  z-index: 10;
  opacity: 0;
  pointer-events: none;
}
.thumbnail-wrapper.three-col .thumbnail-overlay {
  border: var(--pad-micro) solid var(--white);
}

.thumbnail p {
  text-shadow: 0px 0px 8px rgba(0,0,0,0.25);
}

@media (hover: hover) {
  .thumbnail-overlay,
  .thumbnail-image-wrapper,
  .thumbnail-image-wrapper img {
    will-change: all;
    transition: all 150ms cubic-bezier(.19,.48,.27,.99);
  }
  .thumbnail:hover .thumbnail-overlay {
    opacity: 1;
  }
  .thumbnail:hover img {
    filter: grayscale(100%);
  }
  .thumbnail:hover .thumbnail-image-wrapper {
    background-color: var(--text-bg);
    mix-blend-mode: multiply;
  }
}
</style>
