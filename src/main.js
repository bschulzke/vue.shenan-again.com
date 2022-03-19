import Vue from 'vue'
import App from './App.vue'
import router from './router'
import adjectives from './adjectives.js'
import nouns from './nouns.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faEnvelope)

import { fab } from '@fortawesome/free-brands-svg-icons';
 
library.add(fab);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

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
