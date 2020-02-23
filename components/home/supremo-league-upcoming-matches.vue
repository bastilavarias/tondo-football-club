<template>
  <v-card color="transparent" flat min-height="320">
    <v-list-item>
      <v-list-item-avatar :size="75">
        <v-img :src="details.logo"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-subtitle>
          {{details.date}}
        </v-list-item-subtitle>
        <v-list-item-title>
          <span class="title">{{details.name}}</span>
        </v-list-item-title>
        <v-list-item-subtitle>
                  <span class="caption secondary white--text px-2 py-2">
                  Venue: {{details.venue}}
                  </span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-row justify="end" align="center">
      <v-btn color="primary" icon @click="schedulesIndex--">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn color="primary" icon @click="schedulesIndex++">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
    <v-carousel hide-delimiters :show-arrows="false" v-model="schedulesIndex" height="auto">
      <template v-for="(event, index) in supremoFutsalLeague.events">
        <v-carousel-item :key="index">
          <p class="subtitle-2 font-weight-bold mb-0 secondary--text text-capitalize">U{{event.category.age}}
                                                                                      {{event.category.gender}}</p>
          <template v-for="(match, index) in event.matches">
            <supremo-league-upcoming-match-item :key="index" :team-a="match.team.a" :team-b="match.team.b"
                                                :time="match.time"></supremo-league-upcoming-match-item>
          </template>
        </v-carousel-item>
      </template>
    </v-carousel>
  </v-card>
</template>

<script>
    import GenericMatchSchedules from "../generic/match-schedules";
    import information from "../../information";
    import SupremoLeagueUpcomingMatchItem from "../supremo-league/upcoming-match-item";

    export default {
        name: "home-supremo-upcoming-matches",
        components: {SupremoLeagueUpcomingMatchItem, GenericMatchSchedules},

        data() {
            return {
                schedulesIndex: 0
            };
        },

        mixins: [information],

        computed: {
            supremoFutsalLeague() {
                return this.information.featured.schedule.league.supremoFutsalLeague;
            },

            details() {
                return this.supremoFutsalLeague.details;
            }
        }

    };
</script>
