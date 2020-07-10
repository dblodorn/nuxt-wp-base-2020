import filter from 'lodash/filter'

export default (context, inject) => {
  const dataBySlug = (slug, data) => {
    return filter(data, { 'slug': slug })[0]
  }
  inject('dataBySlug', dataBySlug)
  context.$dataBySlug = dataBySlug
}