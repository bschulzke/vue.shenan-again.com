<template>
<div id="app">  
  <router-view/>
</div>
</template>

<script>
import $ from 'jquery'
  export default {
    computed: {
    currentRouteName() {
        return this.$route.name;
    },
    home() {
      return this.currentRouteName == 'home';
    },
    rulebook() {
      return this.currentRouteName == 'rulebook';
    },
    about() {
      return this.currentRouteName == 'about';
    },
    tools() {
      return this.currentRouteName == 'tools';
    },
    contribute() {
      return this.currentRouteName == 'contribute';
    },
  },
  methods: {
    closeMenu() {
      $('.navbar-toggler').click();
    }
  },
}
</script>

<style scoped>
  #app {
    height: 100%;
  }
</style>
