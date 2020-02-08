<template>
  <div>
    <vue-gallery :images="images" :index="currentIndex" @close="currentIndex = null"></vue-gallery>
    <v-row no-gutters>
      <template v-for="(imageSource, index) in images">
        <v-col cols="6" sm="4" md="3" :key="index">
          <v-img
            @click="currentIndex = index" :src="imageSource" :height="isOnMobile ? '150' : '300'" width="100%" class="mx-auto shadow-1"></v-img>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
    import utilities from "../plugins/utilities";

    export default {
        name: "generic-gallery",

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

        mixins: [utilities]
    };
</script>

<style scoped>
  .image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
    display: inline-block;
  }
</style>
