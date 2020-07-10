export default (context, inject) => {
  const trimExcerpt = str => {
    str = str.toString().substring(0, 300)
    return str.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '')
  }
  
  inject('trimExcerpt', trimExcerpt)
  context.$trimExcerpt = trimExcerpt
}