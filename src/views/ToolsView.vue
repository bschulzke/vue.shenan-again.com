<template>
  <div class="tools" v-bind:style="{ height: showCalculator ? '100%' : 'auto' }">
    <ToolsCalc  v-if="showCalculator"></ToolsCalc>
    <ToolsCharts v-if="showCharts"></ToolsCharts>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolsCalc from '@/components/ToolsCalc.vue'
import ToolsCharts from '@/components/ToolsCharts.vue'

export default {
  name: 'ToolsView',
    data() {
      return {
        activeTool: 'calculator',
      }
    },
    components: {
      ToolsCalc,
      ToolsCharts,
    },
    computed: {
      showCalculator() {
        return this.activeTool === 'calculator';
      },
      showCharts() {
        return this.activeTool === 'charts';
      }
}
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
    /* height: 100%; */
    width: 100%;
    position: absolute;
  }

</style>
