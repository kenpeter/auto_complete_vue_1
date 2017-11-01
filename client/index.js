// vue
import Vue from 'vue'
//
import VueRouter from 'vue-router'

// Component
import App from './components/App.vue'

// Store
import store from './store/store'

// Use
Vue.use(VueRouter)

const routes = [
	{path: '/', component: App}
]

const router = new VueRouter({
	routes
})

// #app
new Vue({
	router,
	store,
  el: '#app',
  render: h => h(App)
})
