export default (context, inject) => {
  const stringUppercase = (str) => {
    str = str.toString()
    str = str.toUpperCase()
    return str
  }
  inject('stringUppercase', stringUppercase)
  context.$stringUppercase = stringUppercase
}
