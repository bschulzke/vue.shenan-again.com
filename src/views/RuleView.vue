<template>
  <div class="rulebook">
    <InfoBox :header="header" :buttonText="buttonText" :paragraphs="paragraphs" :buttonLink="buttonLink" :targetBlank="targetBlank"/>
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
      header: "Shenan-Again Rulebook",
      paragraphs: [
          {text: "Welcome to Shenan-Again: the Time-Loop Heist RPG"},
          {text: "Grab some paper, pencils, a handful of dice, and download the free rulebook below"},
          {text: "We won't charge you a dime for the book. That's right, the game is free! We want as many people as possible to play. We do have one request, though."},
          {text: "If you like the game, choose some way to pay it forward. What that means is up to you, but we have a few suggestions to get you started. We're excited to get this game out of our heads and onto your table!"}
      ],
      buttonText: "Download",
      buttonLink: "/resources/rulebook.pdf",
      targetBlank: true,
      }
    }
  }
</script>

<style scoped>

  .rulebook {
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 4rem 0;
  }

</style>
