<template>
  <div class="tools">
    <ToolsCalc/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolsCalc from '@/components/ToolsCalc.vue'

export default {
  name: 'ToolsView',
    data() {
      return {
        
      }
    },
    components: {
      ToolsCalc
  },
  }
</script>

<style scoped>

  .tools {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    background-color: rgba(229,229,229, 0.65);
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: absolute;
  }

</style>
