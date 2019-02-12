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
    <v-navigation-drawer app>
      <v-treeview
        activatable
        :active.sync="active"
        :items="tree">
      </v-treeview>
    </v-navigation-drawer>
    <v-content>
      <componentTree :tree="tree[0].children"/>
    </v-content>
    <v-navigation-drawer app right>
      <componentProperties :node="findNode(active[0], tree)"/>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
import { default as componentTree } from './components/componentTree.vue'
import { default as componentProperties } from './components/componentProperties.vue'
export default {
  name: 'App',
  components: {
    componentTree,
    componentProperties
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
              name: 'v-flex'
            },
            {
              name: 'v-layout'
            }
          ]
        },
        {
          name: 'Buttons',
          items: [
            {
              name: 'v-btn'
            },
            {
              name: 'v-chip'
            }
          ]
        },
        {
          name: 'Container',
          items: [
            {
              name: 'v-card'
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
    addChild: function(name) {
      if (this.active.length) {
        var node = this.findNode(this.active[0], this.tree)
        var child = {
          id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
          name: name,
          children: []
        }
        this.getOptions(child)
        node.children.push(child)
      }
    },
    getOptions: function(child) {
      child.type = child.name
      switch (child.name) {
        case 'v-btn':
          child.color = this.getRandColor()
          break;
         case 'v-chip':
          child.color = this.getRandColor()
          break;
        case 'v-card':
          child.color = this.getRandColor()
          break;
        default:
          break;
      }
    },
    getRandColor() {
      return '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    }/*,
    activateNode: function() {}*/
  }/*,
  watch: {
    active: 'activateNode'
  }*/
}
</script>
