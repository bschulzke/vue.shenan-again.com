import Vue from 'vue'
import App from './App.vue'
import router from './router'
import adjectives from './adjectives.js'
import nouns from './nouns.js'

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
