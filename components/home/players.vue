<template>
  <generic-holder :image="require('../../assets/backgrounds/pattern-gray-background.png')" title="Players">
      <v-container>
        <v-row dense>
          <template v-for="n in 4">
            <v-col cols="12" sm="6"  md="3" :key="n">
              <player-item></player-item>
            </v-col>
          </template>
        </v-row>
        <v-row justify="end" align="center">
          <v-btn color="primary" class="text-capitalize" dark>
            <span>Visit Team</span>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </v-container>
  </generic-holder>
</template>

<script>
    import GenericHolder from "../generic/holder";
    import PlayerItem from "../player-item";
    export default {
        name: "home-players",
        components: {PlayerItem, GenericHolder}
    };
</script>
