<template>
  <v-app-bar app color="transparent" hide-on-scroll flat>
    <v-toolbar-title>
      <v-avatar :size="50">
        <v-img :src="require('../../assets/logos/tondoFC.png')"></v-img>
      </v-avatar>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn depressed class="nav-bar-button" :to="{ name: 'index' }" exact active-class="nav-bar-button-active">
        Home
      </v-btn>
      <v-menu offset-y open-on-hover transition="slide-y-transition"
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed class="nav-bar-button" exact active-class="nav-bar-button-active" v-on="on"
          >
            <span>Fixtures & Results</span>
            <v-icon color="primary">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-fixtures-and-results-menu></nav-bar-fixtures-and-results-menu>
      </v-menu>
      <v-menu offset-y open-on-hover transition="slide-y-transition"
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed class="nav-bar-button" exact active-class="nav-bar-button-active" v-on="on"
          >
            <span>Match Schedules</span>
            <v-icon color="primary">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-match-schedules-menu></nav-bar-match-schedules-menu>
      </v-menu>
      <v-menu offset-y open-on-hover transition="slide-y-transition"
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed class="nav-bar-button" exact active-class="nav-bar-button-active" v-on="on"
          >
            <span>Programs</span>
            <v-icon color="primary">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-programs-menu></nav-bar-programs-menu>
      </v-menu>
      <v-btn depressed class="nav-bar-button" :to="{ name: 'team' }" exact active-class="nav-bar-button-active">
        Team
      </v-btn>
      <v-btn depressed class="nav-bar-button" exact active-class="nav-bar-button-active" :to="{name: 'articles'}">
        Articles
      </v-btn>
      <v-menu offset-y open-on-hover transition="slide-y-transition"
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed class="nav-bar-button" exact active-class="nav-bar-button-active" v-on="on"
          >
            <span>About Us</span>
            <v-icon color="primary">mdi-chevron-down</v-icon>
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
        }
    };
</script>
