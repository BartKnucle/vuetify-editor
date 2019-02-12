<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>{{ node.name }}</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-switch
        v-if="node.absolute !== undefined"
        v-model="node.absolute"
        label="absolute"
      />
      <v-switch
        v-if="node.block !== undefined"
        v-model="node.block"
        label="block"
      />
      <v-switch
        v-if="node.bottom !== undefined"
        v-model="node.bottom"
        label="bottom"
      />
      <v-switch
        v-if="node.clipped !== undefined"
        v-model="node.clipped"
        label="clipped"
      />
      <v-switch
        v-if="node.close !== undefined"
        v-model="node.close"
        label="close"
      />
      <v-text-field
        v-if="node.color"
        label="Color"
        v-model="node.color"
      />
      <v-switch
        v-if="node.dark !== undefined"
        v-model="node.dark"
        label="dark"
      />
      <v-switch
        v-if="node.depressed !== undefined"
        v-model="node.depressed"
        label="depressed"
      />
      <v-switch
        v-if="node.disabled !== undefined"
        v-model="node.disabled"
        label="disabled"
      />
      <v-switch
        v-if="node.fab !== undefined"
        v-model="node.fab"
        label="fab"
      />
      <v-switch
        v-if="node.fixed !== undefined"
        v-model="node.fixed"
        label="fixed"
      />
      <v-switch
        v-if="node.flat !== undefined"
        v-model="node.flat"
        label="flat"
      />
      <v-switch
        v-if="node.floating !== undefined"
        v-model="node.floating"
        label="floating"
      />
      <v-switch
        v-if="node.label !== undefined"
        v-model="node.label"
        label="label"
      />
      <v-switch
        v-if="node.large !== undefined"
        v-model="node.large"
        label="large"
      />
      <v-switch
        v-if="node.light !== undefined"
        v-model="node.light"
        label="light"
      />
      <v-switch
        v-if="node['mini-variant'] !== undefined"
        v-model="node['mini-variant']"
        label="mini-variant"
      />
      <v-text-field
        v-if="node['mobile-break-point']"
        label="mobile-break-point"
        v-model="node['mobile-break-point']"
      />
      <v-text-field
        v-if="node['mini-variant-width']"
        label="mini-variant-width"
        v-model="node['mini-variant-width']"
      />
      <v-switch
        v-if="node.permanent !== undefined"
        v-model="node.permanent"
        label="permanent"
      />
      <v-switch
        v-if="node.outline !== undefined"
        v-model="node.outline"
        label="outline"
      />
      <v-switch
        v-if="node.selected !== undefined"
        v-model="node.selected"
        label="selected"
      />
      <v-switch
        v-if="node.small !== undefined"
        v-model="node.small"
        label="small"
      />
      <v-switch
        v-if="node.right !== undefined"
        v-model="node.right"
        label="right"
      />
      <v-switch
        v-if="node.ripple !== undefined"
        v-model="node.ripple"
        label="ripple"
      />
      <v-switch
        v-if="node.round !== undefined"
        v-model="node.round"
        label="round"
      />
      <v-switch
        v-if="node.rounded !== undefined"
        v-model="node.rounded"
        label="rounded"
      />
      <v-switch
        v-if="node.stateless !== undefined"
        v-model="node.stateless"
        label="stateless"
      />
      <v-switch
        v-if="node.temporary !== undefined"
        v-model="node.temporary"
        label="temporary"
      />
      <v-text-field
        v-if="node.text"
        label="text"
        v-model="node.text"
      />
      <v-text-field
        v-if="node['text-color']"
        label="text-color"
        v-model="node['text-color']"
      />
      <v-switch
        v-if="node.tile !== undefined"
        v-model="node.tile"
        label="tile"
      />
       <v-switch
        v-if="node.touchless !== undefined"
        v-model="node.touchless"
        label="touchless"
      />
      <v-switch
        v-if="node.false !== undefined"
        v-model="node.false"
        label="false"
      />
      <v-switch
        v-if="node['x-large'] !== undefined"
        v-model="node['x-large']"
        label="x-large"
      />
      <v-switch
        v-if="node['x-small'] !== undefined"
        v-model="node['x-small']"
        label="x-small"
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
