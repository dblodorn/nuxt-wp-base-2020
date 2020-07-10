import Vue from 'vue'

export default Vue.component('metaInfo', {
  props: {
    title: {
      type: String,
      useDefaultForNull: true,
      default: process.env.APP_TITLE
    },
    description: {
      type: String,
      useDefaultForNull: true,
      default: process.env.APP_DESCRIPTION
    },
    image: {
      type: String,
      useDefaultForNull: true,
      default: `${process.env.APP_URL}imgs/social-card.jpg`
    }
  },
  metaInfo () {
    const image = () =>
      this.image

    const title = () =>
      `${this.title} | ${process.env.APP_TITLE}`

    const description = () =>
      this.description

    const metaTags = [
      {
        property: 'og:type',
        content: 'website',
        vmid: 'og:type'
      },
      {
        property: 'og:title',
        content: title(),
        template: title(),
        vmid: 'og:title'
      }
    ]

    if (this.notFound) {
      metaTags.push({
        property: 'prerender-status-code',
        content: 404,
        vmid: 'prerender-status-code'
      })
    } else {
      metaTags.push({
        name: 'description',
        content: description(),
        vmid: 'description'
      },
      {
        property: 'og:description',
        content: description(),
        vmid: 'og:description'
      })
      metaTags.push({
        name: 'twitter:card',
        content: 'summary_large_image',
        vmid: 'twitter:card'
      })
      metaTags.push({
        name: 'og:card',
        content: 'summary_large_image',
        vmid: 'og:card'
      })
      metaTags.push({
        name: 'twitter:image',
        content: image(),
        vmid: 'twitter:image'
      })
      metaTags.push({
        property: 'og:image',
        content: image(),
        vmid: 'og:image'
      })
    }

    return {
      title: title(),
      meta: metaTags
    }
  },
  render() {
    return this.$slots.default
  },
})
