<template>
  <div class="rulebook">
    <iframe class="iframe-pdf" src="/resources/rulebook.pdf"></iframe>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'RuleView',
  components: {

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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    flex-direction: column;
    width: 100%;
    position: absolute;
    height: 100%;
  }

  .iframe-pdf {
    height: 100%;
    width: 100%;
  }

   @media only screen and (min-width: 901px) {
    .rulebook {
      height: 100%;
    }
  }

</style>
