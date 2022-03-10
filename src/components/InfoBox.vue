<template>
<div class="main-view">
    <div class="info">
      <p class="info-header">{{header}}</p>
      <p v-for="paragraph in paragraphs" :key="paragraph.text">{{paragraph.text}}</p>
        <div class="button-wrapper" v-if="buttonText">
        <a v-if="!targetBlank" class="large-button" :href="buttonLink">{{buttonText ? buttonText : 'Button' }}</a>
          <a v-if="targetBlank" class="large-button" :href="buttonLink"  target="_blank">{{buttonText ? buttonText : 'Button' }}</a>
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
    buttonLink: String,
    paragraphs: Object,
    targetBlank: Boolean,
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
          padding: 3rem 5rem;
          margin-top: 2rem;
      }
    }
  @media only screen and (max-width: 900px) {
      
  }
</style>
