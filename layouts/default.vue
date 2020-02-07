<template>
  <v-app>
    <main-nav-bar></main-nav-bar>
    <nuxt></nuxt>
    <main-footer></main-footer>
  </v-app>
</template>

<script>
    import MainFooter from "./partials/main-footer";
    import MainNavBar from "./partials/main-nav-bar";

    export default {
        name: "default-layout",
        components: {MainNavBar, MainFooter},
    };
</script>

<style>
  #app {
    background-color: #ffffff;
  }

  .custom-short-separator {
    background-color: #D02026;
    height: .5rem;
    width: 3rem;
  }

  .nav-bar-button {
    text-transform: capitalize;
    font-weight: bold;
  }

  .nav-bar-button::before {
    color: transparent
  }

  .nav-bar-button::after {
    color: transparent
  }

  .nav-bar-button-active {
    border-bottom: .2rem solid #D02026;
  }

  .nav-bar-button-active::before {
    color: transparent;
  }

  .nav-bar-button-active::active {
    color: transparent;
  }

  .nav-bar-menu-button-active {
    border-left: .2rem solid #D02026;
    font-size: .1rem;
  }

  .nav-bar-menu-button-active::after {
    color: transparent;
  }

  .nav-bar-menu-button-active::before {
    color: transparent;
  }

  .bg-dirty-white {
    background-color: #F2F2F2;
  }
</style>
