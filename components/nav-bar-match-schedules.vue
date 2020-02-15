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
            to: {name: "match-schedules-7s-football-league"},
            name: "7s Football League"
        }
    ];

    export default {
        name: "nav-bar-match-schedules-menu",

        data() {
            return {
                routes
            };
        }
    };
</script>
