<template>
  <v-app-bar app color="white" hide-on-scroll>
    <v-toolbar-title>
      <v-avatar :size="50">
        <v-img :src="require('../../assets/logos/tondoFC.png')"></v-img>
      </v-avatar>
      <span class="title">Tondo FC</span>
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
            <span>Matches</span>
            <v-icon color="primary">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <nav-bar-matches-menu></nav-bar-matches-menu>
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
      <v-btn depressed class="nav-bar-button" :to="{ name: 'about-us' }" exact active-class="nav-bar-button-active">
        About Us
      </v-btn>
      <v-btn depressed class="nav-bar-button" exact active-class="nav-bar-button-active">
        Store
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
    import NavBarMatchesMenu from "../../components/nav-bar-matches-menu";
    import NavBarProgramsMenu from "../../components/nav-bar-programs-menu";

    export default {
        name: "main-nav-bar",
        components: {NavBarProgramsMenu, NavBarMatchesMenu}
    };
</script>
