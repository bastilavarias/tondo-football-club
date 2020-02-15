<template>
  <section>
    <vue-carousel :per-page="1" center-mode :paginationEnabled="false" autoplay easing="ease" loop
                  :autoplayTimeout="3000">
      <template v-for="(image, index) in images">
        <vue-slide :key="index">
          <div class="landing-image" :style="`background-image: url(${image})`">
            <div class="landing-content">
              <v-container fluid fill-height>
                <v-row align-content="center" justify="center">
                  <div class="text-center">
                    <h1 class="display-3 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing.s</h1>
                    <h2 class="title mb-5">Lorem ipsum dolor sit amet.</h2>
                    <v-btn class="text-capitalize mr-2" color="primary" x-large depressed>
                      See More
                      <v-icon small>mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn class="text-capitalize white--text" color="primary" x-large outlined large depressed>
                      About Us
                      <v-icon small>mdi-chevron-right</v-icon>
                    </v-btn>
                  </div>
                </v-row>
              </v-container>
              <v-card>
              </v-card>
            </div>
            <div class="dark-overlay"></div>
          </div>
        </vue-slide>
      </template>
    </vue-carousel>
  </section>
</template>

<script>
    export default {
        name: "home",

        data: function () {
            return {
                images: [
                    "https://images.pexels.com/photos/978695/pexels-photo-978695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/1198174/pexels-photo-1198174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/1198174/pexels-photo-1198174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "https://images.pexels.com/photos/978695/pexels-photo-978695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                ],
                currentIndex: null
            };
        },
    };
</script>

<style scoped>
  .landing-image {
    background-image: url("https://images.pexels.com/photos/978695/pexels-photo-978695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    width: 100%;
    height: 120vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: .5;
    z-index: 2;
  }

  .landing-content {
    color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
</style>
