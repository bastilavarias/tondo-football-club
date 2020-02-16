<template>
  <vue-carousel :per-page="1" center-mode :paginationEnabled="false" autoplay easing="ease"
                :autoplayTimeout="5000">
    <template v-for="(image, index) in images">
      <vue-slide :key="index">
        <div class="landing-image" :style="`background-image: url(${image})`">
          <div class="landing-content">
            <v-container>
              <div class="text-left">
                <h1 class="title font-weight-thin">Welcome to the official website
                                                   of</h1>
                <h1 class="display-3 display-md-4 font-weight-bold mb-5">Tondo Football Club</h1>
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

    export default {
        name: "home-landing-page",

        data: function () {
            return {
                images: [
                    "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-9/82041784_625095584698711_6729586146440904704_o.jpg?_nc_cat=103&_nc_oc=AQm0EuCpT2g_8VATEsOiqaafYopKcJIrYTUORjDgv7Rfbn7GOQoJs5ldPNcHVNfY0u0&_nc_ht=scontent.fmnl5-1.fna&oh=33da2893a88aa91242752c283d6cebb5&oe=5EB6E685",
                    "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                ],
                currentIndex: null,
                shouldShowContentMessage: false
            };
        },

        created() {
        }
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
