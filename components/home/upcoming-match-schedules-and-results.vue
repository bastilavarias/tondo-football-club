<template>
  <div class="white">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <home-match-results></home-match-results>
      </v-col>
      <v-col cols="12" md="6">
        <v-row no-gutters>
          <v-col cols="12">
            <home-upcoming-match-item :date="upcomingMatch.date" :time="upcomingMatch.time"
                                      :team-a="upcomingMatch.teamA" :team-b="upcomingMatch.teamB"
                                      :venue="upcomingMatch.venue" :league-name="upcomingMatch.leagueName"
                                      :league-logo="upcomingMatch.leagueLogo"
            ></home-upcoming-match-item>
          </v-col>
          <v-col cols="12">
            <!--            <home-upcoming-matches></home-upcoming-matches>-->
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    import HomeMatchResults from "./match-results";
    import HomeUpcomingMatches from "./upcoming-matches";
    import HomeUpcomingMatchItem from "./upcoming-match-item";

    const upcomingMatch = {
        date: "Feb 23, 2020",
        time: "3:00 PM",
        teamA: {
            name: "Tondo FC",
            logo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2FtondoFC.png?alt=media&token=32a2de98-7daa-4c97-8391-b1500a778e44"
        },
        teamB: {
            name: "D. Matsunaga FA",
            logo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2FDmatsunaga.png?alt=media&token=203800bd-df65-4865-ae0f-e6fbf69421ed"
        },
        venue: "McKinley Hills Stadium",
        leagueName: "7s Football League",
        leagueLogo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2F7sLeague.png?alt=media&token=b1c90ecf-f5cc-427c-8894-975bc7eb7f72"
    };


    export default {
        name: "home-upcoming-match-schedules-and-results",
        components: {HomeUpcomingMatchItem, HomeUpcomingMatches, HomeMatchResults},

        data() {
            return {
                upcomingMatch
            };
        }
    };
</script>
