export default text => {
  const str = text.substring(0, 300)
  return str.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '')
}
