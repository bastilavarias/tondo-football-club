<template>
  <div id="match-schedule-item" class="py-1 px-1">
    <v-row dense>
      <v-col cols="12" md="2" align-self="center">
        <div class="text-center text-md-left">
          <span class="caption font-weight-bold d-md-block">Feb 02, 2020</span>
          <span class="caption font-weight-bold">10:00 AM</span>
        </div>
      </v-col>
      <v-col cols="12" md="7" align-self="center">
        <v-row justify="center" align="center">
          <div>
            <v-avatar :size="35" v-if="false">
              <v-img :src="require('../assets/logos/tondoFC.png')"></v-img>
            </v-avatar>
            <span class="subtitle-2 black--text">Team Name</span>
          </div>
          <span class="caption mx-2 primary--text font-weight-bold">VS</span>
          <div>
            <span class="subtitle-2 black--text">Team Name</span>
            <v-avatar :size="35" v-if="false">
              <v-img :src="require('../assets/logos/teamMatu.png')"></v-img>
            </v-avatar>
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" align-self="center">
        <div class="text-center text-md-left">
          <span class="caption">Lorem ipsum dolor sit amet, consectetur</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    export default {
        name: "match-schedule-item"
    };
</script>

<style scoped>
  #match-schedule-item {
    border-bottom: 1px solid #f2f2f2;
  }
</style>
