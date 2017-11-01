<template>
  <div id="app">
    <img src="../assets/logo.png">
    <MyAutoComplete />
  </div>
</template>

<script>
import MyAutoComplete from './MyAutoComplete.vue'

export default {
  name: 'app',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components: {
    'MyAutoComplete': MyAutoComplete
  }
}
</script>