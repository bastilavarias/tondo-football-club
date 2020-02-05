<template>
  <section>
    <v-container>
      <v-card flat color="transparent">
        <v-row>
          <v-col cols="12" md="6">
            <div class="primary--text text-center">
              <h4>UPCOMING MATCH AT 7s LEAGUE</h4>
              <h5>Tondo FC VS Deportivo Matu</h5>
            </div>
            <div class="mb-10"></div>
            <v-row align="center" justify="space-around">
              <v-avatar :size="125">
                <v-img :src="require('../assets/tondoFootballClubLogo.png')"></v-img>
              </v-avatar>
              <h1 class="display-3 font-weight-bold">VS</h1>
              <v-avatar :size="125">
                <v-img :src="require('../assets/logos/deportivoMatu.jpg')"></v-img>
              </v-avatar>
            </v-row>
            <div class="mb-10"></div>
            <p class="text-center">
              <span class="black--text">Tondo FC against Deportivo Matu Live at Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias maiores possimus quae vero? A consequatur consequuntur, eligendi incidunt nihil sit?</span>
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-img :src="require('../assets/7sImage.jpg')"></v-img>
          </v-col>
        </v-row>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" class="text-capitalize">See all matches</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </section>
</template>

<script>
    export default {
        name: "upcoming-match"
    };
</script>
