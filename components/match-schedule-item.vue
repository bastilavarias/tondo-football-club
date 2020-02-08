<template>
  <div>
    <template v-if="scheduleDetails">
      <v-expansion-panels flat>
        <v-expansion-panel

        >
          <v-expansion-panel-header>
            <match-item></match-item>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="text-center">
            <div class="body-1 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sit.</div>
            <v-row dense align="center" justify="center">
              <v-avatar :size="isOnMobile ? '50' : '120'" :class="`${isOnMobile ? 'mr-5' : 'mr-10'}`">
                <v-img :src="require('../assets/logos/tondoFC.png')"></v-img>
              </v-avatar>
              <span class="title">VS</span>
              <v-avatar :size="isOnMobile ? '50' : '120'" :class="`${isOnMobile ? 'ml-5' : 'ml-10'}`">
              <v-img :src="require('../assets/logos/teamMatu.png')"></v-img>
              </v-avatar>
            </v-row>
            <p class="overline mt-10 mb-5">Tondo FC's Team Lineup</p>
            <template v-for="n in 12">
              <player-chip :key="n" class-name="ma-2"></player-chip>
            </template>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
    <template v-else>
      <match-item></match-item>
    </template>
  </div>
</template>

<script>
    import MatchItem from "./match-item";
    import PlayerChip from "./player-chip";
    import utilities from "../plugins/utilities";

    export default {
        name: "match-schedule-item",

        components: {PlayerChip, MatchItem},

        props: {
            scheduleDetails: {
                type: Object,
                required: false
            }
        },

        mixins: [utilities]
    };
</script>
