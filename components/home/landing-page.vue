<template>
  <div class="landing-image" :style="`background-image: url('${landingPageImageCDN}')`">
    <div class="landing-content">
      <v-container>
        <div class="text-left">
          <h1 class="title font-weight-thin text-capitalize d-none d-md-block">{{information.featured.message.subtitle}}</h1>
          <h1 class="display-3 display-md-4 font-weight-bold mb-5 text-capitalize">{{information.featured.message.title}}</h1>
          <v-btn class="text-capitalize mr-2" color="primary" x-large depressed>
            See More
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-btn class="text-capitalize" color="white" x-large outlined large depressed>
            About Us
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-container>
      <v-card>
      </v-card>
    </div>
    <div class="dark-overlay"></div>
  </div>
</template>

<script>
    import "../../assets/css/animation.css";
    import information from "../../information";
    import imageCDN from "../../information/imageCDN";

    export default {
        name: "home-landing-page",

        data: function () {
            return {
                currentIndex: null,
                shouldShowContentMessage: false
            };
        },

        mixins: [information],

        computed: {
            landingPageImageCDN() {
                return this.information.featured.message.image;
            }
        }
    };
</script>

<style scoped>
  .landing-image {
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .dark-overlay {
    -webkit-box-shadow: inset 10px -85px 300px 200px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: inset 10px -85px 300px 200px rgba(0, 0, 0, 0.8);
    box-shadow: inset 10px -85px 300px 200px rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .landing-content {
    color: #ffffff;
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 3;
  }
</style>
