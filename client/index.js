// vue
import Vue from 'vue'
//
import VueRouter from 'vue-router'

//
import App from './components/App.vue'

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
  el: '#app',
  render: h => h(App)
})
