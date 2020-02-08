<template>
  <section>
    <v-parallax :src="require('../assets/banners/7sLeagueTeam.jpg')" height="450">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 :class="`${isOnMobile ? 'display-3' : 'display-4'} font-weight-bold`">7s League</h1>
          <div class="mb-2"></div>
          <div class="custom-short-separator mx-auto"></div>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" lg="2">
          <v-avatar :size="150" tile class="mx-auto">
            <v-img :src="require('../assets/logos/7sLeague.png')"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="9" lg="10">
          <h1 class="display-1">About 7s League</h1>
          <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis ipsa itaque
                                maiores nam necessitatibus quae. Accusantium aliquam architecto aut dolore dolores
                                dolorum earum eligendi explicabo, impedit libero mollitia neque, nisi odit pariatur
                                quidem sit tenetur. Aliquam aspernatur facere harum id illum laudantium nostrum
                                officiis possimus sed velit. Dolorem, sed?</p>
        </v-col>
      </v-row>
      <generic-content-holder class="white" title="Tondo FC's Upcoming Match"
                              :is-centered="isOnMobile">
        <v-container>
          <match-schedule-item></match-schedule-item>
        </v-container>
      </generic-content-holder>
      <generic-content-holder class="white" title="Tondo FC's Schedules"
                              :is-centered="isOnMobile">
        <v-container>
          <template v-for="n in 6">
            <match-schedule-item :key="n"></match-schedule-item>
          </template>
        </v-container>
      </generic-content-holder>
      <generic-content-holder class="white" title="Partners"
                              :is-centered="isOnMobile">
      </generic-content-holder>
    </v-container>

    <generic-content-holder class-name="bg-dirty-white" title="Tondo FC's 7S Gallery" is-centered has-separator>
      <div class="mb-10"></div>
      <generic-gallery></generic-gallery>
    </generic-content-holder>
  </section>
</template>

<script>
    import MainNavBar from "../layouts/partials/main-nav-bar";
    import MatchItem from "../components/match-item";
    import MatchScheduleItem from "../components/match-schedule-item";
    import GenericGallery from "../components/generic-gallery";
    import GenericContentHolder from "../components/generic-content-holder";
    import utilities from "../plugins/utilities";

    export default {
        name: "seven-s-league",

        components: {GenericContentHolder, GenericGallery, MatchScheduleItem, MatchItem, MainNavBar},

        mixins: [utilities]
    };
</script>
