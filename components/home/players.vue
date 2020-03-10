<template>
  <div>
    <v-row dense>
      <template v-for="(player, index) in players">
        <v-col cols="6" md="4" :key="index">
          <player-item :name="player.name" :image="player.image" :position="player.position"></player-item>
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
            featured() {
                return this.information.featured;
            },

            players() {
                return this.featured.players;
            }
        }
    };
</script>
