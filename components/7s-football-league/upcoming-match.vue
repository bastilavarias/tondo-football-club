<template>
  <v-card color="primary" min-height="320" dark>
    <v-card-text class="mb-5">
      <p class="text-center subtitle-1">7s FL - 22/02 - 4:30 PM</p>
      <v-row no-gutters justify="center" align="center">
        <div class="vertical-center">
          <span class="title font-weight-bold text-uppercase d-none d-sm-inline-block">{{team.a.name}}</span>
          <v-avatar :size="100">
            <v-img :src="team.a.logo"></v-img>
          </v-avatar>
        </div>
        <span class="display-1 font-weight-bold mx-2 white--text">0 : 0</span>
        <div class="vertical-center">
          <v-avatar :size="100" class="">
            <v-img :src="team.b.logo"></v-img>
          </v-avatar>
          <span class="title font-weight-bold text-uppercase d-none d-sm-inline-block">{{team.b.name}}</span>
        </div>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="white" outlined class="mx-auto">View All Matches</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    import information from "../../information";

    export default {
        name: "seven-s-football-league-upcoming-match",

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

