<template>
<div id="app">
     <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand"><img height=50px; src="/images/clock.png"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/"><div @click="closeMenu"  :class="['nav-link', {active : home}]">Home</div></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/rulebook"><div @click="closeMenu"  :class="['nav-link', {active : rulebook}]">Rulebook</div></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about"><div @click="closeMenu"  :class="['nav-link', {active : about}]">About</div></router-link>
        </li>
        <li v-on:click="closeMenu" class="nav-item">
          <router-link to="/tools"><div @click="closeMenu"  :class="['nav-link', {active : tools}]">Tools</div></router-link>
        </li>
        <li v-on:click="closeMenu"  class="nav-item">
          <router-link to="/contribute"><div @click="closeMenu"  :class="['nav-link', {active : contribute}]">Contribute</div></router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="background-image greyBackground"><img src="/images/background.png"/></div>
<router-view/>
  <nav class="navbar footer fixed-bottom navbar-dark bg-dark">
    <a href="https://github.com/bschulzke/vue.shenan-again.com"  target="_blank"><font-awesome-icon icon="fa-brands fa-github" class="grey-link"/></a>
    <div>
    <a class="footer-text fullscreen">&copy; 2022 Ben Schulzke</a>
    <router-link to="/contact"><font-awesome-icon icon="fa-regular fa-envelope" class="grey-link" /></router-link>
    </div>
  </nav>
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
      @media only screen and (min-width: 901px) {
        .nav-link {
          width: 7rem;
        }
    }
  .grey-link path {
    fill: grey;
  }
  .footer {
    padding-bottom: 2rem;
  }
  .footer-text {
    padding: 0 1rem;
  }
  .greyBackground {
    background-color: rgba(229,229,229, 0.65);
  }
</style>
