<template>
  <v-row no-gutters>
    <v-col cols="2" lg="1">
      <div class="box brown--background">
        <span class="subtitle-1 font-weight-bold black--text">0</span>
      </div>
    </v-col>
    <v-col cols="8" lg="10">
      <div style="position: relative;">
        <v-row no-gutters>
          <v-col cols="6">
            <div class="box text-truncate secondary white--text font-weight-medium mr-1 text-uppercase">Team A</div>
          </v-col>
          <v-col cols="6">
            <div class="box text-truncate primary white--text font-weight-medium ml-1 text-uppercase">Team B</div>
          </v-col>
        </v-row>
        <div class="brown--background circle-vs">
          <span class="caption font-weight-bold black--text">VS</span>
        </div>
      </div>
    </v-col>
    <v-col cols="2" lg="1">
      <div class="box brown--background">
        <span class="subtitle-1 font-weight-bold black--text">0</span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
      name: "supremo-league-match-result-item"
  }
</script>

<style scoped>
  .box {
    min-height: 2rem;
    display: flex;
    display: -moz-flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }

  .brown--background {
    background-color: #D0B67D;
  }

  .white--background {
    background-color: #FFFFFF;
  }

  .blue-text-color {
    color: #003E82;
  }

  .circle-vs {
    height: 1.7rem;
    width: 1.7rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    display: -moz-flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
</style>
