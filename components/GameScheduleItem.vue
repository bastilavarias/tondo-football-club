<template>
  <v-row dense>
    <v-col cols="5">
      <v-row dense justify="space-around">
        <small class="body-2">
          <span class="mr-2">February 10, 2020</span>
          <span>5:00 PM</span>
          <span>Bracket A</span>
        </small>
        <small class="body-2">
          <span class="font-weight-bold">Tondo FC</span>
          <v-avatar :size="25">
            <v-img :src="require('../assets/tondoFootballClubLogo.png')"></v-img>
          </v-avatar>
        </small>
      </v-row>
    </v-col>
    <v-col cols="2">
      <v-row justify="space-around">
        <p class="display-1">0</p>
        <div class="text-center">
          <v-avatar :size="45">
            <v-img
              src="https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-9/15727324_1238747762858442_1300888075347317718_n.jpg?_nc_cat=103&_nc_eui2=AeFLomLelTL4YR6k_hcBQD73UPpZLCkupWtTptPB2waHNABJP8K5OV2PdAF0akBF51ZzKNWwOU8CkiujjKWFR2BFfmNXMZq4XT1Ex94akBEhhA&_nc_oc=AQmWnHQKQL2QXGmAe1cS90rzfjc4TGv182vwYO6wWCBzo2H0pkwdXY_cPhI9NqvowQY&_nc_pt=1&_nc_ht=scontent.fmnl5-1.fna&oh=f5e45c51bfc103aa03af24990f3b9838&oe=5E8FFAFB"></v-img>
          </v-avatar>
          <br>
          <small class="caption primary--text font-weight-bold">Match MVP</small>
        </div>
        <p class="display-1">0</p>
      </v-row>
    </v-col>
    <v-col cols="5">
      <v-row dense justify="space-between" class="ml-10">
        <small class="body-2">
          <v-avatar :size="25" class="mr-1">
            <v-img :src="require('../assets/logos/deportivoMatu.jpg')"></v-img>
          </v-avatar>
          <span class="font-weight-bold">Deportivo Matu</span>
        </small>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
    export default {
        name: "game-schedule-item"
    };
</script>
