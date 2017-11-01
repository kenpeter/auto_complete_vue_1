// vue
import Vue from 'vue'
// state
import Vuex from 'vuex'
import Country from '../../data/country.js'

//
Vue.use(Vuex)

// 
const state = {
  curCountry: {},
  countryList: []
}

// Mutation
const mutations = {
  // We change part of state  
  CON_GET_COUNTRY_LIST(state, countryList) {
    state.countryList = countryList
  },

  CON_SET_CURR_COUNTRY(state, country) {
    state.curCountry = country
  }
}

const actions = {
  // Get all countries
	conGetCountryList(store) {
		let commit = store.commit
		commit('CON_GET_COUNTRY_LIST', Country)
  },
  
  // Set current country
  conSetCurrCountry(store, country) {
		let commit = store.commit
		commit('CON_SET_CURR_COUNTRY', country)
  }
}

// state.reducer
const getters = {
  curCountry: state => state.curCountry,
  countryList: state => state.countryList
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
