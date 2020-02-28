<template>
  <v-card>
    <v-card-subtitle class="pb-0">
      February 15, 2020
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
      <v-tab-item>
        <v-card-text>
          <supremo-league-match-result-item></supremo-league-match-result-item>
        </v-card-text>
      </v-tab-item>
    </v-tabs-items>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn color="primary" class="text-capitalize">View All</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    import information from "../../information";
    import SupremoLeagueMatchResultItem from "./match-result-item";


    export default {
        name: "supremo-league-match-results",
        components: {SupremoLeagueMatchResultItem},
        mixins: [information],

        data() {
            return {
                tab: 0
            }
        },

        computed: {
            supremoFutsalLeague() {
                return this.information.supremoFutsalLeague;
            },

            categories() {
                return this.supremoFutsalLeague.team.categories;
            }
        }
    }
</script>
