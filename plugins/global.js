import globals from '~/globals.json'

export default (context, inject) => {
  const global = {
    ...globals,
    nav: [
      'About',
      'Work',
      'Blog',
      'Contact',
      'Flex Media',
      'Videos',
      'Carousel',
      'Images',
      'Map',
      'Flickity Slider'
    ]
  }
  inject('global', global)
  context.$global = global
}