<!-- we don't need to use this.items -->
<!-- item, input, v model -->
<!-- label -->
<!-- sub component -->
<!-- Filter item -->
<template>
  <v-autocomplete 
    :items="items" 
    v-model='item'
    :get-label='getLabel'
    :min-len='0' 
    
    @update-items='update'
    :component-item='ItemTemplate' 
    @item-selected="itemSelected"
    @item-clicked="itemClicked"
  >
  </v-autocomplete>
</template>

<script>
import Autocomplete from 'v-autocomplete'

// Single item
import ItemTemplate from './ItemTemplate.vue'
// Data
import Animals from '../../data/animals.js'

export default {
  data () {
    return {
      // Single item
      item: {id: 9, name: 'Lion', description: 'Lion text'},
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
      console.log('You clicked an item!', item)
    },
    // Label
    getLabel (item) {
      return item.name
    },
    // Update
    update (text) {
      // Assign to data
      // Array filter
      this.items = Animals.filter((item) => {
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
  }
}
</script>