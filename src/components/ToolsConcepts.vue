<template>
    <div class="main-view">
                  <div class="grid-view">
            <div class="info">
              <div class="info-header">
                Character Concepts
              </div>
              <p>Your character concept is a one-sentence description of the character you'll play in Shenan-Again. See the rulebook for details on character creation.</p>
              <div class="display-rows">
                <select id="role-selector" class="form-select" aria-label="Default select example">
                  <option value="random" selected>Random Role</option>
                  <option value="burglar">Burglar</option>
                  <option value="muscle" >Muscle</option>
                  <option value="con">Con</option>
                  <option value="hacker">Hacker</option>
                </select>
                <br>
                <div class="button-wrapper">
                  <a class="large-button" onclick="getRole()">Generate</a>
                </div>
              </div>
            </div>
            <div class="grid-view card">
              <div id="generated-role" class="card-text">
                  {{adjective}} {{role}} with {{article}} {{noun}}
              </div>
            </div>
            </div>
    </div>    
</template>

<script>
export default {
  name: 'ToolsConcepts',
  data() {
      return {
          adjective: 'temporary',
          role: 'con',
          article: 'a',
          noun: 'test',
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-view {
    height: 100%;
    margin-top: 1rem;
  }
    @media only screen and (min-width: 901px) {
      .info {
          padding: 3rem 5rem;
          margin-top: 2rem;
      }
    }
</style>
