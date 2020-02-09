<template>
  <section>
    <v-parallax :src="require('../assets/banners/7sLeagueTeam.jpg')" height="450">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 :class="`${isOnMobile ? 'display-2' : 'display-3'} font-weight-bold`">7s League</h1>
          <div class="mb-2"></div>
          <div class="custom-short-separator mx-auto"></div>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" xl="2">
          <v-avatar :size="200" tile>
            <v-img :src="require('../assets/logos/7sLeague.png')"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="9" xl="10">
          <generic-content-holder class="white" title="About 7s League"
                                  font-type="display-1" has-separator>
            <v-container>
              <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at beatae commodi
                                    est et eum illo incidunt laborum, nesciunt nobis, numquam pariatur possimus quaerat,
                                    quam quis rem saepe sapiente sed! Ducimus ex fugit hic, iste magni necessitatibus
                                    non odit optio quibusdam rem, repellat, saepe sapiente. Amet itaque minus mollitia
                                    tempore?</p>
            </v-container>
          </generic-content-holder>
        </v-col>
      </v-row>
      <generic-content-holder class="white" title="Tondo FC's Standing" font-type="title">
        <p class="subtitle-1">
          <span class="primary--text">0 Wins</span> / 0 Losses
        </p>
      </generic-content-holder>
      <generic-content-holder class="white" title="Tondo FC's Upcoming Match"
                              font-type="title">
        <v-container>
          <span class="overline grey--text mb-0">February 20, 2020</span>
        </v-container>
        <seven-s-match-item :match-details="{}"></seven-s-match-item>
      </generic-content-holder>
      <div class="mb-10"></div>
      <generic-content-holder class="white" title="Tondo FC's Schedules"
                              font-type="title">
        <v-container>
          <span class="overline grey--text">April 2020</span>
        </v-container>
        <template v-for="n in 3">
          <seven-s-match-item :key="n"></seven-s-match-item>
          <div class="mb-1"></div>
        </template>
        <v-container>
          <span class="overline grey--text">May 2020</span>
        </v-container>
        <template v-for="n in 3">
          <seven-s-match-item :key="n"></seven-s-match-item>
          <div class="mb-1"></div>
        </template>
      </generic-content-holder>
      <div class="mb-10"></div>
      <generic-content-holder class="white" title="Partners"
                              font-type="title">
      </generic-content-holder>
      <div class="mb-10"></div>
    </v-container>
    <generic-content-holder class-name="bg-dirty-white" title="Tondo FC's 7S Gallery" is-centered has-separator
                            font-type="display-1">
      <div class="mb-10"></div>
      <generic-gallery></generic-gallery>
    </generic-content-holder>
  </section>
</template>

<script>
    import MainNavBar from "../layouts/partials/main-nav-bar";
    import GenericGallery from "../components/generic-gallery";
    import GenericContentHolder from "../components/generic-content-holder";
    import utilities from "../plugins/utilities";
    import SevenSMatchItem from "../components/7s-match-item";

    export default {
        name: "seven-s-league",

        components: {SevenSMatchItem, GenericContentHolder, GenericGallery, MainNavBar},

        mixins: [utilities]
    };
</script>
