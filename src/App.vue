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
            :key="item.type"
            @click="addChild(item)">
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
      var componentException = [
            'VMenuTransition',
            'VDialogTransition',
            'VDialogBottomTransition',
            'VScaleTransition',
            'VTabTransition',
            'VTabReverseTransition',
            'VFabTransition',
            'VFadeTransition',
            'VSlideXTransition',
            'VSlideYTransition',
            'VSlideXReverseTransition',
            'VSlideYReverseTransition',
            'VExpandTransition',
            'VExpandXTransition',
            'VCarouselTransition',
            'VCarouselReverseTransition',
            'VScrollXTransition',
            'VScrollXReverseTransition',
            'VScrollYTransition',
            'VScrollYReverseTransition',
            'VRowExpandTransition',
            'VCardMedia', //Depreciated
            'VJumbotron' //Depreciated
          ]
      var isNotException = componentException.findIndex(e => e === component)

      if (comp.extendOptions && (isNotException === -1)) {
        let index = this.componentsMenu.findIndex(item => item.name === comp.extendOptions.name.substr(2, 1))

        if (index === -1) {
          this.componentsMenu.push({
            name: comp.extendOptions.name.substr(2, 1),
            items: [{
              name: component,
              type: comp.extendOptions.name
            }]
          });
        } else {
          this.componentsMenu[index].items.push({
            name: component,
            type: comp.extendOptions.name
          })
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
    addChild: function(item) {
      if (this.active.length) {
        var node = this.findNode(this.active[0], this.tree)
        var child = {
          id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
          name: item.name,
          type: item.type,
          children: []
        }
        this.getOptions(child)
        node.children.push(child)
      }
    },
    getOptions: function(child) {
      //console.log(this.$parent.$options.components[child.name])
      /*for (var props in this.$parent.$options.components[child.name].options.props) {
        if (!this.$parent.$options.components[child.name].options.props[props].default) {
          child[props] = null
        }
      }*/
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
