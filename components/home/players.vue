<template>
  <div>
    <v-row dense>
      <template v-for="n in 4">
        <v-col cols="12" sm="6" md="3" :key="n">
          <player-item></player-item>
        </v-col>
      </template>
    </v-row>
    <div class="text-right">
      <v-btn color="primary" text dark :block="screenBreakPoint.mdAndDown" :to="{name: 'team'}">
        <span>See All</span>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
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
            }
        }
    };
</script>
