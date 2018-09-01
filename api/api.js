import axios from 'axios'

const API_URL = 'https://rare-wasp-27.localtunnel.me/'

export default {
  init() {
    axios.defaults.baseURL = API_URL
    axios.defaults.headers.get['Content-Type'] = 'application/json'
  },
  get(resource, params) {
    return axios.get(resource, params)
  }
}
