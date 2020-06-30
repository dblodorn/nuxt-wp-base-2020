import axios from 'axios'
import webpack from 'webpack'
import FetchJsonWebpackPlugin from 'fetch-json-webpack-plugin'
import endpoints from './endpoints.json'

export default {
  mode: 'universal',
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
    APP_TITLE: process.env.APP_TITLE,
    APP_VERSION: process.env.APP_VERSION
  },
  head: {
    title: process.env.npm_package_name || 'DMBK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/css/main.css',
  ],
  plugins: [
    { src: '@/plugins/event-bus' }
  ],
  buildModules: [
    'nuxt-purgecss'
  ],
  modules: [
    '@nuxt/http',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  http: {},
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  generate: {
    routes (callback) {
      axios.get('https://dmbk.io/wp-json/dmbk-io-api/v1/derpyvision')
        .then((res) => {
          const routes = res.data.derpy_nav.map((post) => {
            return '/work/' + post.slug
          })
          callback(null, routes)
        })
        .catch(callback)
    },
    subFolders: false
  },
  build: {
    extend (config, { isDev }) {
      if (isDev) { 
        console.log('development')
      } else {
        config.plugins.push(
          new FetchJsonWebpackPlugin({
            ...endpoints
          })
        )
      }
    },
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
