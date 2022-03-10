<template>
  <div class="about">
    <InfoBox :header="header1" :paragraphs="paragraphs1"></InfoBox>
    <InfoBox :header="header2" :paragraphs="paragraphs2" :buttonText="buttonText" :buttonLink="buttonLink"></InfoBox>
  </div>
</template>

<script>
// @ is an alias to /src
import InfoBox from '@/components/InfoBox.vue'

export default {
  name: 'AboutView',
  components: {
    InfoBox
  },
  data() {
    return {
      header1: "Shenan-Again: A Tabletop Roleplaying Game",
      paragraphs1: [
          {text: "Shenan-Again is a game of controlled chaos. You gather with your friends around the table and take on the role of a crew of thieves as they try to pull off a daring heist. You'll enjoy thrilling successes, and face crushing—but often hilarious—failures."},
          {text: "Shenan-Again is a game about taking risks and learning from mistakes. It's about second (and third) chances. See, Shenan-Again isn't just a heist story. It's a time-loop heist story."},
          {text: "In Shenan-Again, your characters relive the same heist three times, giving you three chances to get it right. On that first attempt, things will quickly fall to pieces, but the second and third time around you'll be able to perfect your plan."},
      ],
      header2: "What's a Tabletop Roleplaying Game?",
      paragraphs2: [
          {text: "A tabletop roleplaying game, or TTRPG, is a collaborative storytelling game. Each player takes on the of one of the protagonists of the story, except one—the Gamemaster."},
          {text: "As the Gamemaster, you present your players with people and obstacles that get between the players and their goal."},
          {text: "As a player, you decide how you'd like to solve these problems. With each action you attempt, some dice—and a few other factors—will determine if you nail it or fail miserably. That's where the rules of the game come in."},
      ],
      buttonText: "Rulebook",
      buttonLink: "/rulebook",
      }
    }
  }
</script>

<style scoped>

  .about {
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
  }

</style>