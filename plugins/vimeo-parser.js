export default (context, inject) => {
  const vimeoParser = url => {
    var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/
    var match = url.match(regExp)
    return (match&&match[5])? match[5] : false
  }
  inject('vimeoParser', vimeoParser)
  context.$vimeoParser = vimeoParser
}
