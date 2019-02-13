<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <span>VUETIFY DESIGNER</span>
      </v-toolbar-title>
      <v-menu v-for="button in componentsMenu"
          :key="button.name"
          offset-y>
        <v-btn fab small
          slot="activator">
          {{ button.name }}
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="item in button.items"
            :key="item"
            @click="addChild(item)">
            <v-list-tile-title>{{ item }}</v-list-tile-title>
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
      <componentProperties :node.sync="currentNode"/>
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
      components: [],
      componentsMenu: [],
      active: ['root'],
      tree: [
        {
          id: 'root',
          name: 'root',
          children: []
        }
      ]
    }
  },
  created: function() {
    for (var component in this.$parent.$options.components) {
      let comp = this.$parent.$options.components[component]
      if (comp.extendOptions) {
        this.components.push(comp.extendOptions.name)
        let index = this.componentsMenu.findIndex(item => item.name === comp.extendOptions.name.substr(2, 1))

        if (index === -1) {
          this.componentsMenu.push({
            name: comp.extendOptions.name.substr(2, 1),
            items: [comp.extendOptions.name]
          });
        } else {
          this.componentsMenu[index].items.push(comp.extendOptions.name)
        }
      }
    }
    this.currentNode = this.tree[0]
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
          type: name,
          children: []
        }
        this.getOptions(child)
        node.children.push(child)
      }
    },
    getOptions: function(child) {
      switch (child.name) {
        case 'v-btn':
          child.color = this.getRandColor()
          child.absolute = false
          child.block = false
          child.bottom = false
          child.dark = false
          child.depressed = false
          child.disabled = false
          child.fab = false
          child.fixed = false
          child.flat = false
          child.large = false
          child.light = false
          child.outline = false
          child.right = false
          child.ripple = false
          child.round = false
          child.rounded = false
          child.tag = 'button'
          child.text = child.name
          child.tile = false
          child.top = false
          child['x-large'] = false
          child['x-small'] = false
          break;
         case 'v-chip':
          child.close = false
          child.color = this.getRandColor()
          child.dark = false
          child.disabled = false
          child.label = false
          child.light = false
          child.outline = false
          child.selected = false
          child.small = false
          child['text-color'] = this.getRandColor()
          break;
        case 'v-card':
          child.color = this.getRandColor()
          child.dark = false
          child.disabled = false
          child.flat = false
          child.hover = false
          child.light = false
          child.ripple = false
          child.tag = 'div'
          child.tile = false
          break;
        case 'v-navigation-drawer':
          child.absolute = false
          child.clipped = false
          child.dark = false
          child.fixed = false
          child.floating = false
          child['mini-variant'] = false
          child['mini-variant-width'] = 80
          child['mobile-break-point'] = 1260
          child.permanent = false
          child.stateless = false
          child.temporary = false
          child.touchless = false
          break;
        default:
          break;
      }
    },
    getRandColor() {
      return '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    },
    activateNode: function() {
      this.currentNode = this.findNode(this.active[0], this.tree)
    }
  },
  watch: {
    active: 'activateNode'
  }
}
</script>
