<template>
<div  class="main-view">
    <div id="home-info" class="info vertical">
        <p class="info-header">Bend Time</p>
        <p class="mid-tagline info-header">Control the Chaos</p>
        <p class="last-tagline info-header">Perfect Your Heist</p>
        <div class="button-wrapper">
          <router-link class="large-button" to="/about">Learn More</router-link>
        </div>
    </div>
</div>    
</template>

<script>
export default {
  name: 'InfoBox',
}
</script>

<style scoped>
  .main-view {
    height: 100%;
    display: flex;
    justify-content: center;
  }

    @media only screen and (min-width: 901px) {
      .info {
          padding: 3rem 5rem;
          margin-top: 2rem;
      }
    }

</style>
