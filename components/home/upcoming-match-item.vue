<template>
  <v-card width="100%" :min-height="250" color="white" flat tile light>
    <v-card-title>
      <div class="flex-grow-1"></div>
      <div class="text-center">
        <span class="d-block caption">
          <span class="caption">
            {{leagueName}}<v-avatar :size="15" class="ml-1"><v-img
            :src="leagueLogo"></v-img></v-avatar></span>

        </span>
        <span class="d-block title text-uppercase primary--text font-weight-bold">Upcoming match</span>
      </div>
      <div class="flex-grow-1"></div>
    </v-card-title>
    <v-row justify="center" align="center">
      <div>
        <v-avatar :size="65">
          <v-img :src="teamA.logo"></v-img>
        </v-avatar>
        <span class="title font-weight-bold">{{teamA.name}}</span>
      </div>
      <div class="text-center">
        <span class="primary--text font-weight-bold display-1 mx-5">VS</span>
      </div>
      <div>
        <span class="title font-weight-bold">{{teamB.name}}</span>
        <v-avatar :size="65">
          <v-img :src="teamB.logo"></v-img>
        </v-avatar>
      </div>
    </v-row>
    <v-card-text class="text-center text-capitalize">
      Live at {{venue}}, {{date}} {{time}}
    </v-card-text>
  </v-card>
</template>

<script>
    import utilities from "../../plugins/utilities";
    import MatchScheduleItem from "../match-schedule-item";

    export default {
        name: "home-upcoming-match-item",
        components: {MatchScheduleItem},
        mixins: [utilities],

        props: {
            leagueName: {
                type: String,
                required: true
            },

            leagueLogo: {
                type: String,
                required: true
            },

            date: {
                type: String,
                required: true
            },

            time: {
                type: String,
                required: true
            },

            teamA: {
                type: Object,
                required: true
            },

            teamB: {
                type: Object,
                required: true
            },

            venue: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                tab: null,
            };
        }

    };
</script>

<style scoped>
  .match-item-card {
  }

  .match-item-poster-image {
    width: 100%;
    height: 100%;
  }
</style>
