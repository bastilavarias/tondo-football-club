<template>
  <section>
    <generic-parallax :title="banner.title" :subtitle="banner.subtitle" :image="banner.image"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <generic-about-us :title="about.title" :message="about.message"
                        :image="about.logo"></generic-about-us>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>League Table</v-card-title>
            <seven-s-football-league-table :team-list="[]"></seven-s-football-league-table>
          </v-card>
        </v-col>
        <v-col cols="12" md="7">
          <v-card class="mb-5" color="transparent" flat>
            <v-card-title>Upcoming Match</v-card-title>
            <v-card-text>
              <template v-for="(match, index) in upcomingMatches">
                <match-schedule-item :key="index" :date="match.date" :time="match.time" :team-a="match.teamA"
                                     :team-b="match.teamB" :venue="match.venue"></match-schedule-item>
              </template>
            </v-card-text>
          </v-card>

        </v-col>
        <v-col cols="12" md="5">
          <v-card>
            <v-card-title>Match Schedules</v-card-title>
            <v-card-actions>
              <v-btn block text class="primary--text text-capitalize">View More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-title>Match Results</v-card-title>
            <match-result></match-result>
            <match-result></match-result>
            <match-result></match-result>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="primary" class="text-capitalize">See All</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
    import GenericParallax from "../../components/generic/parallax";
    import information from "../../information";
    import GenericAboutUs from "../../components/generic/about-us";
    import SevenSFootballLeagueTable from "../../components/7s-football-league/league-table";
    import MatchResult from "../../components/match-result";
    import MatchScheduleItemPreview from "../../components/match-schedule-item-preview";
    import MatchScheduleItem from "../../components/match-schedule-item";

    export default {
        components: {
            MatchScheduleItem,
            MatchScheduleItemPreview, MatchResult, SevenSFootballLeagueTable, GenericAboutUs, GenericParallax},

        mixins: [information],

        data() {
            return {
            }
        },

        computed: {
            sevenSFootballLeague() {
                return this.information.sevenSFootballLeague;
            },

            banner() {
                return this.sevenSFootballLeague.banner;
            },

            about() {
                return this.sevenSFootballLeague.about;
            }
        }
    };
</script>
