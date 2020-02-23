<template>
  <v-card width="350" class="ma-2" @click="toggle">
    <v-card-title>
      <div class="flex-grow-1"></div>
      <v-avatar :size="75" class="text-center d-block" tile>
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2Fsupremo-league.png?alt=media&token=6e9c320b-209f-4b76-9a90-7905dfc9d3da"></v-img>
      </v-avatar>
      <div class="flex-grow-1"></div>
    </v-card-title>
    <v-card-text>
      <v-row justify="center" align="center">
        <div class="title text-center">
          <span>Tondo FC</span>
          <v-avatar :size="75"
          >
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2Ftondo-fc.png?alt=media&token=50edf44d-5702-4fe7-91da-9d8917837e94"></v-img>
          </v-avatar>
        </div>
        <v-chip color="primary" label small class="mx-2">0 : 0</v-chip>
        <div class="title text-center">
          <v-avatar :size="75"
          >
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2Ftondo-fc.png?alt=media&token=50edf44d-5702-4fe7-91da-9d8917837e94"></v-img>
          </v-avatar>
          <span>Tondo FC</span>
        </div>
      </v-row>
      <div class="mb-2"></div>
      <template>
        <v-row justify="center" align="center">
          <span class="subtitle-1 font-weight-bold">Tondo FC</span>
          <span class="subtitle-1 font-weight-bold primary--text mx-2">VS</span>
          <span class="subtitle-1 font-weight-bold">Tondo FC</span>
        </v-row>
        <div class="text-center mt-5">
          <p class="caption">Men's Open - February 22, 2020</p>
        </div>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
    export default {
        name: "home-match-result-item",

        props: {
            toggle: {
                required: false
            }
        }
    };
</script>
