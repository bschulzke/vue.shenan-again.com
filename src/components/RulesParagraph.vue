<template>
  <p class="paragraph-content">{{content}}</p>
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
    height: 100%;
    display: flex;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem;
  }

    @media only screen and (min-width: 901px) {
      
    }

</style>
