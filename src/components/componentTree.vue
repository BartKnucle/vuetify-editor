<template>
<v-layout>
  <component v-for="item in tree" :key="item.id" v-bind="item" :is="item.type">
    <template v-if="item.text !== ''">{{ item.text }}</template>
    <componentTree v-if="item.children.length" :tree="item.children"/>
  </component>
</v-layout>
</template>
<script>
export default {
  name: 'componentTree',
  props: {
    tree: {
      type: Array,
      required: true
    }
  },
  watch: {
    tree: function() {
      //console.log(this.tree)
    }
  }
}
</script>
