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
          <router-link to="/"><div :class="['nav-link', {active : home}]">Home</div></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/rulebook"><div :class="['nav-link', {active : rulebook}]">Rulebook</div></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about"><div :class="['nav-link', {active : about}]">About</div></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tools"><div :class="['nav-link', {active : tools}]">Tools</div></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contribute"><div :class="['nav-link', {active : contribute}]">Contribute</div></router-link>
        </li>
      </ul>
    </div>
  </nav>
  <img class="background-image" src="/images/background.png"/>
<router-view/>
  <nav class="navbar footer fixed-bottom navbar-dark bg-dark">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="footer-text grey-link" href="https://github.com/bschulzke/vue.shenan-again.com"  target="_blank">GitHub</a>
      </li>
    </ul>
    <router-link to="/contact"><div class="footer-text grey-link">Contact Us</div></router-link>
    <a class="footer-text fullscreen">&copy; 2022 Ben Schulzke</a>
  </nav>
</div>
</template>

<script>

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
    }
}
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
</style>
