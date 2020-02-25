<template>
  <generic-holder :image="background" title="Players">
      <v-container>
        <v-row dense>
          <template v-for="n in 4">
            <v-col cols="12" sm="6"  md="3" :key="n">
              <player-item></player-item>
            </v-col>
          </template>
        </v-row>
        <div class="text-right">
          <v-btn color="primary" text class="text-capitalize" dark :block="screenBreakPoint.mdAndDown" :to="{name: 'team'}">
            <span>Visit Team</span>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-container>
  </generic-holder>
</template>

<script>
    import GenericHolder from "../generic/holder";
    import PlayerItem from "../player-item";
    import information from "../../information";
    import utilities from "../../plugins/utilities";

    export default {
        name: "home-players",
        components: {PlayerItem, GenericHolder},

        mixins: [information, utilities],

        computed: {
            team() {
                return this.information.team;
            },

            background() {
                return this.team.background;
            }
        }
    };
</script>
