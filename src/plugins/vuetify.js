import Vue from 'vue'
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VFadeTransition,
  VBtn,
  VCard
} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(
  Vuetify, {
    components: {
      VApp,
      VNavigationDrawer,
      VFooter,
      VToolbar,
      VFadeTransition,
      VBtn,
      VCard
    },
    iconfont: 'md'
  }
)
