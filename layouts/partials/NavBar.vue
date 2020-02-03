<template>
  <v-app-bar app :color="`${isUserScrolledDown ? 'primary' : 'transparent'}`" dark
             :flat="!isUserScrolledDown" hide-on-scroll>
    <v-toolbar-title>
      <span v-if="isUserScrolledDown">Tondo Football Club</span>
      <v-img :src="require('../../assets/tondoFootballClubLogo.png')" height="60" width="60" v-else></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-menu open-on-hover offset-x>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            v-on="on"
            text
          >
            Home
          </v-btn>
        </template>
        <v-card width="350">
          dfsf
        </v-card>
      </v-menu>
      <v-btn text>Articles</v-btn>
      <v-btn text>Game Schedules</v-btn>
      <v-btn text>Store</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
    export default {
        name: "nav-bar",

        data() {
            return {
                scrollY: 0
            };
        },

        computed: {
            isUserScrolledDown() {
                if (process.browser) {
                    return this.scrollY > window.screen.height - 200;
                }
            }
        },

        methods: {
            handleUserScrollEvent(event) {
                if (event.type === "scroll" && process.browser) {
                    this.scrollY = window.scrollY;
                }
            }
        },

        mounted() {
            if (process.browser) {
                window.addEventListener("scroll", this.handleUserScrollEvent);
            }
        }
    };
</script>
