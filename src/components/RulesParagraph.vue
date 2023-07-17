<template>
  <div v-html="content" class="paragraph-content"></div>
</template>

<script>
export default {


  name: 'RulesParagraph',
  props: {
    content: String
  }
}
</script>

<style scoped>
  .paragraph-content {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 1rem;
  }

</style>
