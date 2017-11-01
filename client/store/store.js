// vue
import Vue from 'vue'
// state
import Vuex from 'vuex'
import Animals from '../../data/animals.js'

//
Vue.use(Vuex)

// 
const state = {
  curItem: {id: 9, name: 'Lion', description: 'Lion text'},
  totalItems: []
}

// Mutation
const mutations = {
  // We change part of state  
  GET_TOTAL_ITEMS(state, items) {
    state.totalItems = items;
  }
}

const actions = {
  // Has store and param
	getTotalItems(store) {
    let items = Animals;
		let commit = store.commit;
		commit('GET_TOTAL_ITEMS', items);
	}
}

// state.reducer
const getters = {
  totalItems: state => state.totalItems
}

// full state
// actions
// mutation => reducer
// state.reducer
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

// export store
export default store
