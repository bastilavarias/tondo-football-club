<template>
  <v-data-table hide-default-footer :headers="leagueTableHeaders" :items="teams" must-sort
                :sort-by="['standing.win', 'points', 'statistic.gp']" :sort-desc="['false', 'false', 'true']" :items-per-page="15">
    <template v-slot:item.details.name="{item}">
      <v-avatar :size="25" class="mr-2">
        <v-img :src="item.details.logo" :lazy-src="item.details.logo"></v-img>
      </v-avatar>
      <span class="font-weight-bold text-uppercase">{{item.details.name}}</span>
    </template>
  </v-data-table>
</template>

<script>
    import information from "../../information";

    export default {
        name: "seven-s-football-league-table",

        mixins: [information],

        props: {
            teams: {
                type: Array,
                required: true
            }
        },

        computed: {
            sevenSFootballLeague() {
                return this.information.sevenSFootballLeague;
            },

            leagueTable() {
                return this.sevenSFootballLeague.leagueTable;
            },

            leagueTableHeaders() {
                return this.leagueTable.headers;
            }
        }
    };
</script>
