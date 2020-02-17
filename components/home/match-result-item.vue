<template>
  <v-card flat color="transparent" height="500" width="100%" @mousemove="scaleContentImage = true"
          @mouseleave="scaleContentImage = false" tile>
    <div :class="`match-result-item-image ${scaleContentImage ? 'scale-content-image' : ''}`"
         :style="`background-image: url(${posterImage})`"
    >
    </div>
    <div class="shadow-inset"></div>
    <div class="match-result-item-content text-center">
        <span class="caption white--text text-capitalize">{{leagueName}} Game Result <v-avatar :size="15"><v-img
          :src="leagueLogo"></v-img></v-avatar></span>
      <v-container fill-height>
        <v-row justify="center" align="center">
          <div style="display: flex; align-items: center;">
            <v-avatar :size="75">
              <v-img :src="teamA.logo"></v-img>
            </v-avatar>
            <span class="display-2 font-weight-bold">{{teamA.score}}</span>
          </div>
          <span class="display-1 font-weight-bold mx-5">-</span>
          <div style="display: flex; align-items: center;">
            <span class="display-2 font-weight-bold">{{teamB.score}}</span>
            <v-avatar :size="75">
              <v-img :src="teamB.logo"></v-img>
            </v-avatar>
          </div>
        </v-row>
        <p class="subtitle-2 white--text mt-5 mb-2 text-capitalize text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
      </v-container>
    </div>
  </v-card>
</template>

<script>
    export default {
        name: "home-match-result-item",

        props: {
            leagueName: {
                type: String,
                required: true
            },

            leagueLogo: {
                type: String,
                required: true
            },

            teamA: {
                type: Object,
                required: true
            },

            teamB: {
                type: Object,
                required: true
            },

            posterImage: {
                type: String,
                required: true
            },
        },

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
