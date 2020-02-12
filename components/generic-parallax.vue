<template>
  <v-parallax :src="image" height="450">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 :class="`${isOnMobile ? 'display-2' : 'display-3'} font-weight-bold`">{{title}}</h1>
        <div class="mb-2"></div>
        <div class="custom-short-separator mx-auto"></div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
  import GenericContentHolder from "./generic-content-holder";
  import utilities from "../plugins/utilities";

  export default {
      name: "generic-parallax",

      components: {GenericContentHolder},

      props: {
          title: {
              type: String,
              required: true
          },

          image: {
              required: true
          }
      },

      mixins: [utilities]
  }
</script>
