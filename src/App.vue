<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <span>VUETIFY EDITOR</span>
      </v-toolbar-title>
      <v-menu v-for="button in menu"
          :key="button.name"
          offset-y>
        <v-btn
          slot="activator">
          {{ button.name }}
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="item in button.items"
            :key="item.name"
            @click="addChild(item.name)">
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer
      fixed
      app
    >
      <v-treeview
        activatable
        :active.sync="active"
        :items="tree">
      </v-treeview>
    </v-navigation-drawer>
    <v-content>
      <componentTree :tree="tree[0].children" />
    </v-content>
  </v-app>
</template>
<script>
import { default as componentTree } from './components/componentTree.vue'
export default {
  name: 'App',
  components: {
    componentTree
  },
  data () {
    return {
      active: [],
      tree: [
        {
          id: 'root',
          name: 'root',
          children: []
        }
      ],
      menu: [
        {
          name: 'Grid',
          items: [
            {
              name: 'V-Flex'
            },
            {
              name: 'V-Layout'
            }
          ]
        },
        {
          name: 'Buttons',
          items: [
            {
              name: 'V-Btn'
            },
            {
              name: 'V-Chips'
            }
          ]
        }
      ]
    }
  },
  methods: {
    findNode(id, tree) {
      var foundNode = tree.find(node => {
        if (node.id === id) {
          return node
        }
      })

      if (!foundNode) {
        tree.forEach(node => {
          foundNode = this.findNode(id, node.children)
        });
      }

      return foundNode
    },
    addChild: function(type) {
      if (this.active.length) {
        var node = this.findNode(this.active[0], this.tree)
        node.children.push({
          id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
          name: type,
          children: []
        })
      }
    },
    activateNode: function() {}
  },
  watch: {
    active: 'activateNode'
  }
}
</script>
