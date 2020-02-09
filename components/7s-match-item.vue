<template>
  <div id="match-item">
    <v-row dense align="center" justify="space-between">
      <v-row dense align="center">
        <v-col cols="4" md="5">
          <v-row justify="space-around" align="center">
            <span class="d-none d-sm-inline-block caption font-weight-bold">Tondo FC</span>
            <v-avatar :size="30">
              <v-img :src="require('../assets/logos/tondoFC.png')"></v-img>
            </v-avatar>
          </v-row>
        </v-col>
        <v-col cols="4" md="2">
          <v-row justify="space-around" align="center">
            <span class="subtitle-2">0</span>
            <span class="caption">VS</span>
            <span class="subtitle-2">0</span>
          </v-row>
        </v-col>
        <v-col cols="4" md="5">
          <v-row justify="space-around" align="center">
            <v-avatar :size="30">
              <v-img :src="require('../assets/logos/teamMatu.png')"></v-img>
            </v-avatar>
            <span class="d-none d-sm-inline-block caption font-weight-bold">Departibo Matu</span>
          </v-row>
        </v-col>
      </v-row>
      <v-btn class="text-capitalize font-weight-bold" text small @click="isMatchDetailsOpen = true" v-if="matchDetails">
        ...
      </v-btn>
    </v-row>
    <match-item-details :is-open="isMatchDetailsOpen"
                        v-on:close-dialog="isMatchDetailsOpen = false"></match-item-details>
  </div>
</template>

<script>
    import utilities from "../plugins/utilities";
    import MatchItemDetails from "./match-item-details";

    export default {
        name: "seven-s-match-item",

        props: {
            matchDetails: {
                type: Object,
                required: false
            }
        },

        components: {MatchItemDetails},

        mixins: [utilities],

        data: () => ({
            isMatchDetailsOpen: false
        })
    };
</script>

<style scoped>
  #match-item {
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }
</style>
