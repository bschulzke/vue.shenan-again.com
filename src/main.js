import Vue from 'vue'
import App from './App.vue'
import router from './router'
import adjectives from './adjectives.js'
import nouns from './nouns.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

let data = {
  adjectives,
  nouns,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
