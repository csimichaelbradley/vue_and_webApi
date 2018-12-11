import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { WindowInstaller } from '@progress/kendo-window-vue-wrapper'

Vue.use(GridInstaller, WindowInstaller);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
