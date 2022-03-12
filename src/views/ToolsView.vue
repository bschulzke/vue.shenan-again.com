<template>
  <div class="tools">
        <div class="grid-view">
            <div class="info">
            <div class="info-header">
              Probability Calculator
            </div>
            <p>Calculate how likely you are to roll at least one 
                <select v-model="targets" class="form-select number-dropdown" aria-label="Default select example">
                  <option class="number-dropdown" value="six" selected>6</option>
                  <option class="number-dropdown" value="fiveOrSix">5 or 6</option>
                  <option class="number-dropdown" value="fourFiveOrSix" >4, 5 or 6</option>
                </select>
               on any number of dice.</p>
            <div class="prob-calculator">
              <div class="prob-selector">
                <div class="form-outline">
                  <input min=0 value=1 v-model="numDice" oninput="this.value = Math.abs(this.value)" type="number" id="dice-selector" class="form-control"/>
                </div>
                <div class="incrementer">
                  <div>
                    <div id="add-dice" class="plus" v-on:click="addDice">&plus;</div>
                    <div class="plus" v-on:click="subtractDice">&minus;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="prob-card" class="grid-view card">
            <div id="prob-results" class="card-text">
              {{ percentChance }}% chance of rolling at least one {{targetPhrase}} on {{numDice}} dice
            </div>
          </div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ToolsView',

  data: function() {
    return {
        numDice: 1,
        targets: 'six',
        six: [0,17,31,42,52,60,67,72,77,81,84,87,88,90,92,94,94,95,96,97,97,98],
        fiveOrSix: [0,31,52,67,77,84,89,92,95,96,97,99,99,99,99,99,99,99,],
        fourFiveOrSix: [0,42,67,81,89,94,96,98,99,99,99.6,],
      }
    },
    computed: {
      percentChance() {
            if (this.targets === 'six') {
                if (this.numDice < 22) {
                    return this.six[this.numDice];
                } else {
                    return 99;
                }
            } else if (this.targets === 'fiveOrSix') {
                if (this.numDice < 18) {
                    return this.fiveOrSix[this.numDice];
                } else {
                    return 99.99;
                } 
            } else {
                if (this.numDice < 11) {
                    return this.fourFiveOrSix[this.numDice];
                } else {
                    return 99.99;
                }
            }
        },
        targetPhrase() {
            if (this.targets === 'six') {
                return "six";
            } else if (this.targets === 'fiveOrSix') {
                return "five or six";
            } else if (this.targets === 'fourFiveOrSix') {
                return "four, five or six";
            }
            return "";
        }
    },
    methods: {
      addDice() {
        this.numDice++;
      },
      subtractDice() {
        if (this.numDice > 0) {
          this.numDice--;
        }
      }      
    }
  }
</script>

<style scoped>

  .tools {
    display: flex;
    justify-content: center;
    padding: 4rem 0;
    background-color: rgba(229,229,229, 0.65);
    flex-direction: column;
    height: 100%;
  }

</style>
