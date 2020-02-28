let state = {
  list: []
}

let mutations = {
  getlist (state,info) {
    state.list = info
  }
}

export default {
  state: state,
  mutations
}