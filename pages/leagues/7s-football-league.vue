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
            <v-tabs v-model="leagueTableTab" grow show-arrows>
              <template v-for="(category, index) in categories">
                <v-tab :key="index">
                  <span class="text-uppercase">{{category.age === "Open" ? "Men's Open" : category.age}} {{category.gender === "Men" ? "" : category.gender}}</span>
                </v-tab>
              </template>
            </v-tabs>
            <seven-s-football-league-table :team-list="[]"></seven-s-football-league-table>
          </v-card>
        </v-col>
        <v-col cols="12" md="10">
          <v-card :loading="isMatchSchedulesLoading">
            <v-card-title>
              Match Schedules & Results
            </v-card-title>
            <v-tabs v-model="matchSchedulesTab" grow show-arrows>
              <template v-for="(category, index) in categories">
                <v-tab :key="index">
                  <span class="text-uppercase">{{category.age === "Open" ? "Men's Open" : category.age}} {{category.gender === "Men" ? "" : category.gender}}</span>
                </v-tab>
              </template>
            </v-tabs>
            <v-card-text>
              <v-tabs-items v-model="matchSchedulesTab">
                <template
                  v-for="(schedule, outerIndex) in schedules">
                  <v-tab-item :key="outerIndex">
                    <template v-for="(match, innerIndex) in schedule.matches">
                      <seven-s-football-league-match-item :date="match.date" :time="match.time"
                                                          :team-a="match.teamA" :team-b="match.teamB"
                                                          :venue="match.venue"
                                                          :key="innerIndex"></seven-s-football-league-match-item>
                    </template>
                  </v-tab-item>
                </template>
              </v-tabs-items>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="2">
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-subheader>Jersey</v-subheader>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card>
                <v-subheader>Featured Articles</v-subheader>
              </v-card>
            </v-col>
          </v-row>
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
    import utilities from "../../plugins/utilities";
    import SevenSFootballLeagueMatchItem from "../../components/7s-football-league/match-item";

    export default {
        components: {
            SevenSFootballLeagueMatchItem,
            SevenSFootballLeagueTable, GenericAboutUs, GenericParallax
        },

        mixins: [information, utilities],

        data() {
            return {
                leagueTableTab: 0,
                matchSchedulesTab: 0
            };
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
            },

            categories() {
                return this.sevenSFootballLeague.team.categories;
            },

            schedules() {
                return this.sevenSFootballLeague.schedules;
            },

            isMatchSchedulesLoading() {
                return this.schedules.length <= 0;
            }
        }
    };
</script>
