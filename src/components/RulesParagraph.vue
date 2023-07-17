<template>
  <p v-html="content" class="paragraph-content"></p>
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
  }

</style>
