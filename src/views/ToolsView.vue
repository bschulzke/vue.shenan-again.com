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
                    <div id="add-dice" class="plus" @click="addDice">&plus;</div>
                    <div class="plus" @click="subtractDice">&minus;</div>
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
  name: 'RuleView',

  data() {
    return {
        header: "Probability Charts",
        paragraphs: [
            {text: "These charts help you decide how many dice to roll for a given challenge"},
            {text: "The tables show the nunber of dice rolled on the left, and on the right, the probability of rolling at least one of the target number(s)"},
            {text: "The charts show the same info, graphed visually on a curve"},
            {text: "For example, if you roll three dice, you've only got a 42% chance of rolling at least one 6, while on five dice, that goes up to 60%"},
        ],
        rawHtml: `<a href="">TESTING</a>`,
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
