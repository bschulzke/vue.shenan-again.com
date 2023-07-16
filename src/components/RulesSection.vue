<template>
<div class="section">
    <p class="title">{{title}}</p>
    <RulesParagraph v-for="paragraph in paragraphs" :key="paragraph" :content="paragraph"/>       
  </div>    
</template>

<script>
import RulesParagraph from "@/components/RulesParagraph.vue"

export default {
  name: 'RulesSection',
  components: {
    RulesParagraph
  },
  props: {
    title: String,
    paragraphs: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section {
    height: 100vh;
    overflow: scroll;
    padding-bottom: 2rem;
    padding-top: 1rem;
  }
  .title {
    text-align: center;
    text-decoration: underline;
    margin-bottom: 0;
    font-style: italic;
  }

    @media only screen and (min-width: 901px) {
        .section {
            max-width: 900px;
        }
    }

</style>
