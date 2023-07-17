import Vue from 'vue'
import App from './App.vue'
import router from './router'
import adjectives from './adjectives.js'
import sections from "./sections"

import nouns from './nouns.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons';
 
library.add(fab);
library.add(faFloppyDisk);
library.add(faX);
library.add(faBars);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let data = {
  adjectives,
  nouns,
  sections
}

new Vue({
  router,
  data,
  methods: {
    closeMenu() {
      this.$refs.fileInput.click()
    }
  },
  render: h => h(App)
}).$mount('#app')
