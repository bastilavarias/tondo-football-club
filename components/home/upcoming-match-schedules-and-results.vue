<template>
  <div class="white">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <home-match-results></home-match-results>
      </v-col>
      <v-col cols="12" md="6">
        <v-row no-gutters>
          <v-col cols="12">
            <home-upcoming-match-item></home-upcoming-match-item>
          </v-col>
          <v-col cols="12">
            <home-upcoming-matches></home-upcoming-matches>
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

    export default {
        name: "home-upcoming-match-schedules-and-results",
        components: {HomeUpcomingMatchItem, HomeUpcomingMatches, HomeMatchResults}
    };
</script>
