<template>
  <v-slide-group show-arrows center-active v-model="model" :show-arrows="false">
    <template v-for="(result, index) in matchResults">
      <v-slide-item
        :key="index"
        v-slot:default="{ active, toggle }"
      >
        <home-match-result-item :toggle="toggle" :date="result.date" :league="result.league" :team="result.team" :category="result.category"></home-match-result-item>
      </v-slide-item>
    </template>
  </v-slide-group>
</template>

<script>
    import HomeMatchResultItem from "./match-result-item";
    import GenericHolder from "../generic/holder";
    import information from "../../information";

    export default {
        name: "home-match-results",
        components: {GenericHolder, HomeMatchResultItem},

        data: () => ({
            model: null,
        }),

        mixins: [information],

        computed: {
            featured() {
                return this.information.featured;
            },

            matchResults() {
                return this.featured.matchResults;
            }
        }
    };
</script>
