<template>
<div>
  <div v-for="item in tree" :key="item.id">
    <component v-bind="item" :is="item.type" :ref="item.id"
      @click="getComponent(item.id)">
      {{ item.name }}
      <div v-if="item.children.length">
        <componentTree :tree="item.children"
          @click="getComponent()"/>
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
  },
  methods: {
    getComponent(id) {
       //console.log(this.$refs[id])
    }
  }
}
</script>
