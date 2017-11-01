// vue
import Vue from 'vue'
// state
import Vuex from 'vuex'
import Country from '../../data/country.js'
import Institution from '../../data/institution.js'

//
Vue.use(Vuex)

// 
const state = {
  currCountry: {},
  countryList: [],

  currInstitution: {},
  institutionList: []
}

// Mutation
const mutations = {
  // We change part of state  
  CON_GET_COUNTRY_LIST(state, countryList) {
    state.countryList = countryList
  },

  CON_SET_CURR_COUNTRY(state, country) {
    state.currCountry = country
  },
  
  IN_GET_INSTITUTION_LIST(state, institutionList) {
    state.institutionList = institutionList
  },

  IN_SET_CURR_INSTITUTION(state, institution) {
    state.currinstitution = institution
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
  },

  //
  inGetInstitutionList(store) {
		let commit = store.commit
		commit('IN_GET_INSTITUTION_LIST', Institution)
  },
  
  // 
  inSetCurrInstitution(store, institution) {
		let commit = store.commit
		commit('IN_SET_CURR_INSTITUTION', institution)
  }
}

// state.reducer
const getters = {
  currCountry: state => state.currCountry,
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
