<template>
  <v-card width="100%" :min-height="250" color="white" flat tile light>
    <v-card-title>
      <div class="flex-grow-1"></div>
      <div class="text-center">
        <span class="d-block caption">
          <span class="caption">7s Football League<v-avatar :size="15" class="ml-1"><v-img
            :src="require('../../assets/logos/7sLeague.png')"></v-img></v-avatar></span>

        </span>
        <span class="d-block title text-uppercase primary--text font-weight-bold">Upcoming match</span>
      </div>
      <div class="flex-grow-1"></div>
    </v-card-title>
    <v-row justify="center" align="center">
      <div>
        <span class="title font-weight-bold">Tondo FC</span>
        <v-avatar :size="75">
          <v-img :src="require('../../assets/logos/tondoFC.png')"></v-img>
        </v-avatar>
      </div>
      <div class="text-center">
        <span class="primary--text font-weight-bold">VS</span>
      </div>
      <div>
        <v-avatar :size="75">
          <v-img :src="require('../../assets/logos/tondoFC.png')"></v-img>
        </v-avatar>
        <span class="title font-weight-bold">Tondo FC</span>
      </div>
    </v-row>
    <v-card-text class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, pariatur!
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

        data() {
            return {
                tab: null
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
