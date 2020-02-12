<template>
  <div id="match-result">
    <v-row dense>
      <v-col cols="12" md="10" align-self="center">
        <v-row justify="space-around" align="center">
          <div>
            <span class="caption font-weight-bold black--text">Tondo FC</span>
            <v-avatar :size="30">
              <v-img :src="require('../assets/logos/tondoFC.png')"></v-img>
            </v-avatar>
          </div>
          <div>
            <span class="body-1 font-weight-bold">0</span>
            <span class="caption font-weight-bold primary--text mx-3">VS</span>
            <span class="body-1 font-weight-bold">0</span>
          </div>
          <div>
            <v-avatar :size="30">
              <v-img :src="require('../assets/logos/teamMatu.png')"></v-img>
            </v-avatar>
            <span class="caption font-weight-bold black--text">Darto Tite</span>
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" md="2" align-self="center">
        <v-row justify="center" align="center">
          <v-btn color="primary text-capitalize" text small :block="isOnMobile">Details</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    import utilities from "../plugins/utilities";

    export default {
        name: "match-result",

        mixins: [utilities]
    };
</script>

<style scoped>
  #match-result {
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }
</style>
