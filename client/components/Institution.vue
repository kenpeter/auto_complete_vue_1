<template>
  <div>
    <h1>Institution</h1>
    <v-autocomplete 
      :items="institutionList" 
      :value='currInstitution'
      :get-label='getLabel'
      :min-len='0' 
      
      @update-items='update'
      :component-item='ItemTemplate' 
      @item-selected="itemSelected"
      @item-clicked="itemClicked"
    >
    </v-autocomplete>
  </div>
</template>

<script>
import Autocomplete from 'v-autocomplete'

// Single item
import ItemTemplate from './ItemTemplate.vue'

export default {
  data () {
    return {
      // Single item, input
      currInstitution: {},
      // Many items
      InstitutionList: [],
      // You can do component or data, need to see the diff
      ItemTemplate: ItemTemplate
    }
  },

  methods: {
    // the item on input box
    itemSelected(item) {
      console.log('Selected item!', item)
    },

    // list item click
    itemClicked(item) {
      let institution = item 
      this.$store.dispatch('inSetCurrInstitution', institution)
    },

    // Label
    getLabel(item) {
      return item.name
    },

    // Update
    update (text) {
      // Assign to data
      // Array filter
      this.institutionList = this.items.filter((item) => {
        return (
          // input text
          new RegExp(text.toLowerCase())
        )
        .test(item.name.toLowerCase()) // each item
      })
    }
  },

  components: {
    'v-autocomplete': Autocomplete
  },

  // So we have extra wrap to action
  beforeCreate() {
    this.$store.dispatch('inGetInstitutionList')
  },

  created() {
    this.currInstitution = this.$store.getters.currInstitution
    this.institutionList = this.$store.getters.institutionList
  }
}
</script>