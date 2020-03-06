<template>
  <v-card color="primary" min-height="320" dark tile flat>
    <v-card-text>
      <p class="text-center subtitle-1 mb-10">7s FL - 22/02 - 4:30 PM</p>
      <v-row no-gutters justify="center" align="center">
        <div class="vertical-center">
          <v-avatar :size="100">
            <v-img :src="team.a.logo"></v-img>
          </v-avatar>
        </div>
        <span class="display-1 font-weight-bold mx-2 white--text">0 : 0</span>
        <div class="vertical-center">
          <v-avatar :size="100" class="">
            <v-img :src="team.b.logo"></v-img>
          </v-avatar>
        </div>
      </v-row>
      <div class="text-center mt-10">
        <span class="title font-weight-bold text-uppercase">
          <span>{{team.a.name}}</span>
          <span class="white--text mx-2">VS</span>
          <span>{{team.b.name}}</span>
        </span>
      </div>
    </v-card-text>
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

