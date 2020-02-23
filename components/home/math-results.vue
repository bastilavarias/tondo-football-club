<template>
  <v-container>
    <generic-holder title="Match Results" subtitle="Last week match results."></generic-holder>
    <v-slide-group show-arrows center-active v-model="model">
      <template v-for="n in 25">
        <v-slide-item
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <home-match-result-item :toggle="toggle"></home-match-result-item>
        </v-slide-item>
      </template>
    </v-slide-group>
  </v-container>
</template>

<script>
    import HomeMatchResultItem from "./match-result-item";
    import GenericHolder from "../generic/holder";

    export default {
        name: "home-match-results",
        components: {GenericHolder, HomeMatchResultItem},

        data: () => ({
            model: null,
        }),
    };
</script>
