import filter from 'lodash/filter'

export default (context, inject) => {
  const dataById = (id, data) => {
    return filter(data, { 'id': id })[0]
  }
  inject('dataById', dataById)
  context.$dataById = dataById
}