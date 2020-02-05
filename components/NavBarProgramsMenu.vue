<template>
  <v-list>
    <v-subheader>Community Programs</v-subheader>
    <v-list-item :to="{ name: '7s-league' }" exact>
      <v-list-item-content>
        <v-list-item-title>Supremo League</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item :to="{ name: '7s-league' }" exact>
      <v-list-item-content>
        <v-list-item-title>Summer Boot Camp</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
    export default {
        name: "nav-bar-programs-menu"
    };
</script>
