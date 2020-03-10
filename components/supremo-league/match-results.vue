<template>
  <v-card>
    <v-card-subtitle class="pb-0">
      March 7, 2020
    </v-card-subtitle>
    <v-card-title>Match Results</v-card-title>
    <v-tabs v-model="tab" grow show-arrows>
      <template v-for="(category, index) in categories">
        <v-tab :key="index">
          <span class="text-uppercase">U{{category.age}} {{category.gender}}</span>
        </v-tab>
      </template>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <template v-for="(category, index) in categories">
        <v-tab-item :key="index">
          <v-card-text>
            <template v-for="{details} in getMatchesResultsByCategory(matchResults, category)">
              <template v-for="item in getMatchResultsDetailsByDate(details, featuredDate)"
                        v-if="getMatchResultsDetailsByDate(details, featuredDate).length > 0">
                <template v-for="team in item.teams">
                  <supremo-league-match-result-item :team-a="team.a" :team-b="team.b"
                                                    class-name="mb-2"></supremo-league-match-result-item>
                </template>
              </template>
              <span class="d-block text-center v-label theme--light" v-if="getMatchResultsDetailsByDate(details, featuredDate).length === 0">No results.</span>
            </template>
          </v-card-text>
        </v-tab-item>
      </template>
    </v-tabs-items>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <supremo-league-match-results-dialog :dialog.sync="dialog"
                                           :current-tab.sync="tab"></supremo-league-match-results-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
    import information from "../../information";
    import SupremoLeagueMatchResultItem from "./match-result-item";
    import SupremoLeagueMatchResultsDialog from "./match-results-dialog";
    import utilities from "../../plugins/utilities";


    export default {
        name: "supremo-league-match-results",
        components: {SupremoLeagueMatchResultsDialog, SupremoLeagueMatchResultItem},
        mixins: [information, utilities],

        data() {
            return {
                tab: 0,
                dialog: false
            };
        },

        computed: {
            supremoFutsalLeague() {
                return this.information.supremoFutsalLeague;
            },

            categories() {
                return this.supremoFutsalLeague.categories;
            },

            matchResults() {
                return this.supremoFutsalLeague.matchResults;
            },

            featuredDate() {
                return "March 7, 2020";
            }
        }
    };
</script>
