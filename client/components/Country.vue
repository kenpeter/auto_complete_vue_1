<!-- we don't need to use this.items -->
<!-- item, input, v model -->
<!-- label -->
<!-- sub component -->
<!-- Filter item -->
<template>
  <div>
    <h1>Country</h1>
    <v-autocomplete 
      :items="items" 
      :value='item'
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
      item: {},
      // Many items
      items: [],
      // You can do component or data, need to see the diff
      ItemTemplate: ItemTemplate
    }
  },

  methods: {
    // the item on input box
    itemSelected (item) {
      console.log('Selected item!', item)
    },

    // list item click
    itemClicked (item) {
      let country = item 
      this.$store.dispatch('conSetCurrCountry', country)
    },

    // Label
    getLabel (item) {
      return item.name
    },

    // Update
    update (text) {
      // Assign to data
      // Array filter
      this.items = this.items.filter((item) => {
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
    this.$store.dispatch('conGetCountryList')
  },

  created() {
    this.item = this.$store.getters.curCountry
    this.items = this.$store.getters.countryList
  }
}
</script>