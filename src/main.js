import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'
import App from './App'
import router from './router'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
