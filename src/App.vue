<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <span>VUETIFY EDITOR</span>
      </v-toolbar-title>
        <v-btn 
          flat
          icon
          @click="addComponent('v-btn')">
          <v-icon>add_box</v-icon>
        </v-btn>
      </v-toolbar>
    <v-content>
       <template v-for="(child) in componentsTree">
            <component :is="child" :key="child"></component>
        </template>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      componentsTree: []
    }
  },
  methods: {
    addComponent: function(name) {
      this.componentsTree.push(name)
    }
  }
}
</script>
