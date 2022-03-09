<template>
<div>
<img class="background-image" src="/images/background.png"/>
  <div class="main-view">
    <div id="home-info" class="info vertical">
        <p class="info-header">Bend Time</p>
        <p class="mid-tagline info-header">Control the Chaos</p>
        <p class="last-tagline info-header">Perfect Your Heist</p>
        <div class="button-wrapper">
          <a class="large-button" href="/pages/about.html">Learn More</a>
        </div>
    </div>
  </div>    
</div>    
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
