<template>
  <div v-if="node && node.name !== 'root'">
    <v-toolbar>
      <v-toolbar-title>{{ node.name }}</v-toolbar-title>
    </v-toolbar>
    <template v-for="props in getType(node)">
      <v-switch
        v-if="props.type === 'Boolean'"
        :key="props.label"
        v-model="node[props.label]"
        :label="props.label"
      />
      <v-text-field
        v-if="props.type === 'String'"
        :key="props.label"
        :label="props.label"
        v-model="node[props.label]"
      />
    </template>
  </div>  
</template>
<script>
export default {
  props: {
    node: {
      type: Object,
      required: false
    }
  },
  methods: {
    getType(node) {
      var types = []
      for (var type in node) {
        try {
          var typeException = [
            'name',
            'type',
            'children',
            'id',
            'inputValue',
            'value',
            'attach',
            'searchInput',
            'falseValue',
            'trueValue',
            'search',
            'contentClass',
            'returnValue',
            'activator',
            'zIndex',
            'transition'
          ]
          var isNotException = typeException.findIndex(item => item === type)

          if (isNotException === -1) {
            if (this.$parent.$parent.$parent.$parent.$options.components[node.name].options.props[type]['type'].name === 'Boolean' || 'String') {
              types.push({
                label: type,
                type: this.$parent.$parent.$parent.$parent.$options.components[node.name].options.props[type]['type'].name
              })
            }
          }
        } catch(err) {
          console.log(type, err)
        }

      }
      return types
    }
  }
}
</script>
    