import find from 'lodash/find'

export default (context, inject) => {
  const getPostData = (slug, data) =>
    find(data, { slug: slug })
  
  inject('getPostData', getPostData)
  context.$getPostData = getPostData
}