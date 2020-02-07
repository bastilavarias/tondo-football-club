<template>
  <section>
    <v-parallax :src="require('../assets/banners/7sLeagueTeam.jpg')" height="450">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-4 font-weight-bold">7s League</h1>
          <div class="mb-5 mb-md-0"></div>
          <div class="custom-short-separator mx-auto"></div>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <v-avatar :size="150" tile>
            <v-img :src="require('../assets/logos/7sLeague.png')"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="10">
          <h1 class="display-1">About 7s League</h1>
          <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis ipsa itaque
                                maiores nam necessitatibus quae. Accusantium aliquam architecto aut dolore dolores
                                dolorum earum eligendi explicabo, impedit libero mollitia neque, nisi odit pariatur
                                quidem sit tenetur. Aliquam aspernatur facere harum id illum laudantium nostrum
                                officiis possimus sed velit. Dolorem, sed?</p>
        </v-col>
        <v-col cols="12">
          <h1 class="title">Upcoming Match</h1>
          <div class="mb-5"></div>
          <match-schedule-item></match-schedule-item>
        </v-col>
        <v-col cols="12">
          <h1 class="title">Schedules</h1>
          <div class="mb-5"></div>
          <template v-for="n in 6">
            <match-schedule-item :key="n"></match-schedule-item>
          </template>
        </v-col>
        <v-col cols="12">
          <h1 class="title">Partners</h1>
        </v-col>
        <v-col cols="12">
          <h1 class="title">Gallery</h1>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
    import MainNavBar from "../layouts/partials/main-nav-bar";
    import MatchItem from "../components/match-item";
    import MatchScheduleItem from "../components/match-schedule-item";

    export default {
        name: "seven-s-league",
        components: {MatchScheduleItem, MatchItem, MainNavBar}
    };
</script>
