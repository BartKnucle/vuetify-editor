<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>{{ node.name }}</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-text-field
        v-if="node.color"
        label="Color"
        outline
        v-model="node.color"
      />
    </v-list>
  </div>  
</template>
<script>
export default {
  props: {
    node: {
      type: Object,
      required: true
    }
  }
}
</script>
