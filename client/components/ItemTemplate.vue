<!-- parse the item -->
<template>
  <div>
    <b>#{{ item.id }}</b>
    <span>{{ item.name }}</span>
    <abbr>{{ item.description }}</abbr>
  </div>
</template>

<script>
export default {
  // Like prop type in react
  props: { 
    item: { required: true } 
  }
}
</script>