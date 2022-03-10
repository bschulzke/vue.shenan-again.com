<template>
<div class="main-view">
    <div class="info">
      <p class="info-header">{{header}}</p>
      <p v-for="paragraph in paragraphs" :key="paragraph.text">{{paragraph.text}}</p>
        <div class="button-wrapper">
          <a class="large-button fullscreen" href="/resources/rulebook.pdf" target="_blank">{{buttonText ? buttonText : 'Button' }}</a>
          <a class="large-button mobile-only" href="/resources/rulebook.pdf" target="_blank">{{mobileButton ? mobileButton : buttonText? buttonText : 'Button' }}</a>
        </div>       
    </div>
  </div>    
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    header: String,
    buttonText: String,
    mobileButton: String,
    buttonLink: String,
    paragraphs: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-view {
    height: 100%;
    display: flex;
    justify-content: center;
  }
    @media only screen and (min-width: 901px) {
      .info {
          padding: 2rem 5rem;
          margin-top: 2rem;
      }
    }
  @media only screen and (max-width: 900px) {
      
  }
</style>
