import api from '../api/api.js'
api.init()
export const state = () => ({
  results: []
})

export const mutations = {
  setResult(state, result) {
    state.results.push(result)
  },
  setResults(state, results) {
    state.results = results
  }
}

export const actions = {
  setResults({ commit }, results) {
    api.get(`teas?answer_ids=${results}`).then(res => {
      commit('setResults', res.data)
    })
  },
  setResult({ commit }, result) {
    api.get(`teas/${result}`).then(res => {
      commit('setResult', res.data)
    })
  },
  search({ commit }, keyword) {
    api.get(`teas?keyword=${this.keyword}`).then(res => {
      commit('setResults', res.data)
    })
  }
}
