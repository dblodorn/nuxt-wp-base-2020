<template>
  <a 
    :href="mapLink"
    target="_blank"
    class="map-wrapper mw-lg center y-margin-big y-margin-bottom"
  >
    <div class="image-sizer">
      <googlemaps-map ref="map" class="map" :center.sync="center" :zoom.sync="zoom" :options="mapOptions">
      <googlemaps-marker
        title="MyMap"
        :draggable="false"
        :position="center"
        :icon="icon"
      />
      </googlemaps-map>
    </div>
  </a>
</template>

<script>
import map_styles from './map_styles'

export default {
  props: {
    latitude: {
      type: [Number, String],
      default: 34.10178
    },
    longitude: {
      type: [Number, String],
      default: -118.243139
    },
    iconImg: {
      type: String,
      default: ''
    },
    highlightColor: {
      type: String,
      default: '#EEAD00'
    },
    zoomInt: {
      type: Number,
      default: 10
    },
    textColor: {
      type: String,
      default: '#0FA090'
    },
    mapLink: {
      type: String
    }
  },
  data () {
    return {
      icon: {
        url : this.iconImg
      },
      center: {
        lat: parseFloat(this.latitude),
        lng: parseFloat(this.longitude)
      },
      mapOptions: {
        disableDefaultUI: true,
        styles: map_styles(
          this.highlightColor,
          this.textColor
        ),
        zoomControl: false,
        gestureHandling: 'none'
      },
      userPosition: null,
      zoom: parseInt(this.zoomInt)
    }
  }
}
</script>

<style lang="css">
  .map-wrapper {
    width: 100%;
    border-radius: 5rem;
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    overflow-y: visible;
    border: var(--border-black);
  }
  .map-wrapper .map {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .map-wrapper .map-view {
    width: 100%!important;
    height: 100%!important;
  }
</style>