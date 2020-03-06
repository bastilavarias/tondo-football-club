<template>
  <section>
    <generic-parallax title="Tondo Football Club" subtitle="About us"
                      :image="require('../assets/banners/aboutUs.jpg')"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card flat color="transparent">
            <v-card-title class="display-1 font-weight-bold">About Us</v-card-title>
            <v-card-text>{{information.tondoFootballClub.about.message}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-row dense>
            <v-col cols="12">
              <v-card flat color="transparent">
                <v-card-title  class="font-weight-bold">Mission</v-card-title>
                <v-card-text>{{information.tondoFootballClub.about.mission}}</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card flat color="transparent">
                <v-card-title class="font-weight-bold">Vision</v-card-title>
                <v-card-text>{{information.tondoFootballClub.about.vision}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-card flat color="transparent">
            <v-card-title class="font-weight-bold">
              <div class="flex-grow-1"></div>
              Objectives
              <div class="flex-grow-1"></div>
            </v-card-title>
            <generic-objectives></generic-objectives>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card color="transparent" flat>
            <v-card-title class="font-weight-bold">Sponsors</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
    import utilities from "../plugins/utilities";
    import GenericParallax from "../components/generic/parallax";
    import GenericObjectives from "../components/generic/objectives";
    import information from "../information";

    export default {
        name: "about-us",

        components: {GenericObjectives, GenericParallax},

        mixins: [utilities, information]
    };
</script>

<style scoped>
</style>
