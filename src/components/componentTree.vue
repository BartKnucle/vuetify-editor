<template>
<div>
  <component v-for="item in tree" :key="item.id" v-bind="item" :is="item.type" :ref="item.id"
      @click="getComponent(item.id)">
      <div v-if="item.children.length">
        <componentTree :tree="item.children"
          @click="getComponent()"/>
      </div>
    </component>
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
