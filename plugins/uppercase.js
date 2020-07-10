export default (context, inject) => {
  const uppercase = (str) => {
    str = str.toString()
    str = str.toUpperCase()
    return str
  }
  inject('uppercase', uppercase)
  context.$uppercase = uppercase
}
