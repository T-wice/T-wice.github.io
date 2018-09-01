import axios from 'axios'

const API_URL = 'http://35.221.106.237:8080/'

export default {
  init() {
    axios.defaults.baseURL = API_URL
    axios.defaults.headers.get['Content-Type'] = 'application/json'
  },
  get(resource, params) {
    axios.get(resource, params)
  }
}
