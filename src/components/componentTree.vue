<template>
<div>
  <div v-for="item in tree" :key="item.id">
    <component :is="item.name">
      <div v-if="item.children.length">
        <componentTree :tree="item.children"/>
      </div>
    </component>
  </div>
</div>
</template>
<script>
export default {
  name: 'componentTree',
  props: {
    tree: {
      type: Array,
      required: true
    }
  }
}
</script>
