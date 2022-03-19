<template>
    <div class="main-view">
          <div class="grid-view">
            <div class="info">
              <div class="info-header">
                Character Concepts
              </div>
              <p>Generate and customize character Concepts&#8212;one-sentence descriptions of Shenan-Again characters. 
                See the <router-link to="/rulebook">rulebook</router-link> for details on character creation.</p>
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
              <div class="card-menu">
                <span @click="openCard" v-if="!editing"><font-awesome-icon icon="fa-regular fa-pen-to-square" class="card-option"/></span>
                <span @click="closeCard" v-if="editing"><font-awesome-icon icon="fa-solid fa-xmark" class="card-option"/></span>
                <font-awesome-icon icon="fa-regular fa-floppy-disk" class="card-option"/>
              </div>
              <div id="generated-role" class="card-text">
                  <span v-if="!showAdjectiveBox" id="adjective" class="card-text variable-word" v-on:click="toggleAdjective">{{adjective}}</span> 
                  <input v-if="showAdjectiveBox" v-model="adjective" v-on:keyup.enter="toggleAdjective" class="card-text small-input"/>
                  <span v-if="!showRoleBox" id="role" class="card-text variable-word" v-on:click="toggleRole"> {{role}}</span> 
                  <input v-if="showRoleBox" v-model="role" v-on:keyup.enter="toggleRole" class="card-text small-input"/>
                  with {{article}} 
                  <span v-if="!showNounBox" id="noun" class="card-text variable-word" @click="toggleNoun">{{noun}}</span>
                  <input v-if="showNounBox" v-model="noun" v-on:keyup.enter="toggleNoun" class="card-text small-input"/>
              </div>
            </div>
            </div>
    </div>    
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

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
          showAdjectiveBox: false,
          showNounBox: false,
          showRoleBox: false,
          editing: false,
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
    },
    editing(newBool) {
      if (newBool === false) {
        this.showRoleBox = false;
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

    getNoun() {
      this.noun = this.nouns[this.randomInt(this.nouns.length)];
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
    },
    toggleAdjective() {
      this.showAdjectiveBox = !this.showAdjectiveBox;
      if (!this.showNounBox && !this.showRoleBox) {
        this.editing = !this.editing;
      }
    },
    toggleNoun() {
      this.showNounBox = !this.showNounBox;
      if (!this.showAdjectiveBox && !this.showRoleBox) {
        this.editing = !this.editing;
      }
    },
    toggleRole() {
      this.showRoleBox = !this.showRoleBox;
      if (!this.showAdjectiveBox && !this.showBox) {
        this.editing = !this.editing;
      }
    },
    closeCard() {
      this.showAdjectiveBox = false;
      this.showNounBox = false;
      this.showRoleBox - false;
      this.editing = false;
    },
    openCard() {
      this.showAdjectiveBox = true;
      this.showNounBox = true;
      this.showRoleBox = true;
      this.editing = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-view {
    height: 100%;
    /* padding-top: 5rem;
    margin-top: 2rem; */
  }
    @media only screen and (min-width: 901px) {
      .info {
          padding: 3rem 5rem;
          margin-top: 2rem;
      }
      .variable-word:hover {
        color: #3e83D0;
        cursor: pointer;
        font-weight: bold;
        font-style: italic;
      }
    }
    @media only screen and (max-width: 900px) {
      .variable-word {
        color: #3e83D0;
        font-weight: bold;
        font-style: italic;
      }
      .card {
        padding-bottom: 2rem;
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
  .card-option path {
    fill: #3e83D0;
  }
  .card-option {
    padding: 0 0.25rem;
    max-height: 1.25rem;
  }
  .card-option:hover {
    cursor: pointer;
  }
  .card-menu {
    position:absolute;
    right:0;
    top:0;
    margin: 0.5rem;
  }
</style>
