<template>
  <v-expansion-panels flat>
    <v-expansion-panel

    >
      <v-expansion-panel-header>
        <match-item></match-item>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
    import MatchItem from "./match-item";

    export default {
        name: "match-schedule-item",

        components: {MatchItem}
    };
</script>
