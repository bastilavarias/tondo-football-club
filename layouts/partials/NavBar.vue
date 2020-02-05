<template>
  <v-app-bar app :color="`${isUserScrolledDown || !isInHomePage ? 'primary' : 'transparent'}`" dark
             :flat="!isUserScrolledDown" hide-on-scroll>
    <v-toolbar-title>
      <span v-if="isUserScrolledDown || !isInHomePage">Tondo Football Club</span>
      <v-img :src="require('../../assets/tondoFootballClubLogo.png')" height="60" width="60" v-else></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            text
            class="text-capitalize white--text"
            :to="{ name: 'index' }"
            exact
            active-class="nav-bar-button-active"
          >
            <span class="mr-1">Home</span>
            <v-icon small>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-home-menu></nav-bar-home-menu>
      </v-menu>
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            text
            class="text-capitalize white--text"
          >
            <span class="mr-1">Matches</span>
            <v-icon small>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-matches-menu></nav-bar-matches-menu>
      </v-menu>
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            text
            class="text-capitalize white--text"
          >
            <span class="mr-1">Programs</span>
            <v-icon small>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-programs-menu></nav-bar-programs-menu>
      </v-menu>
      <v-btn text class="text-capitalize white--text" :to="{ name: 'articles' }"
             exact active-class="nav-bar-button-active"
      >Articles
      </v-btn>
      <v-btn text class="text-capitalize">Store</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
    import NavBarHomeMenu from "../../components/NavBarHomeMenu";
    import NavBarMatchesMenu from "../../components/NavBarMatchesMenu";
    import NavBarProgramsMenu from "../../components/NavBarProgramsMenu";

    export default {
        name: "nav-bar",
        components: {NavBarProgramsMenu, NavBarHomeMenu, NavBarMatchesMenu},
        data() {
            return {
                scrollY: 0
            };
        },

        computed: {
            isUserScrolledDown() {
                if (process.browser) {
                    return this.scrollY > window.screen.height - 200;
                }
            },

            isInHomePage() {
                if (process.browser) {
                    return this.$route.name === "index";
                }
            }
        },

        methods: {
            handleUserScrollEvent(event) {
                if (event.type === "scroll" && process.browser) {
                    this.scrollY = window.scrollY;
                }
            }
        },

        mounted() {
            if (process.browser) {
                window.addEventListener("scroll", this.handleUserScrollEvent);
            }
        }
    };
</script>

<style scoped>
  .nav-bar-button-active::before {
    color: transparent
  }

  .nav-bar-button-active:hover {
    color: red;
  }
</style>
