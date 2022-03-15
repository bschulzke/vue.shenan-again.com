<template>
    <div class="main-view">
          <div class="grid-view">
            <div class="info">
              <div class="info-header">
                Character Concepts
              </div>
              <p>Your character concept is a one-sentence description of the character you'll play in Shenan-Again. See the rulebook for details on character creation.</p>
              <div class="display-rows">
                <select id="role-selector" class="form-select" aria-label="Default select example" v-model="selectedRole">
                  <option value="random" selected>Random Role</option>
                  <option value="burglar">Burglar</option>
                  <option value="muscle" >Muscle</option>
                  <option value="con">Con</option>
                  <option value="hacker">Hacker</option>
                </select>
                <br>
                <div class="button-wrapper">
                  <a class="large-button" @click="getRole">Generate</a>
                </div>
              </div>
            </div>
            <div class="grid-view card">
              <div id="generated-role" class="card-text">
                  <span class="card-text variable-word" @dblclick="getAdjective">{{adjective}}</span> {{role}} with {{article}} {{noun}}
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
          noun: 'test',
          selectedRole: 'random',
          role: 'con',
          nouns: this.$root.$data.nouns,
          adjectives: this.$root.$data.adjectives,
          roles: ['burglar', 'con', 'muscle', 'hacker'],
          colors: ['red','orange','yellow','green','blue','purple','pink','grey','black','brown'],
      }
  },
  computed: {
    article() {
    let article = "a";
     if (this.isVowel(this.noun.charAt(0))) {
            article = "an";   
        }
        if (this.noun.charAt(this.noun.length - 1) === 's') {
            article = "";
        } 
        return article;
    },
  },
  created() {
    this.noun = this.randomNoun();
    this.adjective = this.randomAdjective();
    this.role = this.randomRole();
  },
    watch: {
    selectedRole(newRole) {
      if (newRole === 'random') {
        this.role = this.randomRole();
      } else {
        this.role = this.selectedRole;
      }
    }
  },
  methods: {

    randomRole() {
      let index = this.randomInt(4);
      return this.roles[index];
    },

    getRole() {
      if (this.selectedRole === 'random') {
        this.role = this.randomRole();
      } else {
        this.role = this.selectedRole;
      }
      this.adjective = this.randomAdjective();
      this.noun = this.randomNoun();
    },

    getAdjective() {
      this.adjective = this.adjectives[this.randomInt(this.adjectives.length)];
    },

    randomAdjective() {
      return this.adjectives[this.randomInt(this.adjectives.length)];
    },

    randomNoun() {
      let randNoun = this.nouns[this.randomInt(this.nouns.length)];
      if (!this.isAdjective(randNoun)) {
        return randNoun;
      } else {
        return (randNoun + " " + this.randomNoun());
      }
    },

    isVowel(char) {
      return (
        char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
      );
    },

    randomInt(max) {
      return Math.floor(Math.random() * max);
    },
    isAdjective(noun) {
      let isGerund = noun.charAt(noun.length - 1) === 'g' && noun.charAt(noun.length - 2) === 'n' && noun.charAt(noun.length - 3) === 'i';
      let endsInY = noun.charAt(noun.length - 1) === 'y' && (noun.charAt(noun.length - 2) === 'c' || noun.charAt(noun.length - 2) === 'g' || noun.charAt(noun.length - 2) === 'm');
      let ual = noun.charAt(noun.length - 1) === 'l' && noun.charAt(noun.length - 2) === 'a' && noun.charAt(noun.length - 3) === 'u';
      let ics = noun.charAt(noun.length - 1) == 's' && noun.charAt(noun.length - 2) == 'c' && noun.charAt(noun.length - 3) == 'i';
      let ial =  noun.charAt(noun.length - 1) == 'l' && noun.charAt(noun.length - 2) == 'a' && noun.charAt(noun.length - 3) == 'i';
      let inal = noun.charAt(noun.length - 1) == 'l' && noun.charAt(noun.length - 2) == 'a' && noun.charAt(noun.length - 3) == 'n' && noun.charAt(noun.length - 4) === 'i';
      let isColor = this.colors.includes(noun);
    return (
        isGerund || endsInY || ual || ics || ial || inal || isColor
    );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-view {
    height: 100%;
    padding-top: 3.5rem;
    margin-top: 1rem;
  }
    @media only screen and (min-width: 901px) {
      .info {
          padding: 3rem 5rem;
          margin-top: 2rem;
      }
    }
  .card-text {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
  }  
</style>
