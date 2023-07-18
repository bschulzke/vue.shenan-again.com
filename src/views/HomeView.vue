<template>
  <div class="home">
    <div class="options-icons">
      <font-awesome-icon @click="download" icon="fa-solid fa-download" class="option"/>
      <font-awesome-icon @click="toggleMenu" icon="fa-solid fa-bars" class="option menu-icon"/>
    </div>
    <p class="part-title">{{partTitle}}</p>
    <hr>
    <div v-if="menu" class="menu">
      <div @click="goToPage(0)" class="menu-section">
        <p class="menu-section-title">Intro</p>
      </div>
      <div class="menu-section" @click="goToPage(index + 1)" v-for="(section, index) in namedSections" :key="section.title">
        <p class="menu-section-title">{{section.title}}</p>
      </div>
      <font-awesome-icon @click="toggleMenu" v-if="menu" class="close-menu" icon="fa-solid fa-x"/>
    </div>
    <div class="desktop-menu">
      <div @click="goToPage(0)" class="menu-section">
        <p class="menu-section-title">Intro</p>
      </div>
      <div class="menu-section" @click="goToPage(index + 1)" v-for="(section, index) in namedSections" :key="section.title">
        <p class="menu-section-title">{{section.title}}</p>
      </div>
      <div class="download-wrapper">
        <font-awesome-icon @click="download" icon="fa-solid fa-download" class="desktop-download"/>
      </div>
    </div>
    <RulesSection class="section" :paragraphs="paragraphs" :title="sectionTitle" :subsections="subsections">
    </RulesSection>
    <div class="footer">
      <font-awesome-icon v-if="notFirstPage" @click="previous" class="footer-arrow left" icon="fa-solid fa-caret-left"/>
      <div class="page-number">{{pageNumber}}</div>
      <font-awesome-icon v-if="notLastPage" @click="next" class="footer-arrow right" icon="fa-solid fa-caret-right"/>
    </div>
    <div class="footer-background"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import RulesSection from "@/components/RulesSection.vue"

export default {
  name: 'HomeView',
  components: {
    RulesSection,
  },
  data() {
    return {
      sections: this.$root.$data.sections,
      page: 0,
      menu: false
    }
  },
  computed: {
    partTitle() {
      if (this.page < 2) {
        return "Introduction"
      } else if (this.page < 5) {
        return "Setup"
      } else if (this.page < 12) {
        return "Gameplay"
      }
       else if (this.page < 13) {
        return "Scenarios"
      } else {
        return "Conclusion"
      }
    },
    sectionTitle() {
      return this.sections[this.page].title
    },
    paragraphs() {
      return this.sections[this.page].paragraphs
    },
    pageNumber() {
      return this.page + 1;
    },
    notFirstPage() {
      return this.page > 0;
    },
    notLastPage() {
      return this.page < this.sections.length - 1;
    },
    namedSections() {
      return this.sections.slice(1);
    },
    subsections() {
      return this.sections[this.page].subsections;
    }
  },
  methods: {
    previous() {
      if (this.page > 0) {
        this.page = this.page - 1;
      }
    },
    next() {
      if (this.page <= this.sections.length) {
        this.page = this.page + 1;
      }
    },
    goToPage(index) {
      this.page = index;
      this.menu = false;
    },
    toggleMenu() {
      this.menu = !this.menu;
    },
    download() {
      const a = document.createElement('a');
      a.href = "./shenan-again.pdf";
      a.download = "shenan-again.pdf";
      a.click();
      document.removeChild(a);
    }
  }
}

</script>

<style scoped>

  .footer {
    color: rgb(35, 35, 35);
  }

  .footer-arrow {
    font-size: 24px;
    color: rgb(99, 105, 110);
  }

  .left {
    padding: 1rem 4rem 0.5rem 2rem;
    position: fixed;
    left: 0.5rem;
    bottom: 0rem;
    z-index: 1;
  }

  .right {
    padding: 1rem 2rem 0.5rem 4rem;
    position: fixed;
    right: 0.5rem;
    bottom: 0;
    z-index: 1;
  }

  .page-number {
    left: 50%;
    bottom: 0.4em;
    z-index: 1;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .footer-background {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 2.5rem;
    background-color: rgb(165, 174, 183);
  }

  .part-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  .options-icons {
    position: fixed;
    right: 0.5rem;
    top: 0.75rem;
    display: flex;
    align-items: center;
    color: rgb(130, 138, 147);
    font-size: 24px;
  }

  .option {
    padding: 0 0.75rem 0 0.75rem;
  }

  .option:hover {
  cursor: pointer;
}

  hr {
    margin-top: 0;
    margin-bottom: 0;
  }

.menu {
  z-index: 2;
  background-color: gray;
  position: absolute;
  top: 2.25rem;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 95%;
  color: white;
  overflow: auto;
  padding-top: 1rem;
}

.menu-section {
  padding-left: 20%;
  width: 100%;
  height: 3rem;
  border-radius: 5%;
}

.menu-section-title:hover {
  cursor: pointer;
  border-bottom: 1px solid white;
  font-weight: bold;
}

.menu-section-title {
  border-bottom: 1px solid white;
  width: 80%;
}

.close-menu {
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.desktop-menu {
  display: none;
  position: fixed;
  left: 0;
  bottom: 2rem;
  background-color: rgb(71, 75, 79);
  opacity: 95%;
  color: white;
  height: 100%;
  padding-top: 3rem; 
  width: 17rem;
  overflow: auto;
  padding-bottom: 1rem;
}

.download-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
}

.desktop-download {
  font-size: 2rem;
  border: 1px solid white;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 15%;
}

.desktop-download:hover {
  cursor: pointer;
  border: 2px solid white;
}

  @media only screen and (min-width: 1200px) {
        .home {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .options-icons {
          display: none;
        }
        .desktop-menu {
          display: block;
        }
        .menu-section {
          padding-left: 0.5rem;
        }
        .menu-section-title {
          border-bottom: transparent;
        } 
        .left:hover {
          cursor: pointer;
          color: white;
        }

        .right:hover {
          cursor: pointer;
          color: white;
        }
    }

</style>
