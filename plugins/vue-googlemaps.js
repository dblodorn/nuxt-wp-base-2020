import Vue from 'vue'
import VueGoogleMaps from 'vue-googlemaps'
import 'vue-googlemaps/dist/vue-googlemaps.css'

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: process.env.GMAP_KEY,
    useBetaRenderer: false
  }
})