<template>
        <div class="main-view" :style="{margin: hasSavedCards ? '6rem auto' : '0'}">
            <div class="grid-view">
            <div class="top-grid"> 
              <div class="info">
              <div class="info-header">
                Character Cards
              </div>
              <p>Create and save character Cards&#8212;one-sentence descriptions of Shenan-Again characters.
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
            </div>
            <div class="grid-view">
            <div class="card">
              <div class="card-menu">
                <span @click="openCard" v-if="!editing"><font-awesome-icon icon="fa-regular fa-pen-to-square" class="card-option"/></span>
                <span @click="closeCard" v-if="editing"><font-awesome-icon icon="fa-solid fa-xmark" class="card-option"/></span>
                <span @click="saveCard"><font-awesome-icon icon="fa-regular fa-floppy-disk" class="card-option"/></span>
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
            <div class="grid-view">
            <div v-if="hasSavedCards"  class="card">
              <div @click="deleteCard" class="card-trash">
                <span><font-awesome-icon icon="fa-solid fa-trash" class="card-option"/></span>
              </div>
                <span @click="roleIndex--" id="left-arrow" ><font-awesome-icon icon="fa-solid fa-angle-left" :class="leftArrow"/></span>
                <span @click="roleIndex++" id="right-arrow" ><font-awesome-icon icon="fa-solid fa-angle-right" :class="rightArrow"/></span>
              <div id="saved-role" class="card-text">
              <div id="saved-role" class="card-text">
                <div id="generated-role" class="card-text">
                  <span v-if="!showSavedAdjBox" id="savedAdjective" class="card-text variable-word" v-on:click="toggleSavedAdj">{{savedCards[roleIndex].adjective}}</span> 
                  <input v-if="showSavedAdjBox" v-model="savedCards[roleIndex].adjective" v-on:keyup.enter="toggleSavedAdj" class="card-text small-input"/>
                  <span v-if="!showSavedRoleBox" id="savedRole" class="card-text variable-word" v-on:click="toggleSavedRole"> {{savedCards[roleIndex].role}}</span> 
                  <input v-if="showSavedRoleBox" v-model="savedCards[roleIndex].role" v-on:keyup.enter="toggleSavedRole" class="card-text small-input"/>
                  with {{savedArticle}} 
                  <span v-if="!showSavedNounBox" id="savedNoun" class="card-text variable-word" @click="toggleSavedNoun">{{savedCards[roleIndex].noun}}</span>
                  <input v-if="showSavedNounBox" v-model="savedCards[roleIndex].noun" v-on:keyup.enter="toggleSavedNoun" class="card-text small-input"/>
                </div>
                </div>
              </div>
              <div id="index-indicator" class="card-text"> {{roleIndex + 1}} / {{savedCards.length}}</div>
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
          showSavedAdjBox: false,
          showSavedNounBox: false,
          showSavedRoleBox: false,
          savedCards: [],
          roleIndex: 0,
          currentId: 0,
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
    hasSavedCards() {
      if (this.savedCards.length > 0) {
        return true;
      }
      else {
        return false;
      }
    },
    savedArticle() {
    let article = "a";
     if (this.isVowel(this.savedNoun.charAt(0))) {
            article = "an";   
        }
        if (this.savedNoun.charAt(this.savedNoun.length - 1) === 's') {
            article = "";
        } 
        return article;
    },
    savedNoun() {
      return this.savedCards[this.roleIndex].noun;
    },
    leftArrow() {
      if (this.roleIndex == 0) {
        return "arrow-faded";
      } else {
        return "arrow-active";
      }
    },
    rightArrow() {
      if (this.roleIndex == this.savedCards.length - 1) {
        return "arrow-faded";
      } else {
        return "arrow-active";
      }
    }
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
    },
    roleIndex(newIndex) {
      if (newIndex < 0) {
        this.roleIndex = 0;
      }
      if (newIndex > this.savedCards.length - 1) {
        this.roleIndex = this.savedCards.length - 1;
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
      if (!this.showAdjectiveBox && !this.showNounBox) {
        this.editing = !this.editing;
      }
    },
    toggleSavedAdj() {
      this.showSavedAdjBox = !this.showSavedAdjBox;
    },
    toggleSavedNoun() {
      this.showSavedNounBox = !this.showSavedNounBox;
    },
    toggleSavedRole() {
      this.showSavedRoleBox = !this.showSavedRoleBox;
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
    },
    saveCard() {
      let role = {adjective: this.adjective, role: this.role, noun: this.noun, id: this.currentId };
      this.currentId++;
      this.savedCards.push(role);
    },
      deleteCard() {
    let index = this.roleIndex;
    if (index > -1) {
      console.log(this.savedCards.splice(index, 1));
      if (this.roleIndex > 0) {
        this.roleIndex--;
      }
      }
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-view {
    width: 100%;
    height: 100vh;
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
      .top-grid {
        display: flex;
        flex-direction: row;
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
      .grid-view {
        padding: 1rem;
      }
      .main-view {
        /* margin: 5rem 0; */
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
  .arrow-active path {
    fill: grey;
  }
  .arrow-faded path {
    fill: #D3D3D3;
  }
  .arrow-active:hover {
    cursor: pointer;
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
  .card-trash {
    position:absolute;
    right:0;
    top:0;
  }
  .fa-trash {
    height: 1rem;
  }
  #left-arrow {
    position: absolute;
    padding-left: 0.5rem;
    left: 0;
    bottom: 40%;
  }
  #right-arrow {
    position: absolute;
    padding-right: 0.5rem;
    right: 0;
    bottom: 40%;
  }
  #index-indicator {
    position: absolute;
    bottom: 0.5rem;
    right: 1rem;
    font-size: 1rem;
    color: grey;
  }
</style>
