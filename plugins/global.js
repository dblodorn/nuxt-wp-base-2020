import globals from '~/globals.json'

export default (context, inject) => {
  const global = {
    ...globals
  }
  inject('global', global)
  context.$global = global
}