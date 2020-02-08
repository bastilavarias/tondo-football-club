<template>
  <section>
    <v-parallax :src="require('../assets/banners/team.jpg')" height="450">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-4 font-weight-bold">Our Team</h1>
          <div class="mb-5 mb-md-0"></div>
          <div class="custom-short-separator mx-auto"></div>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <h1 class="display-1 font-weight-bold">Mark Dennis Balbin</h1>
          <p class="title">Lorem ipsum dolor sit amet.</p>
          <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aut,
                                consequuntur debitis dolorem doloribus explicabo facere fugiat ipsum iste non numquam
                                odio
                                officia qui, quo, reprehenderit tempore voluptas voluptates?</p>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="d-inline-block mx-auto" :height="isOnMobile ? '300' : '200'">
            <v-avatar tile size="100%">
              <v-img :src="require('../assets/team/markDennisBalbin.jpg')"></v-img>
            </v-avatar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <generic-content-holder class="bg-dirty-white" title="Tondo FC Players"
                            is-centered has-separator>
      <div class="mb-10"></div>
      <v-container>
        <v-row>
          <template v-for="n in 8">
            <v-col cols="12" sm="6" md="3" :key="n">
              <player-item></player-item>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </generic-content-holder>
  </section>
</template>

<script>
    import PlayerItem from "../components/player-item";
    import GenericContentHolder from "../components/generic-content-holder";
    import utilities from "../plugins/utilities";

    export default {
        name: "team",

        components: {GenericContentHolder, PlayerItem},

        mixins: [utilities]
    };
</script>
