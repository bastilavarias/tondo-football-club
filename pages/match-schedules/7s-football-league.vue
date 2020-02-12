<template>
  <section>
    <generic-parallax title="Match Schedules"
                      :image="require('../../assets/banners/7sLeagueTeam.jpg')"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" xl="2">
          <v-avatar :size="200" tile>
            <v-img :src="require('../../assets/logos/7sLeague.PNG')"></v-img>
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
      <v-row dense>
        <v-col cols="12" md="10">
          <v-card class="mb-5">
            <v-card-title>Upcoming Match</v-card-title>
            <v-tabs>
              <v-tab>U10</v-tab>
              <v-tab>U13</v-tab>
              <v-tab>U17</v-tab>
            </v-tabs>
            <v-card-text>
              <p class="subtitle-2">February
                                         2020</p>
              <match-schedule-item></match-schedule-item>
              <match-schedule-item></match-schedule-item>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title>Match Schedules</v-card-title>
            <v-tabs>
              <v-tab>U10</v-tab>
              <v-tab>U13</v-tab>
              <v-tab>U17</v-tab>
            </v-tabs>
            <v-card-text>
              <p class="subtitle-2">February
                                         2020</p>
              <match-schedule-item></match-schedule-item>
              <match-schedule-item></match-schedule-item>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="2">
          <generic-quick-links :links="quickLinks"></generic-quick-links>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
    import GenericParallax from "../../components/generic-parallax";
    import GenericContentHolder from "../../components/generic-content-holder";
    import GenericQuickLinks from "../../components/generic-quick-links";
    import MatchScheduleItem from "../../components/match-schedule-item";

    const quickLinks = [
        {
            name: "Fixtures & Results",
            to: {name: "fixtures-and-results-7s-football-league"}
        }
    ];

    export default {
        components: {MatchScheduleItem, GenericQuickLinks, GenericContentHolder, GenericParallax},

        data() {
            return {
                quickLinks
            }
        }
    };
</script>
