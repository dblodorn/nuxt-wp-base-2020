/* eslint-disable */

import find from 'lodash/find'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  find: find
})

export default (slug, data) =>
  _.find(data, { slug: slug })
