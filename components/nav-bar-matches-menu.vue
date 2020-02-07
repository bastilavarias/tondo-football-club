<template>
  <v-list>
    <v-subheader>Leagues</v-subheader>
    <v-list-item :to="{ name: '7s-league' }" active-class="nav-bar-menu-button-active">
      <v-list-item-content>
        <v-list-item-title>7s League</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
    export default {
        name: "nav-bar-matches-menu"
    };
</script>
