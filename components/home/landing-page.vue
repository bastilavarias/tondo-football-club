<template>
  <div class="landing-image" :style="`background-image: url('${landingPageImageCDN}')`">
    <div class="landing-content">
      <v-container>
        <div class="text-left">
          <h1 class="title font-weight-thin text-capitalize d-none d-sm-block">
            {{information.featured.message.subtitle}}</h1>
          <h1 class="display-3 display-md-4 font-weight-bold mb-5 text-capitalize">
            <span class="d-block d-sm-inline-block">{{information.featured.message.title.tondo}}</span>
            <span class="d-block d-sm-inline-block">{{information.featured.message.title.football}}</span>
            <span class="d-block d-sm-inline-block">{{information.featured.message.title.club}}</span>
          </h1>
          <v-btn :class="`text-capitalize ${ screenBreakPoint.mdAndDown ? 'mb-2' : 'mr-2'}`" color="primary"
                 :block="screenBreakPoint.mdAndDown"
                 :large="screenBreakPoint.lgAndDown" :x-large="screenBreakPoint.lgAndUp" depressed
                 @click="$vuetify.goTo('#home-match-schedules')">
            See More
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-btn class="text-capitalize" color="white" outlined :block="screenBreakPoint.mdAndDown"
                 :large="screenBreakPoint.lgAndDown" :x-large="screenBreakPoint.lgAndUp" depressed
                 :to="{name: 'about-us'}">
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
    import information from "../../information";
    import utilities from "../../plugins/utilities";

    export default {
        name: "home-landing-page",

        data: function () {
            return {
                currentIndex: null,
                shouldShowContentMessage: false
            };
        },

        mixins: [information, utilities],

        computed: {
            landingPageImageCDN() {
                return this.information.featured.message.image;
            },

            windowHeight() {
                return window.screen.height;
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
