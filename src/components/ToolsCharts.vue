<template>
<div class="main-view">
    <div class="grid-view">
        <img class="fullscreen" src="/images/chart-key.png"/>
        <div class="info">
          <div class="info-header">
            Probability Charts
          </div>
          <p>
            Use these charts to help decide how many dice you'll roll for a given challenge
          </p>
          <p>The tables show the nunber of dice rolled on the left, and on the right,
            the probability of rolling at least one of the target number(s)</p>
          <p>
            The charts show the same info, graphed visually on a curve
          </p>
          <p> 
            For example, if you roll three dice, you've only got a 42% chance of rolling at least one 6, 
            while on five dice, that goes up to 60%
          </p>
          <p>See the <router-link to="/rulebook">rulebook</router-link> for details on challenges rolls</p>
        </div>
    </div>
        <div class="grid-view">
          <img class="grid-image" src="/images/table-6.png"/>
          <img class="grid-image" src="/images/table-5-6.png"/>
          <img class="grid-image" src="/images/table-4-5-6.png"/>
        </div>
      <div class="grid-view">
        <img class="grid-image" src="/images/chart-6.png"/>
        <img class="grid-image" src="/images/chart-5-6.png"/>
        <img class="grid-image" src="/images/chart-4-5-6.png"/>
      </div> 
  </div>    
</template>

<script>
export default {
  name: 'ToolsCharts',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-view {
    height: 100%;
  }
    @media only screen and (min-width: 901px) {
      .info {
          padding: 3rem 5rem;
          margin-top: 2rem;
      }
    }
</style>
