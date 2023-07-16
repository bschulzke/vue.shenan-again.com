<template>
<div class="main-view">
    <div class="info">
      <p class="info-header">{{header}}</p>
      <p v-for="paragraph in paragraphs" :key="paragraph.text">{{paragraph.text}}</p>
        <div class="button-wrapper" v-if="buttonText">
        <router-link v-if="useRouter" class="large-button" :to="buttonLink">{{buttonText}}</router-link>  
        <a v-if="!useRouter && !targetBlank" class="large-button" :href="buttonLink">{{buttonText ? buttonText : 'Button' }}</a>
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
    paragraphs: Array,
    targetBlank: Boolean,
    rawHtml: String,
    useRouter: Boolean,
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

</style>
