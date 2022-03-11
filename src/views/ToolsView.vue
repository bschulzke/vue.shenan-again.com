<template>
  <div class="tools">
      <div class="grid-view">
            <img class="fullscreen" src="/images/chart-key.png"/>
            <InfoBox :header="header" :paragraphs="paragraphs" :rawHtml="rawHtml"/>
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
// @ is an alias to /src
import InfoBox from '@/components/InfoBox.vue'

export default {
  name: 'RuleView',
  components: {
    InfoBox
  },
  data() {
    return {
        header: "Probability Charts",
        paragraphs: [
            {text: "These charts help you decide how many dice to roll for a given challenge"},
            {text: "The tables show the nunber of dice rolled on the left, and on the right, the probability of rolling at least one of the target number(s)"},
            {text: "The charts show the same info, graphed visually on a curve"},
            {text: "For example, if you roll three dice, you've only got a 42% chance of rolling at least one 6, while on five dice, that goes up to 60%"},
        ],
        rawHtml: `<a href="">TESTING</a>`,
      }
    }
  }
</script>

<style scoped>

  .tools {
    display: flex;
    justify-content: center;
    padding: 4rem 0;
    background-color: rgba(229,229,229, 0.65);
    flex-direction: column;
  }

</style>
