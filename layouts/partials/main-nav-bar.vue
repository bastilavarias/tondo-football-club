<template>
  <v-app-bar app :color="isScrolled ? 'white' : 'transparent'" flat>
    <v-toolbar-title>
      <v-avatar :size="50">
        <v-img :src="require('../../assets/logos/tondoFC.png')"></v-img>
      </v-avatar>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn depressed :class="`${isScrolled ? 'button-user-scrolled' : 'button-user-not-scrolled'}`"
             :to="{ name: 'index' }" exact
      >
        Home
      </v-btn>
      <v-menu offset-y open-on-hover transition="slide-y-transition"
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed :class="`${isScrolled ? 'button-user-scrolled' : 'button-user-not-scrolled'}`" exact
                 v-on="on"
          >
            <span>Fixtures & Results</span>
            <v-icon :color="isScrolled ? 'primary' : 'white'">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-fixtures-and-results-menu></nav-bar-fixtures-and-results-menu>
      </v-menu>
      <v-menu offset-y open-on-hover transition="slide-y-transition"
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed :class="`${isScrolled ? 'button-user-scrolled' : 'button-user-not-scrolled'}`" exact

                 v-on="on"
          >
            <span>Match Schedules</span>
            <v-icon :color="isScrolled ? 'primary' : 'white'">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-match-schedules-menu></nav-bar-match-schedules-menu>
      </v-menu>
      <v-menu offset-y open-on-hover transition="slide-y-transition"
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed :class="`${isScrolled ? 'button-user-scrolled' : 'button-user-not-scrolled'}`" exact

                 v-on="on"
          >
            <span>Programs</span>
            <v-icon :color="isScrolled ? 'primary' : 'white'">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-programs-menu></nav-bar-programs-menu>
      </v-menu>
      <v-btn depressed :class="`${isScrolled ? 'button-user-scrolled' : 'button-user-not-scrolled'}`"
             :to="{ name: 'team' }" exact>
        Team
      </v-btn>
      <v-btn depressed :class="`${isScrolled ? 'button-user-scrolled' : 'button-user-not-scrolled'}`"
             :to="{name: 'articles'}">
        Nosi Balasi
      </v-btn>
      <v-menu offset-y open-on-hover transition="slide-y-transition"
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed :class="`${isScrolled ? 'button-user-scrolled' : 'button-user-not-scrolled'}`" v-on="on"
          >
            <span>About Us</span>
            <v-icon :color="isScrolled ? 'primary' : 'white'">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-about-us-menu></nav-bar-about-us-menu>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
    import NavBarMatchSchedulesMenu from "../../components/nav-bar-match-schedules";
    import NavBarProgramsMenu from "../../components/nav-bar-programs-menu";
    import NavBarAboutUsMenu from "../../components/nav-bar-about-us-menu";
    import NavBarFixturesAndResultsMenu from "../../components/nav-bar-fixtures-and-results-menu";

    export default {
        name: "main-nav-bar",
        components: {

            NavBarMatchSchedulesMenu,
            NavBarFixturesAndResultsMenu, NavBarAboutUsMenu, NavBarProgramsMenu
        },

        data() {
            return {
                scrollYPosition: 0
            };
        },

        computed: {
            isScrolled() {
                return this.scrollYPosition > 200;
            }
        },

        methods: {
            handleScroll() {
                this.scrollYPosition = window.scrollY;
            }
        },

        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },

        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    };
</script>

<style scoped>
  .button-user-scrolled,
  .button-user-not-scrolled {
    text-transform: capitalize;
  }

  .button-user-not-scrolled {
    background-color: transparent !important;
    color: #ffffff;
  }

  .button-user-not-scrolled::before {
    background-color: transparent;
    color: transparent;
  }

  .button-user-not-scrolled::after {
    background-color: transparent;
    color: transparent;
  }

  .button-user-scrolled {
    color: #000000;
  }

  .button-user-scrolled::before {
    color: transparent;
  }

  .button-user-scrolled::after {
    color: transparent;
  }


  .nav-bar-button-active {
    border-bottom: .2rem solid #D02026;
  }

</style>
