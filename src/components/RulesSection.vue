<template>
<div class="section">
    <p class="title">{{title}}</p>
    <RulesParagraph v-for="paragraph in paragraphs" :key="paragraph" :content="paragraph"/>
    <div v-for="subsection in subsections" :key="subsection.title" class="subsection">
      <p class="title">{{subsection.title}}</p>
      <RulesParagraph v-for="paragraph in subsection.paragraphs" :key="paragraph" :content="paragraph"/>
    </div>       
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
    subsections: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section {
    height: 100vh;
    overflow: auto;
    padding-bottom: 12rem;
    padding-top: 1.5rem;
  }
  .title {
    text-align: center;
    text-decoration: underline;
    margin-bottom: 0;
    font-style: italic;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

    @media only screen and (min-width: 1200px) {
        .section {
            padding-left: 28%;
            padding-right: 28%;
            font-size: 18px;
        }
        body {
          overflow: visible;
        }
    }

</style>
