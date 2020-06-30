export default text => {
  const lower = text.toLowerCase()
  return lower.charAt(0).toUpperCase() + lower.substring(1)
}
