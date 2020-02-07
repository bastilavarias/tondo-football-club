<template>
  <v-row>
    <v-col cols="4" md="5">
      <v-row justify="space-around" align="center">
        <div>
          <p class="d-none d-sm-block subtitle-1">Tondo FC</p>
        </div>
        <v-avatar :size="50">
          <v-img :src="require('../assets/logos/tondoFC.png')"></v-img>
        </v-avatar>
      </v-row>
    </v-col>
    <v-col cols="4" md="2">
      <v-row justify="space-around" align="center">
        <span class="display-1">0</span>
        <span class="title">VS</span>
        <span class="display-1">0</span>
      </v-row>
    </v-col>
    <v-col cols="4" md="5">
      <v-row justify="space-around" align="center">
        <v-avatar :size="50">
          <v-img :src="require('../assets/logos/teamMatu.png')"></v-img>
        </v-avatar>
        <div>
          <p class="d-none d-sm-block subtitle-1">Departu Matibo</p>
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
    export default {
        name: "match-item"
    };
</script>
