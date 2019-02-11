<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <span>VUETIFY EDITOR</span>
      </v-toolbar-title>
      <v-btn 
          flat
          icon
          @click="addChild('v-btn')">
          <v-icon>add_box</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-treeview
        activatable
        :active.sync="active"
        :items="tree">
      </v-treeview>
      {{ active }}
      <!-- <template v-for="(child) in tree">
        <component :is="child" :key="child"></component>
      </template> -->
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      active: [],
      tree: [
        {
          id: 'root',
          name: 'root',
          children: []
        }
      ]
    }
  },
  methods: {
    findNode(id, tree) {
      tree.forEach(element => {
        
      });
    },
    addChild: function(type) {
      if (this.active.length) {

        var pushChild = function (id, tree) {
          tree.forEach(element => {
            if (element.id = id) {
              element.children.push({
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
                name: type,
                children: []
              })
            } else {
              pushChild(id, element.children)
            }
          })
        }
        pushChild(this.active[0], this.tree)
      }
    },
    activateNode: function() {}
  },
  watch: {
    active: 'activateNode'
  }
}
</script>
