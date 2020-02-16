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
    import "./default.css";

    export default {
        name: "default-layout",
        components: {MainNavBar, MainFooter},

    };
</script>
