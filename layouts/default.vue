<template>
  <v-app>
    <nav-bar></nav-bar>
    <nuxt></nuxt>
  </v-app>
</template>

<script>
    import NavBar from "./partials/NavBar";

    export default {
        name: "default-layout",
        components: {NavBar}
    };
</script>

<style>
  #app {
    font-family: "Roboto Condensed", sans-serif;
  }
</style>
