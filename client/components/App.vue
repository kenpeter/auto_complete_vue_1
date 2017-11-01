<template>
  <div id="app">
    <img src="../assets/logo.png">
    <Country />
  </div>
</template>

<script>
import Country from './Country.vue'

export default {
  name: 'app',

  components: {
    'Country': Country
  }
}
</script>