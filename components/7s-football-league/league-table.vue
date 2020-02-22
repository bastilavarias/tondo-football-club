<template>
  <v-data-table hide-default-footer :headers="tableHeaders" :items="teamList" must-sort
                :sort-by="['standing.win', 'points', 'statistic.gp']" :sort-desc="['false', 'false', 'true']">
    <template v-slot:item.details.name="{item}">
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
            teamList: {
                type: Array,
                required: true
            }
        },

        computed: {
            supremoFutsalLeague() {
                return this.information.supremoFutsalLeague;
            },

            tableHeaders() {
                return this.supremoFutsalLeague.leagueTable.headers;
            }
        }
    };
</script>
