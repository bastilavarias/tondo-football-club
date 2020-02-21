<template>
<div class="primary">
  <v-row no-gutters>
    <v-col cols="12" md="6">
      <home-seven-s-league-upcoming-match-item :details="sevenSFootballLeague.details"
                                               :team="sevenSFootballLeague.team"></home-seven-s-league-upcoming-match-item>
    </v-col>
    <v-col cols="12" md="6">
      <home-supremo-league-upcoming-matches></home-supremo-league-upcoming-matches>
    </v-col>
  </v-row>
</div>
</template>

<script>
    import HomeSupremoLeagueUpcomingMatches from "./supremo-league-upcoming-matches";
    import HomeAnnouncements from "./announcements";
    import HomeSevenSLeagueUpcomingMatchItem from "./7s-football-league-upcoming-match-item";
    import information from "../../information";

    export default {
        name: "home-upcoming-match-schedules-and-results",
        components: {
            HomeSevenSLeagueUpcomingMatchItem,
            HomeAnnouncements,
            HomeSupremoLeagueUpcomingMatches
        },

        mixins: [information],

        computed: {
            sevenSFootballLeague() {
                return this.information.featured.schedule.league.sevenSFootballLeague;
            }
        }
    };
</script>
