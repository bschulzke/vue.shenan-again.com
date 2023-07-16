<template>
  <div class="home">
      <p class="part-title">{{partTitle}}</p>
      <hr/>
    <RulesSection class="section" :paragraphs="paragraphs" :title="sectionTitle"/>
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
    RulesSection
  },
  data() {
    return {
      sections: this.$root.$data.sections,
      page: 0
    }
  },
  computed: {
    partTitle() {
      if (this.page < 4) {
        return "Introduction"
      } else {
        return "The Mark"
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
    }
  }
}

</script>

<style scoped>

  .footer {
    color: rgb(35, 35, 35);
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
    bottom: 0.25rem;
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
    height: 2rem;
    background-color: rgb(165, 174, 183);
  }

  .part-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0;
  }

  hr {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 901px) {
        .home {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
    }

</style>
