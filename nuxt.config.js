import axios from 'axios'
import webpack from 'webpack'
import whitelister from 'purgecss-whitelister'

export default {
  target: 'static',
  env: {
    BASE_URL: process.env.BASE_URL,
    APP_TITLE: process.env.APP_TITLE,
    APP_VERSION: process.env.APP_VERSION,
    CMS_URL: process.env.CMS_URL,
    DEBUG: process.env.DEBUG
  },
  head: {
    title: process.env.APP_TITLE || 'DMBK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { 
    color: '#fff'
  },
  css: [
    '~assets/css/main.css',
    '~assets/css/swiper.css'
  ],
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  plugins: [
    { src: '~plugins/event-bus' },
    { src: '~plugins/vue-scrollto' },
    { src: '~plugins/vue-awesome-swiper', mode: 'client' },
    { src: `~plugins/vimeo-player`, ssr: false },
    { src: '~plugins/youtube-player', ssr: false },
    { src: '~plugins/youtube-parser'},
    { src: '~plugins/vimeo-parser'},
    { src: "~plugins/components" },
    { src: "~plugins/global" },
    { src: "~plugins/stringToSlug" },
    { src: "~plugins/uppercase" },
    { src: "~plugins/capitalize" },
    { src: "~plugins/sentanceCase" },
    { src: "~plugins/trimExcerpt" },
    { src: "~plugins/dataById" },
    { src: "~plugins/dataBySlug" },
    { src: "~plugins/postIndex" },
    { src: "~plugins/getPostData" }
  ],
  buildModules: [
    'nuxt-purgecss'
  ],
  purgeCSS: {
    whitelist: [
      ...whitelister([
        'assets/css/swiper.css'
      ])
    ]
  },
  modules: [
    '@nuxt/http',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy'
  ],
  proxy: [
    'http://localhost:9000/.netlify/functions'
  ],
  http: {},
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  buildModules: [
    '@nuxtjs/netlify-files'
  ],
  generate: {
    fallback: '404.html',
    subFolders: false
  },
  build: {
    vendor: [
      'vue-vimeo-player',
      'vue-youtube-embed'
    ],
    postcss: {
      plugins: {
        autoprefixer: {},
        'postcss-custom-media': {
          importFrom: [
            () => {
              const { screens } = require('./globals.json')
              const customMedia = {}
              for (let size in screens) {
                customMedia[`--${size}`] = `(min-width: ${screens[size]}px)`
              }
              return { customMedia }
            }
          ]
        }
      }
    },
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
  }
}
