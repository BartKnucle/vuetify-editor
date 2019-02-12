import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import  * as components  from 'vuetify/lib/components'
import 'vuetify/src/stylus/app.styl'

Vue.use(
  Vuetify, {
    components: components,
    iconfont: 'md'
  }
)
