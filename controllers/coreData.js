import axios from 'axios'
import endpoints from './../endpoints'

export default () => {
  let data = {}
  axios.get(endpoints[0].url).then((response) => {
    data = response.data[0]
  }, (errorResponse) => {
    console.log(errorResponse.response.status)
  })
  return data
}
