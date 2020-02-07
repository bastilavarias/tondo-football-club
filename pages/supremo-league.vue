<template>
  <section>
    <v-parallax :src="require('../assets/banners/supremoLeague.jpg')" height="450">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-4 font-weight-bold">Supremo League</h1>
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
            <v-img :src="require('../assets/logos/supremoLeague.png')"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="10">
          <h1 class="display-1">The Supremo League</h1>
          <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis ipsa itaque
                                maiores nam necessitatibus quae. Accusantium aliquam architecto aut dolore dolores
                                dolorum earum eligendi explicabo, impedit libero mollitia neque, nisi odit pariatur
                                quidem sit tenetur. Aliquam aspernatur facere harum id illum laudantium nostrum
                                officiis possimus sed velit. Dolorem, sed?</p>
        </v-col>
        <v-col cols="12">
          <h1 class="title">Upcoming Match</h1>
          <match-schedule-item></match-schedule-item>
        </v-col>
        <v-col cols="12">
          <h1 class="title">Teams</h1>
        </v-col>
        <v-col cols="12">
          <h1 class="title">Schedules</h1>
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
  import MatchScheduleItem from "../components/match-schedule-item";
  export default {
      name: "supremo-league",
      components: {MatchScheduleItem}
  }
</script>
