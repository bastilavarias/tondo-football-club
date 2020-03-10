<template>
  <v-card color="transparent" flat>
    <v-card-subtitle class="pb-0">
      February 15, 2020
    </v-card-subtitle>
    <v-card-title>
      Upcoming Matches
      <div class="flex-grow-1"></div>
    </v-card-title>
    <v-card-subtitle>
      Venue: <span class="font-weight-bold">Brgy 118 Tondo Manila</span>
    </v-card-subtitle>
    <v-tabs v-model="tab" grow show-arrows>
      <template v-for="(category, index) in categories">
        <v-tab :key="index">
          <span class="text-uppercase">U{{category.age}} {{category.gender}}</span>
        </v-tab>
      </template>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <template v-for="(_, outerIndex) in categories">
        <v-tab-item :key="outerIndex">
          <v-card-text>
            <template
              v-for="(match, innerIndex) in categorizedMatches" v-if="categorizedMatches.length > 0">
              <supremo-league-upcoming-match-item :team-a="match.team.a" :team-b="match.team.b"
                                                  :time="match.time"
                                                  :key="innerIndex"></supremo-league-upcoming-match-item>
            </template>
            <span class="d-block text-center" v-if="categorizedMatches.length === 0">No Matches</span>
          </v-card-text>
        </v-tab-item>
      </template>
    </v-tabs-items>
  </v-card>
</template>

<script>
    import information from "../../information";
    import utilities from "../../plugins/utilities";
    import SupremoLeagueUpcomingMatchItem from "./upcoming-match-item";

    export default {
        name: "supremo-league-upcoming-matches",
        components: {SupremoLeagueUpcomingMatchItem},
        data() {
            return {
                tab: 0
            };
        },

        mixins: [information, utilities],

        computed: {
            supremoFutsalLeague() {
                return this.information.supremoFutsalLeague;
            },

            upcomingMatches() {
                return this.supremoFutsalLeague.schedule.upcomingMatches;
            },

            categories() {
                return this.supremoFutsalLeague.categories;
            },

            categorizedMatches() {
                return this.getMatchesByCategory(this.upcomingMatches, this.getSelectedCategory(this.categories, this.tab));
            }
        }

    };
</script>
