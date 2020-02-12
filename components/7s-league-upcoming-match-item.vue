<template>
  <div id="supremo-league-match-item" class="py-1 px-1">
    <v-row dense>
      <v-col cols="12" md="2" align-self="center">
        <v-row justify="center" align="center">
          <span class="font-italic">Feb 02 - 10: 00 AM</span>
        </v-row>
      </v-col>
      <v-col cols="12" md="7" align-self="center">
        <v-row justify="center" align="center">
          <div>
            <v-avatar :size="50">
              <v-img :src="require('../assets/logos/tondoFC.png')"></v-img>
            </v-avatar>
            <span class="subtitle-1 font-weight-bold black--text">Team Name</span>
          </div>
          <span class="caption mx-2 primary--text">VS</span>
          <div>
            <span class="subtitle-1 font-weight-bold black--text">Team Name</span>
            <v-avatar :size="50">
              <v-img :src="require('../assets/logos/tondoFC.png')"></v-img>
            </v-avatar>
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" align-self="center">
        <v-row justify="center" align="center">
          <span>@Lorem ipsum dolor sit amet, consectetur</span>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>

    export default {
        name: "seven-s-league-upcoming-match-item",

    };
</script>

<style scoped>
  #supremo-league-match-item {
    border-bottom: 1px solid #f2f2f2;
  }
</style>
