<template>
  <vue-carousel :per-page="1" center-mode :paginationEnabled="false" autoplay easing="ease" :autoplayTimeout="4000">
    <template v-for="(image, index) in information.featured.banners">
      <vue-slide :key="index">
        <div class="landing-image" :style="`background-image: url('${image}')`">
          <div class="landing-content">
            <v-container>
              <div class="text-left">
                <h1 class="title font-weight-thin text-capitalize">{{information.featured.message.subtitle}}</h1>
                <h1 class="display-3 display-md-4 font-weight-bold mb-5 text-capitalize">{{information.featured.message.title}}</h1>
                <v-btn class="text-capitalize mr-2" color="primary" x-large depressed>
                  See More
                  <v-icon small>mdi-chevron-right</v-icon>
                </v-btn>
                <v-btn class="text-capitalize white--text" color="primary" x-large outlined large depressed>
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
      </vue-slide>
    </template>
  </vue-carousel>
</template>

<script>
    import "../../assets/css/animation.css";
    import information from "../../information";

    export default {
        name: "home-landing-page",

        data: function () {
            return {
                currentIndex: null,
                shouldShowContentMessage: false
            };
        },

        mixins: [information]
    };
</script>

<style scoped>
  .landing-image {
    background-image: url("https://images.pexels.com/photos/978695/pexels-photo-978695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
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
