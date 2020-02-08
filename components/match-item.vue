<template>
  <div id="match-item">
    <v-row dense align="center">
      <v-col cols="4" md="5">
        <v-row justify="space-around" align="center">
          <span class="d-none d-sm-block caption font-weight-bold">Tondo FC</span>
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
          <span class="d-none d-sm-block caption font-weight-bold">Departu Matibo</span>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    export default {
        name: "match-item"
    };
</script>

<style scoped>
  #match-item {
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }
</style>
