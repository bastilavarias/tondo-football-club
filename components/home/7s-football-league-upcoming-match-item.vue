<template>
  <v-card min-height="300" color="primary" tile flat dark>
    <v-container>
      <v-list-item>
        <v-list-item-avatar :size="75" tile>
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
                             <span class="caption white primary--text px-2 py-2">
                  Venue: {{details.venue}}
                  </span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-container>
    <v-card-text>
      <v-row no-gutters justify="center" align="center">
        <div class="vertical-center">
          <span class="title font-weight-bold text-uppercase d-none d-sm-inline-block">{{team.a.name}}</span>
          <v-avatar :size="100">
            <v-img :src="team.a.logo"></v-img>
          </v-avatar>
        </div>
        <div class="vertical-center">
          <v-chip x-large color="white" label light>
            <span class="font-weight-bold primary--text display-1">0 : 0</span>
          </v-chip>
        </div>
        <div class="vertical-center">
          <v-avatar :size="100" class="">
            <v-img :src="team.b.logo"></v-img>
          </v-avatar>
          <span class="title font-weight-bold text-uppercase d-none d-sm-inline-block">{{team.b.name}}</span>
        </div>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row align="center" justify="center">
        <v-btn outlined color="white" class="text-capitalize" small>View All Matches</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
    import information from "../../information";
    import GenericMatchSchedules from "../generic/match-schedules";

    export default {
        name: "home-seven-s-league-upcoming-match-item",
        components: {GenericMatchSchedules},
        mixins: [information],

        computed: {
            sevenSFootballLeague() {
                return this.information.featured.schedule.league.sevenSFootballLeague;
            },

            details() {
                return this.sevenSFootballLeague.details;
            },

            team() {
                return this.sevenSFootballLeague.team;
            }
        }
    };
</script>
