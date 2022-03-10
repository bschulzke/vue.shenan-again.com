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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 0;
  }

</style>
