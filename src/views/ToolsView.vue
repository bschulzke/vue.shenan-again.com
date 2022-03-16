<template>
  <div class="tools" v-bind:style="{ height: showCharts ? 'auto' : '100%' }">
    <div class="tools-nav">
      <a @click="openCharts" :class="[{active : showCharts}]">Charts</a>
      <a @click="openCalculator" :class="[{active : showCalculator}]">Calculator</a>
      <a @click="openConcepts" :class="[{active : showConcepts}]">Concepts</a>
    </div>
    <ToolsCalc  v-show="showCalculator"></ToolsCalc>
    <ToolsCharts v-show="showCharts"></ToolsCharts>
    <ToolsConcepts v-show="showConcepts"></ToolsConcepts>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolsCalc from '@/components/ToolsCalc.vue'
import ToolsCharts from '@/components/ToolsCharts.vue'
import ToolsConcepts from '@/components/ToolsConcepts.vue'

export default {
  name: 'ToolsView',
    data() {
      return {
        activeTool: 'charts',
      }
    },
    components: {
      ToolsCalc,
      ToolsCharts,
      ToolsConcepts,
    },
    computed: {
      showCalculator() {
        return this.activeTool === 'calculator';
      },
      showCharts() {
        return this.activeTool === 'charts';
      },      
      showConcepts() {
        return this.activeTool === 'concepts';
      }
    },
    methods: {
      openCharts() {
        this.activeTool = 'charts';
      },
      openCalculator() {
        this.activeTool = 'calculator';
      },
      openConcepts() {
        this.activeTool = 'concepts';
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

  .tools-nav {
    position: absolute;
    top: 3.75rem;
    background-color: rgba(85, 83, 83, 0.9);
    width: 100%;
    justify-content: space-around;
    z-index: 2;
    height: 2rem;
  }

  a {
    padding: 0 1.5rem;
  }

  a:hover {
    border: solid white 2px;
    border-radius: 5px;
  }

  .tools-nav:hover {
    cursor: pointer;
  }

</style>
