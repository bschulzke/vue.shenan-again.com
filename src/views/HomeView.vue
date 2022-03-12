<template>
  <div class="home">
    <HomeInfoBox/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeInfoBox from '@/components/HomeInfoBox.vue'

export default {
  name: 'HomeView',
  components: {
    HomeInfoBox
  }
}
</script>

<style scoped>

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  

</style>
