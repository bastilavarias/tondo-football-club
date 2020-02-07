<template>
  <section>
    <v-parallax :src="require('../assets/banners/aboutUs.jpg')" height="450">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-4 font-weight-bold">About Us</h1>
          <div class="custom-short-separator mx-auto"></div>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="display-1">About Tondo Football Club</h1>
          <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis ipsa itaque
                                maiores nam necessitatibus quae. Accusantium aliquam architecto aut dolore dolores
                                dolorum earum eligendi explicabo, impedit libero mollitia neque, nisi odit pariatur
                                quidem sit tenetur. Aliquam aspernatur facere harum id illum laudantium nostrum
                                officiis possimus sed velit. Dolorem, sed?</p>
        </v-col>
        <v-col cols="12" md="6">
          <h1 class="display-1">Our Mission</h1>
          <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis ipsa itaque
                                maiores nam necessitatibus quae. Accusantium aliquam architecto aut dolore dolores
                                dolorum earum eligendi explicabo, impedit libero mollitia neque, nisi odit pariatur
                                quidem sit tenetur. Aliquam aspernatur facere harum id illum laudantium nostrum
                                officiis possimus sed velit. Dolorem, sed?</p>
        </v-col>
        <v-col cols="12" md="6">
          <h1 class="display-1">Our Vision</h1>
          <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis ipsa itaque
                                maiores nam necessitatibus quae. Accusantium aliquam architecto aut dolore dolores
                                dolorum earum eligendi explicabo, impedit libero mollitia neque, nisi odit pariatur
                                quidem sit tenetur. Aliquam aspernatur facere harum id illum laudantium nostrum
                                officiis possimus sed velit. Dolorem, sed?</p>
        </v-col>
        <v-col cols="12">
          <div class="text-center">
            <h1 class="display-1">Cultural Architects Of Tondo</h1>
            <div class="mb-2"></div>
            <div class="custom-short-separator mx-auto"></div>
            <div class="mb-10"></div>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/Ee5XXUkTo9A" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
    import MainNavBar from "../layouts/partials/main-nav-bar";

    export default {
        name: "about-us",
        components: {MainNavBar}
    };
</script>

<style scoped>
</style>
