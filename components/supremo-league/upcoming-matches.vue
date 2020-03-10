<template>
  <v-card color="transparent" flat>
    <v-card-subtitle class="pb-0">
      {{upcomingMatch.date}}
    </v-card-subtitle>
    <v-card-title>
      Upcoming Matches
      <div class="flex-grow-1"></div>
    </v-card-title>
    <v-card-subtitle>
      Venue: <span class="font-weight-bold">{{upcomingMatch.venue}}</span>
    </v-card-subtitle>
    <v-row justify="end" align="center">
      <v-btn color="primary" icon @click="schedulesIndex--" :disabled="schedulesIndex === 0">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn color="primary" icon @click="schedulesIndex++" :disabled="schedulesIndex === supremoFutsalLeague.upcomingMatch.matches.length - 1">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
    <v-carousel hide-delimiters :show-arrows="false" v-model="schedulesIndex" height="auto">
      <template v-for="(event, index) in supremoFutsalLeague.upcomingMatch.matches">
        <v-carousel-item :key="index">
          <p class="subtitle-2 font-weight-bold mb-0 secondary--text text-capitalize">{{event.category}}</p>
          <template v-for="(match, index) in event.teams">
            <supremo-league-upcoming-match-item :key="index" :team-a="match.team.a" :team-b="match.team.b"
                                                :time="match.time"></supremo-league-upcoming-match-item>
          </template>
        </v-carousel-item>
      </template>
    </v-carousel>
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
                tab: 0,
                schedulesIndex: 0
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

            upcomingMatch() {
                return this.supremoFutsalLeague.upcomingMatch;
            },

            categories() {
                return this.supremoFutsalLeague.categories;
            }
        }

    };
</script>
