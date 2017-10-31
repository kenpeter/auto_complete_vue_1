// vue
import Vue from 'vue'
//
import VueRouter from 'vue-router'
import Autocomplete from 'v-autocomplete'

//
import App from './components/App.vue'

// Use
Vue.use(VueRouter)
Vue.use(Autocomplete)

const routes = [
	{path: '/', component: App}
]

const router = new VueRouter({
	routes
})

// #app
new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
