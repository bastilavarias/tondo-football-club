<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="12" md="4">
          <v-card-title>Upcoming Match</v-card-title>
          <v-card-text></v-card-text>
        </v-col>
        <v-col cols="12" md="8">
          <v-img :src="require('../../assets/posters/84919703_651988492009420_6689470159758819328_o.jpg')"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {
      name: "home-upcoming-matches"
  }
</script>
