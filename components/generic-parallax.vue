<template>
  <v-parallax :src="image" height="450" style="position: relative;">
    <div class="parallax-content">
      <v-container fill-height>
        <div style="padding-top: 15rem;">
          <h1 class="title font-weight-thin">{{subtitle}}</h1>
          <h1 class="display-1 font-weight-bold">{{title}}</h1>
        </div>
      </v-container>
    </div>
    <div class="dark-overlay-inset"></div>
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

          subtitle: {
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

<style scoped>
  .dark-overlay-inset,
  .parallax-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .dark-overlay-inset {
    -webkit-box-shadow: inset 7px -200px 117px -54px rgba(0,0,0,1);
    -moz-box-shadow: inset 7px -200px 117px -54px rgba(0,0,0,1);
    box-shadow: inset 7px -200px 117px -54px rgba(0,0,0,1);
    z-index: 2;
  }

  .parallax-content {
    z-index: 3;
  }
</style>
