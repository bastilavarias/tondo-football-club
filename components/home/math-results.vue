<template>
  <v-slide-group show-arrows center-active v-model="model" :show-arrows="false">
    <template v-for="n in 25">
      <v-slide-item
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <home-match-result-item :toggle="toggle"></home-match-result-item>
      </v-slide-item>
    </template>
  </v-slide-group>
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
