<template>
  <v-list>
    <v-subheader>Leagues</v-subheader>
    <template v-for="(route, index) in routes">
      <v-list-item :to="route.to" active-class="nav-bar-menu-button-active" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{route.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
    const routes = [
        {
            to: {name: "fixtures-and-results-7s-football-league"},
            name: "7s Football League"
        },
        {
            to: {name: "fixtures-and-results-supremo-futsal-league"},
            name: "Supremo Futsal League"
        }
    ];

    export default {
        name: "nav-bar-fixtures-and-results-menu",

        data() {
            return {
                routes
            };
        }

    };
</script>
