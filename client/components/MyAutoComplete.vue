<!-- we don't need to use this.items -->
<!-- item, input, v model -->
<!-- label -->
<!-- sub component -->
<!-- Filter item -->
<template>
  <v-autocomplete 
    :items="items"
    v-model="item"
    :get-label="getLabel"
    :component-item='template'
    
    @update-items="updateItems"
  >
  </v-autocomplete>
</template>

<script>
import ItemTemplate from './ItemTemplate.vue'

export default {
  data () {
    return {
      // Single item
      item: {id: 9, name: 'Lion', description: 'Lion text'},
      // Many items
      items: [],
      // 
      template: ItemTemplate
    }
  },

  methods: {
    // Label
    getLabel (item) {
      return item.name
    },

    // Filter items
    updateItems (text) {
      /*
      yourGetItemsMethod(text).then( (response) => {
        this.items = response
      })
      */
      this.items = [
        {id: 9, name: 'Lion', description: 'Lion text'},
        {id: 10, name: 'Cat', description: 'Cat text'}
      ]

    }
  }
}
</script>