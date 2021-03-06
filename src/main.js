import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//bostrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//vue-router
import { router } from './routes'

//fonts
import './assets/fonts.scss'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


