import upperFirst from 'lodash/upperFirst'
import map from 'lodash/map'

export default (context, inject) => {
  const capitalize = (str) => {
    return map(str.split(' '), upperFirst).join(' ')
  }
  inject('capitalize', capitalize)
  context.$capitalize = capitalize
}
