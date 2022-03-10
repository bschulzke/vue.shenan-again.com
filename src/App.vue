<template>
<div id="app">
     <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" href="/index.html"><img height=50px; src="/images/clock.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/"><div class="nav-link">Home</div></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/rulebook"><div class="nav-link">Rulebook</div></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/about.html">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/tools.html">Tools</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/contribute.html">Contribute</a>
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
    <a class="grey-link footer-text" href="pages/contact.html">Contact Us</a>
    <a class="footer-text fullscreen">&copy; 2022 Ben Schulzke</a>
  </nav>
</div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #app {
    height: 100%;
  }
</style>
