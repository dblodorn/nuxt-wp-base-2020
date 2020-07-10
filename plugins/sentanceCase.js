import startCase from 'lodash/startCase'
import toLower from 'lodash/toLower'

export default (context, inject) => {
  const sentanceCase = (str) => {
    return startCase(toLower(str))
  }
  inject('sentanceCase', sentanceCase)
  context.$sentanceCase = sentanceCase
}
