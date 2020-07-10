import globals from '~/globals.json'

export default (context, inject) => {
  const global = {
    ...globals,
    nav: [
      'About',
      'Contact'
    ]
  }
  inject('global', global)
  context.$global = global
}