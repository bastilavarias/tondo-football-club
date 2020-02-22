<template>
  <section>
    <generic-parallax title="The Tondo Football Club" subtitle="About us"
                      :image="require('../assets/banners/aboutUs.jpg')"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card flat color="transparent">
            <v-card-title>The Tondo Football Club</v-card-title>
            <v-card-text>{{information.tondoFootballClub.about.message}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card flat color="transparent">
            <v-card-title>Mission</v-card-title>
            <v-card-text>{{information.tondoFootballClub.about.mission}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card flat color="transparent">
            <v-card-title>Vision</v-card-title>
            <v-card-text>{{information.tondoFootballClub.about.vision}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <generic-objectives></generic-objectives>
  </section>
</template>

<script>
    import MainNavBar from "../layouts/partials/main-nav-bar";
    import utilities from "../plugins/utilities";
    import GenericParallax from "../components/generic/parallax";
    import GenericObjectives from "../components/generic/objectives";
    import information from "../information";

    export default {
        name: "about-us",

        components: {GenericObjectives, GenericParallax, MainNavBar},

        mixins: [utilities, information]
    };
</script>

<style scoped>
</style>
