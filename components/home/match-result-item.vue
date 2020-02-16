<template>
  <v-card flat color="transparent" height="500" width="100%" @mousemove="scaleContentImage = true"
          @mouseleave="scaleContentImage = false" tile>
    <div :class="`match-result-item-image ${scaleContentImage ? 'scale-content-image' : ''}`"
         :style="`background-image: url('https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-0/p640x640/86348651_658192571389012_2096172300779913216_o.jpg?_nc_cat=107&_nc_oc=AQmmlh88TTx1SZBRX-bKzyYtHx75JiNEyrdq9BPPakNnI3bZ8HuimXAAWo9QyYQpCUU&_nc_ht=scontent.fmnl5-1.fna&_nc_tp=6&oh=906eaca226fe151951db2a2f269dbf80&oe=5EB8B8B4')`"
    >
    </div>
    <div class="shadow-inset"></div>
    <div class="match-result-item-content text-center">
        <span class="caption white--text">7s Football League Game Result <v-avatar :size="15"><v-img
          :src="require('../../assets/logos/7sLeague.png')"></v-img></v-avatar></span>
      <v-container fill-height>
        <v-row justify="center" align="center">
          <div style="display: flex; align-items: center;">
            <v-avatar :size="75">
              <v-img :src="require('../../assets/logos/tondoFC.png')"></v-img>
            </v-avatar>
            <span class="display-2 font-weight-bold">3</span>
          </div>
          <span class="display-1 font-weight-bold mx-5">-</span>
          <div style="display: flex; align-items: center;">
            <span class="display-2 font-weight-bold">2</span>
            <v-avatar :size="75">
              <v-img :src="require('../../assets/logos/teamMatu.png')"></v-img>
            </v-avatar>
          </div>
        </v-row>
        <p class="subtitle-2 white--text mt-5 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
                                                    dicta
                                                    laboriosam minima placeat repellendus, velit?</p>
      </v-container>
    </div>
  </v-card>
</template>

<script>
    export default {
        name: "home-match-result-item",

        data() {
            return {
                scaleContentImage: false
            };
        }
    };
</script>

<style scoped>
  .match-result-item-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    transition: transform .2s;
  }

  .shadow-inset {
    -webkit-box-shadow: inset -1px -200px 300px -13px rgba(0, 0, 0, 1);
    -moz-box-shadow: inset -1px -200px 300px -13px rgba(0, 0, 0, 1);
    box-shadow: inset -1px -200px 300px -13px rgba(0, 0, 0, 1);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .scale-content-image {
    transform: scale(1.2);
  }

  .match-result-item-content {
    color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 3;
  }
</style>
