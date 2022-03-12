<template>
  <div class="contribute">
    <InfoBox :header="header" :buttonText="buttonText" :buttonLink="buttonLink" :paragraphs="paragraphs" :targetBlank="targetBlank"/>
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
      header: "Contribute",
      paragraphs: [
          { text: "Our goal is for Shenan-Again to be completely and truly free to play, for as many people as possible. " + 
          "So instead of asking you to pay cash for the rulebook, we'd like you to pay it forward in a different way." },
          { text: "Here's the basic idea: after you've played a game or two of Shenan-Again yourself, find a way to share it with someone new." },
          { text: "You might post about us on social media, share this website with a friend, or write us a review in your blog. " +
          "If your friend GMed the game for you, maybe you'll get together a new group and run it with them." },
          { text: "Then, just explain how you chose to pay it forward with this three-question report" },
          { text: "We hope you enjoy the game, and we can't wait to hear what kinds of crazy shenanigans it leads you to!" }
      ],
      buttonText: "Pay it Forward",
      buttonLink: "https://forms.gle/86kuP8G59N3anrbX7",
      targetBlank: true,
      }
    }
  }
</script>

<style scoped>

  .contribute {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    flex-direction: column;
    width: 100%;
    position: absolute;
  }

     @media only screen and (min-width: 901px) {
    .contribute {
      height: 100%;
    }
  }

</style>
