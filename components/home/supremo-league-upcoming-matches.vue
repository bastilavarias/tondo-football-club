<template>
  <v-card min-height="300" flat tile color="white">
    <generic-match-schedules
      navigation-icon-class="primary--text">
      <template v-slot:header>
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
      </template>
      <template v-for="(event, index) in supremoFutsalLeague.events">
        <vue-slide :key="index" style="padding-top: 2.5rem;">
          <p class="subtitle-2 font-weight-bold mb-0 secondary--text text-capitalize">U{{event.category.age}}
                                                                                      {{event.category.gender}}</p>
          <template v-for="(match, index) in event.matches">
            <supremo-league-upcoming-match-item :key="index" :team-a="match.team.a" :team-b="match.team.b"
                                                :time="match.time"></supremo-league-upcoming-match-item>
          </template>
        </vue-slide>
      </template>
    </generic-match-schedules>
  </v-card>
</template>

<script>
    import GenericMatchSchedules from "../generic/match-schedules";
    import information from "../../information";
    import SupremoLeagueUpcomingMatchItem from "../supremo-league/upcoming-match-item";

    export default {
        name: "home-supremo-upcoming-matches",
        components: {SupremoLeagueUpcomingMatchItem, GenericMatchSchedules},

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
