<template>
  <v-app>
    <nav-bar></nav-bar>
    <nuxt></nuxt>
    <custom-footer></custom-footer>
  </v-app>
</template>

<script>
    import NavBar from "./partials/NavBar";
    import CustomFooter from "./partials/CustomFooter";

    export default {
        name: "default-layout",
        components: {CustomFooter, NavBar}
    };
</script>

<style>
  #app {
    font-family: "Roboto Condensed", sans-serif;
  }
</style>
