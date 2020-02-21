<template>
  <v-card min-height="300" color="primary" tile flat dark>
    <v-container>
      <v-list-item>
        <v-list-item-avatar :size="75" tile>
          <v-img :src="details.logo"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle>
            <span>Upcoming Match</span>
          </v-list-item-subtitle>
          <v-list-item-title>
            <span class="title">{{details.name}}</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            Venue: {{details.venue}}, {{details.date}} - {{details.time}}
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
          <span class="display-1 font-weight-bold text-uppercase white--text mx-2">VS</span>
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

    export default {
        name: "home-seven-s-league-upcoming-match-item",
        mixins: [information],

        computed: {
            league() {
                return this.information.featured.schedule.league.sevenSFootballLeague;
            },

            details() {
                return this.league.details;
            },

            team() {
                return this.league.team;
            }
        }
    };
</script>
