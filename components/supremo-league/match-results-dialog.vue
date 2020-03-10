<template>
  <v-dialog v-model="dialogLocal" max-width="800">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" class="text-capitalize" v-on="on">
        View All
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span>All Match Results</span>
      </v-card-title>
      <v-card-subtitle class="font-weight-bold">
        Season 1
      </v-card-subtitle>
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
                <template v-for="item in details">
                  <v-card-subtitle style="padding-left: 0 !important;">{{item.date}}</v-card-subtitle>
                  <template v-for="team in item.teams">
                    <supremo-league-match-result-item :team-a="team.a" :team-b="team.b" class-name="mb-2"></supremo-league-match-result-item>
                  </template>
                </template>
              </template>
            </v-card-text>
          </v-tab-item>
        </template>
      </v-tabs-items>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialogLocal = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

    import utilities from "../../plugins/utilities";
    import information from "../../information";
    import SupremoLeagueMatchResultItem from "./match-result-item";

    export default {
        name: "supremo-league-match-results-dialog",
        components: {SupremoLeagueMatchResultItem},
        props: {
            dialog: {
                type: Boolean,
                required: true
            },

            currentTab: {
                type: Number,
                required: true
            }
        },

        mixins: [utilities, information],

        data() {
            return {
                tab: null,
                dialogLocal: false
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
            }
        },

        watch: {
            dialog(value) {
                this.dialogLocal = value;
            },

            dialogLocal(value) {
                this.$emit("update:dialog", value);
            },

            currentTab(value) {
                this.tab = value;
            },

            tab(value) {
                this.$emit("update:currentTab", value);
            }
        },

        created() {
            this.dialogLocal = this.dialog;
            this.tab = this.currentTab;
        }
    };
</script>
