<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
  >
    <template v-for="(event, index) in supremoFutsalLeague.events">
      <v-carousel-item :key="index">
       <v-container>
         <p class="subtitle-2 font-weight-bold mb-0 secondary--text text-capitalize">U{{event.category.age}}
                                                                                     {{event.category.gender}}</p>
         <template v-for="(match, index) in event.matches">
           <supremo-league-upcoming-match-item :key="index" :team-a="match.team.a" :team-b="match.team.b"
                                               :time="match.time"></supremo-league-upcoming-match-item>
         </template>
       </v-container>
      </v-carousel-item>
    </template>
  </v-carousel>
</template>

<script>
    import information from "../../information";
    import SupremoLeagueUpcomingMatchItem from "../supremo-league/upcoming-match-item";

    export default {
      name: "generic-announcement",
      components: {SupremoLeagueUpcomingMatchItem},
      mixins: [information],

      data () {
          return {
              colors: [
                  'indigo',
                  'warning',
                  'pink darken-2',
                  'red lighten-1',
                  'deep-purple accent-4',
              ],
              slides: [
                  'First',
                  'Second',
                  'Third',
                  'Fourth',
                  'Fifth',
              ],
          }
      },

      computed: {
          supremoFutsalLeague() {
              return this.information.featured.schedule.league.supremoFutsalLeague;
          }
      }
  }
</script>
